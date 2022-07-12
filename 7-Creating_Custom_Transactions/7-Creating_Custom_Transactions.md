## Creating Custom Transations with Chain-js

```text
📢 What this article covers: Interact with smart contract using Chain-js
```

ORE ID can interact with any smart contract on the Ethereum network. This article walks you through the creation of more complex blockchain transactions using the open source tool set known as *```Chain-Js```*  We will explore how to interact with an ERC-20 smart contract to transfer tokens.

1. To create more complex transactions, the base package [*@open-rights-exchange/chain-js*](https://www.npmjs.com/package/@open-rights-exchange/chain-js), along with the plugin package [*@open-rights-exchange/chain-js-plugin-ethereum*](https://www.npmjs.com/package/@open-rights-exchange/chain-js-plugin-ethereum) must be added to the project.

```plaintext
yarn add @open-rights-exchange/chain-js
yarn add @open-rights-exchange/chain-js-plugin-ethereum
```

2. Create a new file named *Erc20Transaction.js*.  Import the base package and plugin into our new file.

```jsx
// Erc20Transaction.js

import 

```