import { useState } from "react";
import { AuthProvider } from "oreid-js";
import { useOreId } from "oreid-react";
import "./App.css";

export const LoginPage = () => {
  const oreId = useOreId();
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
      <div className="box">
        <h1 className="title">Congrats!🥳 </h1>
        <h2 classname="h2">
          You have adquired 2 POAPs.Would you like us to keep them safe in a
          web3 wallet?
        </h2>
        <div classname="buttons">
          <button
            onClick={() => {
              loginWithProvider(AuthProvider.Google);
            }}
          >
            Log in with Google
          </button>
          <button
            onClick={() => {
              loginWithProvider(AuthProvider.Email);
            }}
          >
            Log in with Email
          </button>

          {error && <div>Error: {error.message}</div>}
        </div>
      </div>
    </div>
  );
};
