import { Network, Alchemy } from 'alchemy-sdk';

const settings = {
    apiKey: "aTbEeKsiC38N2yMSMwD8ivz_eab7alIP",
    network: Network.ARB_MAINNET,
};
const alchemy = new Alchemy(settings);  

  

// Get the latest block

const latestBlock = alchemy.core.getBlockNumber();

    

// Get all outbound transfers for a provided address

alchemy.core

    .getTokenBalances('0x14893d2f572c3B0FDd61DCdeeF587DA5357d458B')

    .then(console.log);
    
    const nfts = alchemy.nft.getNftsForOwner("0xshah.eth");
    
// Listen to all new pending transactions
alchemy.ws.on(
    { method: "alchemy_pendingTransactions",
    fromAddress: "0x14893d2f572c3B0FDd61DCdeeF587DA5357d458B" },
    (res) => console.log(res)
);

