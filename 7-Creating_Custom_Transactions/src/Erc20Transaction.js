import { PluginChainFactory, Models } from "@open-rights-exchange/chain-js";
import { Plugin as EthereumPlugin, ModelsEthereum } from "@open-rights-exchange/chain-js-plugin-ethereum";
import React, { useState } from "react";
import { ChainNetwork } from "oreid-js";
import { useOreId, useUser } from "oreid-react";
import { toEthereumAddress } from "@open-rights-exchange/chain-js-plugin-ethereum/dist/cjs/src/plugin/helpers";
import { TxExecutionPriority } from "@open-rights-exchange/chain-js/dist/cjs/src/models";


const getChainAccount = (user, chainNetwork) => {
    const signingAccount = user.chainAccounts.find(
        (ca) => ca.chainNetwork ===  chainNetwork
    );

    const errorMsg = `User does not have any accounts on ${chainNetwork}`;

    if (!signingAccount) {
        console.log( errorMsg );
        return;
    };

    console.log( `Signing Account for ${chainNetwork}: ${signingAccount.chainAccount}`);

    return signingAccount;
};

const createErc20TransferTxn = async (contractAddress, signingAccount, recipient, amount) => {
    const connectChain = async (signingAccount) => {
        const endpoints = [
            {
                url: new URL('https://ropsten.infura.io/v3/fc379c787fde4363b91a61a345e3620a'),
            },
        ];

        const chainOptions = {
            chainName: 'ropsten',
            hardFork: 'istanbul',
        };

        const chainType = Models.ChainType.EthereumV1;
    
        const chain = PluginChainFactory(
            [EthereumPlugin],
            chainType,
            endpoints,
            chainOptions
        );
    
        // connect to the chain
        await chain.connect();
        console.log( `Connected to ${signingAccount.chainNetwork}`);
        return chain;
    };

    const chain = await connectChain();

    const transactionBody = await chain.new.Transaction({
        maxFeeIncreasePercentage: 200.00
    });

    const composeErc20TransferParams = {
        contractAddress: toEthereumAddress(contractAddress), // ERC-20 Smart contract address for USDC
        to: toEthereumAddress(recipient),
        from:  toEthereumAddress(signingAccount.chainAccount),
        value: amount,
        precision: 18
    };

    const action = await chain.composeAction(
        ModelsEthereum.EthereumChainActionType.ERC20Transfer,
        composeErc20TransferParams
    );

    transactionBody.actions = [action];

    await transactionBody.prepareToBeSigned();
    await transactionBody.validate();

    console.log(
        `New Transaction: ${( await transactionBody.getSuggestedFee(TxExecutionPriority.Average) )}`
    );

    // Return the first and only action generated
    return transactionBody.actions[0];

};


export const Erc20Transfer = () => {
    const[ txnId, setTxnId ] = useState("");
    const[ error, setError ] = useState("");
    const [ erc20Amount, setErc20Amount ] = useState("0.00");
    const [ recipient, setRecipient ] = useState("Null");
    const user = useUser();
    const oreId = useOreId();
    const chainNetwork = ChainNetwork.EthRopsten;
    const contractAddress = "0x07865c6e87b9f70255377e024ace6630c1eaa37f";

    if (!user) return null;

    const onError = ( error ) => {
        console.log("Transaction failed ", error);
        setError( error );
    };

    const onSuccess = ( result ) => {
        console.log( 
            "Transaction Successful. ", JSON.stringify(result)
        );
        setTxnId(result.transactionId);
    };

    const handleSign = async () => {
        const signingAccount = getChainAccount(user, chainNetwork)

        if (!signingAccount) {
            return;
        };

        console.log( `ERC-20 recipient: ${recipient} \n amount: ${erc20Amount}` );
        
        const transactionBody = await createErc20TransferTxn(
            contractAddress,
            signingAccount,
            recipient,
            erc20Amount
        );
        console.log( `ERC-20 Transaction Body: ${JSON.stringify(transactionBody)}` );

        const transaction = await oreId.createTransaction({
            chainAccount: signingAccount.chainAccount,
            chainNetwork: signingAccount.chainNetwork,
            transaction: transactionBody,
            signOptions: {
                broadcast: true,
                returnSignedTransaction: false,
            },
        });

        oreId.popup
            .sign({ transaction })
            .then(onSuccess)
            .catch(onError);
    };

    return (
        <div>
            <h2>Transfer ERC-20 Token</h2>
            <div>
                Amount
                <br />
                <input 
                    name="erc20Amount"
                    onChange={(e) => {
                        e.preventDefault();
                        setErc20Amount(e.target.value);
                    }} id={erc20Amount}></input>
            </div>
            <br />
            <div>
                Recipient
                <br />
                <input 
                    name="recipient"
                    onChange={(e) => {
                        e.preventDefault();
                        setRecipient(e.target.value);
                    }} id={recipient}></input>
            </div>
            <br />
            <div>
                <button
                    onClick={() => handleSign()}
                > Send ERC-20 Token 
                </button>
            </div>
            <br />
            <div>
                {txnId && <div>Transaction Id: {txnId}</div>}
                {error && <div>Error: {error.message}</div>}
            </div>
        </div>
    )
}