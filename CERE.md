# Deploy ChildErc20 for Cere Network

## Compile Smart Contracts
Clone repository & install all dependencies
```bash
git clone https://github.com/maticnetwork/pos-portal
cd pos-portal

npm i
```
Compile all contracts

```bash
npm run template:process
npm run build
``` 

## Deploy and verify in Polygon Mumbai (Testnet)
Deploy
```bash
export PRIVATE_KEY=
export INFURA_PROJECT_ID=
export CHILD_CHAIN_MANAGER_ADDRESS=0xb5505a6d998549090530911180f38aC5130101c6
truffle migrate -f 6 -to 6 --network=mumbaiChild
```
Update {contract-address} with the address value from the step above and verify
```bash
export POLYGONSCAN_API_KEY=
export PRIVATE_KEY=
export INFURA_PROJECT_ID=
truffle run verify ChildERC20@{contract-address} --network=mumbaiChild
```

## Deploy and verify in Polygon Mainnet
Deploy
```bash
export PRIVATE_KEY=
export INFURA_PROJECT_ID=
export CHILD_CHAIN_MANAGER_ADDRESS=0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa
truffle migrate -f 6 -to 6 --network=mainnetChild
```
Update {contract-address} with the address value from the step above and verify
```bash
export POLYGONSCAN_API_KEY=
export PRIVATE_KEY=
export INFURA_PROJECT_ID=
truffle run verify ChildERC20@{contract-address} --network=mainnetChild
```


