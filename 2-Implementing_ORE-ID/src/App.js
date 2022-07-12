import { OreId } from "oreid-js"
import { useEffect } from "react"
import { WebPopup } from "oreid-webpopup"


const oreId = new OreId({
    appName: "ORE-ID Sample App",
    appId: process.env.REACT_APP_OREID_APP_ID,
    oreIdUrl: "https://service.oreid.io",
    plugins: {
        popup: WebPopup(),
    },
});

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

export default App