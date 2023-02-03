## Creating Custom Transations with Chain-js

```text
📢 What this article covers: Interact with smart contract using Chain-js
```

ORE ID can interact with any smart contract on the Avalanche C-Chain network. This article walks you through the creation of more complex blockchain transactions using the open source tool set known as *```Chain-Js```*  Let's explore how to interact with an ERC-20 smart contract to transfer tokens.

1. To create more complex transactions, the base package [*@open-rights-exchange/chain-js*](https://www.npmjs.com/package/@open-rights-exchange/chain-js), along with the plugin package [*@open-rights-exchange/chain-js-plugin-ethereum*](https://www.npmjs.com/package/@open-rights-exchange/chain-js-plugin-ethereum) must be added to the project.

```shell
yarn add @open-rights-exchange/chain-js
yarn add @open-rights-exchange/chain-js-plugin-ethereum
```

2. Create a new file named *Erc20Transaction.js*.  Import the base package and plugin into our new file.

```jsx
// Erc20Transaction.js

import { PluginChainFactory, Models } from "@open-rights-exchange/chain-js";
import { Plugin as EthPlugin } from "@open-rights-exchange/chain-js-plugin-ethereum";

```

## Adding react-app-rewired to React App

> For testing purposes
1. Add the *```react-app-rewired```* package to the React App. 

```shell
yarn add --dev react-app-rewired process crypto-browserify stream-browserify assert stream-http https-browserify os-browserify url buffer
```

2. Create a new file *config-overids.js*

```jsx
/// config-overides.js

const webpack = require('webpack');

module.exports = function override(config) {
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "crypto": require.resolve("crypto-browserify"),
        "stream": require.resolve("stream-browserify"),
        "assert": require.resolve("assert"),
        "http": require.resolve("stream-http"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url"),
        "process/browser": require.resolve("process/browser"),
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer']
        })
    ])
    return config;
}
```

3. Modify the *package.json* file.

```jsx
// package.json
// ...

  "scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-scripts eject"
  },

// ...
```


## Alternative chainNetworks

Polygon Mumbai Testnet
```jsx
const chainNetwork = ChainNetwork.PolygonMumbai

// ...
            { url: "https://rpc-mumbai.maticvigil.com/" },
```