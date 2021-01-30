require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close blue spot shock rare remember attitude inner prison orange sniff'; 
let testAccounts = [
"0xdfe4ac91142eb4944289f076c363c5b438713772003b910572cb13201d096374",
"0xd9b5af08188f3abc2a8faa701c164bf9aceed6760bfde74759e851783a3aa523",
"0xc83e0c8de57fccc6e95e51c15f130503bd18f879f88f956f79d647e76381882d",
"0x3566595b3f79716754643f610737a1960ab587036ba68ba323df227064ac5098",
"0xc4aa3f60667f2a07f0d2882d1ff6fe37b2127a99e6811308275788cd95891bb5",
"0xa40ad0b66f749ab93fa9fe42d10bfd24555a56a3308bcae91c55610bf733cc0f",
"0x8b8bf4dd4bf8a816eae7b8e9dc4a68f75b872a01d49f9129e5a78202e22757c9",
"0xd31a374d7803f16c70c58e87c973768f3e7da88bf1babd3a5fb1b8eb9570e2b0",
"0x1d2c2c9335564f67cf3e33485aa71a521fb1507c6c90f00f0ab7c4bb0acd4315",
"0xc59125b8faa8da1954fad0751345fe5394e9ec4a3916d8127872105bafb9ada1"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
