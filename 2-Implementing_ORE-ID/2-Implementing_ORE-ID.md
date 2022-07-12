## Implementing ORE ID into a React application

```text
📢 What this article covers: Installation of ORE ID and its UI plugin webpopup.
```

It is now quite possible to build powerful Web3.0 applications using simple tools.  ORE Id is one of them! Give your application blockchain functionality today.

1. The first thing we will look at is the implementation of the core ORE ID service into your app.  We will do this by installing the *[oreid-js](https://www.npmjs.com/package/oreid-js)* package. 

```bash
yarn add oreid-js
```

2. This will give us a platform to install the webpopup addon from the *[oreid-webpopup](https://www.npmjs.com/package/oreid-webpopup)* package.  The webpopup plugin is the main point of interaction to your users (e.g. the UI).  

```bash
yarn add oreid-webpopup
```

3. Now, that the packages are installed, we will look at *App.js.* Here, we will begin by importing the objects.

```jsx
// App.js
import { OreId } from "oreid-js";
import { WebPopup } from "oreid-webpopup";
```

4. Time to create our *```oreId```* object.  Your OREID_APP_ID can be found under the settings section of your [ORE ID application dashboard](https://oreid.io/developer).

```jsx
const oreId = new OreId({
    appName: "ORE-ID Sample App",
    appId: OREID_APP_ID,
    oreIdUrl: "https://service.oreid.io",
    plugins: {
        popup: WebPopup(),
    },
});
```

5.  A feature of React, named *```useEffect()```*, will help initiate the *```oreId```* object.  First import the feature.

```jsx
import { useEffect } from "react";
```

6. The *```useEffect()```t* function will be used inside the *App* function.  Let’s initialize ORE ID upon the loading of the React application.

```jsx
export const App = () => {
    useEffect(() => {
        oreId.init()
        .then(() => {
            console.log("OREID is connected")
        })
        .catch((error) => console.log(error));
    }, []);

    return (
        "Hello World!"
    );
};
```

7. You should now be able to run your React application and check the console for the output.  Your *App.js* for resemble the following:


Next article, we will cover how to use the *OreidProvider* tooling to distribute the oreId instance to the entirety of the React application.