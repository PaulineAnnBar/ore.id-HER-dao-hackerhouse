# Copy the .env.local file into the article's individual folders
cp .env.local-example 1-Prepare_Your_Project/.env.local
cp .env.local-example 2-Implementing_ORE-ID/.env.local
cp .env.local-example 3-Making_ORE-ID_Available/.env.local
cp .env.local-example 4-Signup_and_Login/.env.local
cp .env.local-example 5-Log_Out/.env.local
cp .env.local-example 6-Signing_Transactions/.env.local
cp .env.local-example 7-Creating_Custom_Transactions/.env.local

cd 7-Creating_Custom_Transactions
yarn install

cp -R node_modules ../1-Prepare_Your_Project
cp -R node_modules ../2-Implementing_ORE-ID
cp -R node_modules ../3-Making_ORE-ID_Available
cp -R node_modules ../4-Signup_and_Login
cp -R node_modules ../5-Log_Out
cp -R node_modules ../6-Signing_Transactions

echo "Use yarn start in each folder to run that article's sample"

