import { OreId } from "oreid-js";
import { OreidProvider } from "oreid-react";
import { useEffect, useState } from "react";
import { WebPopup } from "oreid-webpopup";

const oreId = new OreId({
	appName: "ORE-ID Sample App",
	appId: process.env.REACT_APP_OREID_APP_ID,
	oreIdUrl: "https://service.oreid.io",
	plugins: {
		popup: WebPopup(),
	},
});

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
	}

	return (
		<OreidProvider oreId={ oreId }>
			Hello World!
		</OreidProvider>
	);
};

export default App