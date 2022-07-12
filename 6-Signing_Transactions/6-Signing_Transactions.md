## Signing Transaction with ORE ID

```text
📢 What this article covers: Enable transaction signing in your app.
```

It’s time to add real blockchain functionality to our React application.  This will enable the webpopup to engage the user in a transaction signing flow.  

The user will be prompted to input their password/pin.  Then, ORE ID service will do the work by preparing and sending your transaction to the blockchain.  Returned, is the transaction's blockchain id and ORE ID service process id.  

This article will use Ethereum. But, later in the series, examples of other supported chains will be demo’d.  Let’s get started by creating a *SignTransaction.js* file.  This will hold the new React component being built in this article.

1. Import the dependencies of our new module.

```jsx
// SignTransaction.js

import { useState } from "react";
import { ChainNetwork } from "oreid-js";
import { useOreId, useUser } from "oreid-react";
```

2. Create the new React component named *SignTransaction*, declare the variables, and define the helper functions.  Return a button which we will hook up shortly.

```jsx
export const SignTransaction = () => {
    const oreId = useOreId();
    const user = useUser();
    const chainNetwork = ChainNetwork.EthRopsten;
    const[ error, setError ] = useState("");

    const onError = ( error ) => {
        console.log("Transaction failed ", error);
        setError( error );
    };

    const onSuccess = ( result ) => {
        console.log( 
            "Transaction Successful. ", JSON.stringify(result)
        );
    };

	return(
        <div>
            <button>
                Send Sample Transaction
            </button>

            {error && <div>Error: {error.message}</div>}
        </div>
    );
}
```

3. Next we will create another function named *```handleSign()```.* This will contain the creation of the transaction and presentation of the webpopup. First, we need to know the user’s Ehereum Address to fill out the transaction. The logged in user’s Ethereum blockchain account is grabbed from the ORE ID service.  The function will return an error if a chainNetwork account can’t be found for that user.

```jsx
const handleSign = async () => {
    const signingAccount = user.chainAccounts.find(
        (ca) => ca.chainNetwork ===  chainNetwork
    );
    
    const errorMsg = `User doesn not have any accounts on ${chainNetwork}`;
    
    if (!signingAccount) {
        console.log( errorMsg );
        onError( errorMsg );
        return;
    };
}
```

4. *```handleSign()```* is appended with the transaction we will be pushing to the blockchain