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

This article series follows the implementation of ORE ID service into a JavaScript ```React``` application.   We will cover the basics of integrating the ORE ID core service.  Explain how to engage user actions with the ```webpopup plugin```.  And, how to create custom transactions using ```ChainJs```.  This guide will walk you step-by-step through the creation of a simple ORE ID application in React.

This series prepares an ORE ID powered application that will work on the ```Ethereum``` Blockchain.  We use the ```Ropsten``` testnet while developing the application so real funds are not used.


## How to use this walkthrough

Each article has a complete set of code.  The code covers the topic discussed in the corresponding article. The complete project is available in the folder of the final article.  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

### Sign Up for an ORE ID Developer Account

## Quick Setup
This guide comes with a script that will set up the projects in each article's folder to be ran.  Be sure to to first add your app_id to the .env.local-example file.  Then, run the quickstart script by entering the following in the command shell.

```bash
sh quickstart.sh
```

### To install project dependencies use:

If you wish to run the sample code. It will be necessarry to install the dependencies in each of the article's folder.  

```shell
yarn install
```

### Runs the app in the development mode.

```shell
 yarn start
```

Open http://localhost:3000 to view your application in the browser. The page will reload if you make edits.

Note: Due to a bug in Create React App 5 - use 'GENERATE_SOURCEMAP=false react-scripts start' to start the app or you may see errors 'Failed to parse source map...'

## Project Clean Up
Kill the nodejs instances using ```ctrl + c``` in the terminal.
Then, delete the ```oreid-react-walkthrough``` folder.