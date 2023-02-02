# ORE-ID Walkthrough

## Articles

1. [Prepare Your Project](1-Prepare_Your_Project/1-Prepare_Your_Project.md)
2. [Implemeting ORE-ID into a React Application](2-Implementing_ORE-ID/2-Implementing_ORE-ID.md)
3. [Making ORE-ID Available Across React Components](3-Making_ORE-ID_Available/3-Making_ORE-ID_Available.md)
4. [Signup and Login](4-Signup_and_Login/4-Signup_and_Login.md)
5. [Logging Out](5-Log_Out/5-Log_Out.md)
6. [Signing Transactions](6-Signing_Transactions/6-Signing_Transactions.md)
7. [Creating Custom Transaction using ChainJs](7-Creating_Custom_Transactions/7-Creating_Custom_Transactions.md)


## Overview

Welcome to the ```ORE ID``` ecosystem.  ORE ID service is your gateway to building Web3.0 applications.  The main features to harness include: account authentication, blockchain account creation, and easy blockchain interaction for your user base.  

This article series follows the implementation of ORE ID service into a JavaScript ```React``` application.   The series will:
* Walk through the basics of integrating the ORE ID core service.  
* Explain how to engage user actions with the ```webpopup plugin```. 
* Quickly transfer tokens by creating Transaction objects. 
* How to create custom transactions using ```ChainJs```.  

At the end, this guide will have walked you step-by-step through the creation of a simple, but powerful, ORE ID application in React.

This series prepares an ORE ID powered application that will work on the ```Avalanche C-Chain``` Blockchain.  We use the ```Fuji Testnet``` testnet while developing the application, so real funds are not used.

> 💥 Note: The application in this guide can be easily adapted to run on *```Polygon```*, *```Ethereum```*, *```TELOS EVM```*, etc.  Look for tips, starting in article six, for more info.  Multi-chain is one of the main facets of the ORE ID service.  Creating apps that work with multiple blockchains will require very minor code changes. Write the code once, and easily operate on different blockchains.

## Tools used in this guide

1. [*oreid-js*](https://www.npmjs.com/package/oreid-js) [4.5.0]
2. [*oreid-react*](https://www.npmjs.com/package/oreid-react) [1.5.0]
3. [*oreid-webpopup*](https://www.npmjs.com/package/oreid-webpopup) [2.2.4]
4. [*@open-rights-exchange/chain-js*](https://www.npmjs.com/package/@open-rights-exchange/chain-js) [4.9.1]
5. [*@open-rights-exchange/chain-js-plugin-ethereum*](https://www.npmjs.com/package/@open-rights-exchange/chain-js-plugin-ethereum) [4.12.0]


## How to use this walkthrough

Each article has a complete set of code.  The code covers the topic discussed in the corresponding article. The complete project is available in the folder of the final article.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### Sign Up for an ORE ID Developer Account

Create a new ORE ID application at https://oreid.io/developer/new-app. Make sure you select Avalanche to follow along with this walkthrough.

### Quick Setup
This guide comes with a script that will set up the projects in each article's folder for use.  Be sure to first add your app_id to the .env.local-example file.  Then, run the quickstart script by entering the following in the command shell.

```bash
sh quickstart.sh
```

All of the articles will now be ready to start.  Start each article seperatly using ```yarn start``` from inside the article's folder.

### Manually install project dependencies:

Each article requires a copy of the ```.env.local``` file, which contains your ORE ID Application ID (AppId).  Copy the ```.env.local-example``` file to each article and rename ```.env.local```.

If you wish to run the sample code. It will be necessarry to install the dependencies in each of the article's folder.  

```shell
yarn install
```

### Run the final app in development mode:

```shell
cd 7-Creating_Custom_Transactions
yarn start
```

Or you can run any of the subsequent articles by moving into the directory and running ```yarn start```.

Open http://localhost:3000 to view your application in the browser. The page will reload if you make edits.

> Note: Due to a bug in Create React App 5 - use ```'GENERATE_SOURCEMAP=false react-scripts start'``` to start the app or you may see the error 'Failed to parse source map...'

## Project Clean Up
Kill the nodejs instances using ```ctrl + c``` in the terminal.
Then, delete the ```oreid-react-walkthrough``` folder.

## TLDR

This walkthrough was created to show off the core functionality of ORE ID.  ORE ID is a Web3.0 authentication and blockchain interaction service. The goal of this article is to explain how to implement this product into a React application using the native ORE ID JS SDK. Follow along to get ORE ID integrated into your application.  You will also learn basic functionality for interacting with the Avalanche C-Chain Blockchain.