require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note museum company hunt hero foster gas'; 
let testAccounts = [
"0x5f40aaabc6755a3d9b0ac974eba079c8c39ece2d4b5f28f53460c77fd2b3773f",
"0x7ebb8ece8ac61aed641b3a56539a5332f242c5fe685e877da757f0ef5e65950b",
"0xee2b2951b79d950ff72984d79e3cbea103175ffe373eddd2dbfbac44b27ef101",
"0xbe5ddd96a6ad12db4ff02d5d7749a0a5f06b4f4c2a7c636473afc2717f73dde0",
"0xcdcbfc55ad417317dcdd2f070df0554c89778b77079bc046d9eedde6ac4d7805",
"0x04d127f4b18b5e16ba3e1dc0333729f3219db10f8c1e0e6af4846585bdd97735",
"0x6ad77c837ce646c2d184cb1c0bcb54db69c3a70acc3819cbf74140dde53307a1",
"0x87bce9d9b6ef88f5b8ccb77d84825bd562d4278ded3ae03135ccdac5bf20ba37",
"0x1ce2af6fa9af97cd0a95c40ab753226e1fc62e00a501a2de22285fce726b5b63",
"0x5ac2f37710245e62a61c9b73207871bd9ae4819d11cbf7d262c00f92f7a63ac4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

