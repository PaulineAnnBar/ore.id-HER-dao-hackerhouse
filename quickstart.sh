echo "Copying the .env.local file into each article's individual folder."
cp .env.local-example 1-Prepare_Your_Project/.env.local
cp .env.local-example 2-Implementing_ORE-ID/.env.local
cp .env.local-example 3-Making_ORE-ID_Available/.env.local
cp .env.local-example 4-Signup_and_Login/.env.local
cp .env.local-example 5-Log_Out/.env.local
cp .env.local-example 6-Signing_Transactions/.env.local
cp .env.local-example 7-Creating_Custom_Transactions/.env.local

echo "Installing packages in 6-Signing_Transactions."
cd 6-Signing_Transactions
yarn install

echo "Copying node_modules to article folders. (This may take a minute or two"
cp -R node_modules ../1-Prepare_Your_Project
cp -R node_modules ../2-Implementing_ORE-ID
cp -R node_modules ../3-Making_ORE-ID_Available
cp -R node_modules ../4-Signup_and_Login
cp -R node_modules ../5-Log_Out

echo "Installing packages in 7-Creating_Custom_Transactions"
cd ../7-Creating_Custom_Transactions
yarn install

echo "Use yarn start in each folder to run that article's sample"

