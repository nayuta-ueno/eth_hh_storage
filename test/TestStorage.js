const Storage = artifacts.require("Storage");

contract("test", async accounts => {
    it("init", async () => {
        const storage = await Storage.new();

        for (let lp = 0; lp < 5; lp++) {
            let st = await web3.eth.getStorageAt(storage.address, lp);
            console.log(`[${lp}] ${st}`);
        }

        let pos = web3.utils.soliditySha3("abc", 2);
        let st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[${pos}] ${st}`);
    });
});
