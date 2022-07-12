## Login and SignUp using ORE ID

```text
📢 What this article covers: Implement ORE ID login/signup popup
```

For this article we will be creating a new React component in a new file named *LoginPage.js*.  This file will be stored in the *src/* directory.

1. The first step is to import *```useOreId()```*.

```jsx
// LoginPage.js

import { userOreId } from "oreid-react";
```

2. The *```useOreId()```* function is callable from other React components that are nested inside the *```OreIdProvider```* wrapper.  Create a new React component named *```LoginPage```*.  Create the oreId object by calling *```useOreId()```* .  Return two buttons which will be linked up later on.

```jsx
export const LoginPage = () => {
    const oreId = userOreId();

    return (
        <div>
            <button>
                Google
            </button>
            <button>
                Email
            </button>
        </div>
    );
}
```

3. Two functions and a React state are called to prepare for the user login process.  *error* and *setError* will be used to display error information to the page.
*```onSuccess()```* prints the user's data to the console.  



```jsx
// Inside LoginPage component
// ...
    const [error, setError] = useState("");
    
    const onError = (error) => {
        console.log("Login failed", error);
        setError(error);
    };
    
    const onSuccess = ({ user }) => {
        console.log("Login successfull. User Data: ", user);
    };
```

4. The *```loginWithProvider```* function will initiate the pop up window that carries out the sign up/login sequence.  The function will accept an *```AuthProvider```* object which tells the webpopup the login flow to initialize.

```jsx
const loginWithProvider = (provider) => {
    oreId.popup
        .auth({
            provider,
        })
        .then(onSuccess)
        .catch(onError);
};
```

5. Now, the *```loginWithProvider()```* function will be called from the *```<button onClick={}>```* property.  Display the error message if there is one.  The *LoginPage.js* file should now resemble the one below.

```jsx
import { AuthProvider } from "oreid-js";
import { useOreId } from "oreid-react";
import { useState } from "react";

export const LoginPage = () => {
    const oreId = userOreId();
    const [error, setError] = useState("");
    
    const onError = (error) => {
        console.log("Login failed", error);
        setError(error);
    };
    
    const onSuccess = ({ user }) => {
        console.log("Login successfull. User Data: ", user);
    };

    const loginWithProvider = (provider) => {
        oreId.popup
            .auth({
                provider,
            })
            .then(onSuccess)
            .catch(onError);
    };

    return (
        <div>
            <button
                onClick={() => {
                    loginWithProvider(AuthProvider.Google);
                }}
            >
                Google
            </button>
            <button
                onClick={() => {
                    loginWithProvider(AuthProvider.Email);
                }} 
            >
                Email
            </button>

            {error && <div>Error: {error.message}</div>}
        </div>
    );
};
```

7. One last change needs to be made to the *App.js* file.  Insert the *```<LoginPage /> ```* component into the *```AppWithProvider```* component created in the previous article.

```jsx
import { LoginPage } from "./LoginPage";
// ...

const AppWithProvider = () => {
    const isLoggedIn = useIsLoggedIn();
    return (
        <div>
            {/* The following if statement will display */}
            {/* the logged in status of the user. The login */}
            {/* page will be shown if the user is logged out. */}
            {isLoggedIn ? "Logged In" : <LoginPage />}
        </div>
    );
};
```

Your application is now logging users into your ORE ID appId.  In the next article, the simple logout from the ORE ID service is demonstrated.