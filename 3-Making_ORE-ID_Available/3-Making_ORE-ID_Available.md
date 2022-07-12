## Making ORE ID Available Across React Components

```text
📢 What this article covers: How to use OreidProvider.
```

1. The npm package *[oreid-react](https://www.npmjs.com/package/oreid-react)* contains many goodies for the react framework.  Add the package into your project.

```bash
yarn add oreid-react
```

2. The tool we will be focusing on in this article is *```OreidProvider```.*  This wrapper for React will make the oreId object available to other react modules. Another tool we will need is *```useIsLoggedIn```*, which returns a boolean of the user's login status.

```jsx
import { OreidProvider, useIsLoggedIn } from "oreid-react";
```

3. The wrapper is added to the return statement in the App.js file.

```jsx
// ...
    return (
        <OreidProvider oreId={ oreId }>
            Hello World!
        </OreidProvider>
    );
// ...
```
>Breaking down the above code:
→ *```<OreidProvider>```* wrapper takes in a variable named *```oreId```*. <br />
→ The part of the application that requires access to the OreId object will need to be contained within this wrapper. <br />
→ The wrapper is closed out.

4. Let’s create a new React component which will need to use *```oreId```* service.   The component will be named *```AppWithProvider```.* Along with the new component, import the *```useIsLoggedIn```()* function. This function will check if the user is logged in and returns True/False. 

```jsx
// App.js
import { useIsLoggedIn } from "oreid-react";

// ...
const AppWithProvider = () => {
    const isLoggedIn = useIsLoggedIn()
    return (
        <div>
            {/* The following if statement will display */}
            {/* the logged in status of the user. */}
            {isLoggedIn ? "Logged In" : "Logged Out"}
        </div>
    );
};
```

5. ORE ID takes a split second to confirm it is connected when *```oreId.init()```* is called.  React must give *```oreId```* time to initialize, before the *```useIsLoggedIn()```* function can be called. To do this, we must instantiate a React state, call it *```oreidReady```*. The state returns if *```oreId```* is initialized or not.  Create an if statement that returns “loading…” while *```oreId```* is being initiated. Your *```App```* component should include the following.

```jsx
// ...
    const [oreidReady, setOreidReady] = useState(false);

    useEffect(() => {
        oreId.init()
            .then(() => {
                setOreidReady(true);
                console.log("OREID is connected");
            })
            .catch((error) => console.log(error));
    }, []);

    if (!oreidReady) {
        return <>Loading...</>;
    }
// ...
```

6. Add the AppWithProvider component inside the *```OreidProvider```* wrapper, and your *App.js* should now resemble the following.

```jsx
// App.js

import { OreId } from "oreid-js"
import { OreidProvider, useIsLoggedIn } from "oreid-react"
import { useEffect, useState } from "react"
import { WebPopup } from "oreid-webpopup"

const oreId = new OreId({
    appName: "ORE-ID Sample App",
    appId: OREID_APP_ID,
    oreIdUrl: "https://service.oreid.io",
    plugins: {
        popup: WebPopup(),
      },
});

const AppWithProvider = () => {
    const isLoggedIn = useIsLoggedIn()
    return (
        <div>
            {/* The following if statement will display */}
            {/* the logged in status of the user. */}
              {isLoggedIn ? "Logged In" : "Logged Out"}
        </div>
    );
};

export const App = () => {
    const [oreidReady, setOreidReady] = useState(false);

    useEffect(() => {
        oreId.init()
        .then(() => {
            setOreidReady(true);
            console.log("OREID is connected");
        })
        .catch((error) => console.log(error));
    }, []);

      if (!oreidReady) {
        return <>Loading...</>;
    };

    return (
        <OreidProvider oreId={ oreId }>
            <AppWithProvider />
        </OreidProvider>
    );
};

export default App
```

Your application is now ready to begin adding the sign up and login functionality.  In the next article, we will cover how to sign up a new user using ORE ID.