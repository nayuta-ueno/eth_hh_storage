const Storage = artifacts.require("Storage");

contract("test", async accounts => {
    it("init", async () => {
        const storage = await Storage.new();

        for (let lp = 0; lp < 4; lp++) {
            let st = await web3.eth.getStorageAt(storage.address, lp);
            console.log(`[${lp}] ${st}`);
        }
        console.log();

        // vmap_1
        let index = 2;
        let pos = web3.utils.soliditySha3("abc", index);
        let st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[vmap_1] ${st}`);
        console.log();

        // vmap_2
        index = 3;
        pos = web3.utils.soliditySha3(100, index);
        st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[vmap_2] ${st}`);
        console.log();

        // arr_1
        index = 4;
        st = await web3.eth.getStorageAt(storage.address, index);
        console.log(`[arr_1 len] ${st}`);

        pos = web3.utils.soliditySha3(index);
        st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[arr_1 0-7] ${st}`);

        pos = web3.utils.toBN(pos).add(new web3.utils.BN('1'));
        st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[arr_1 8] ${st}`);
        console.log();

        // str_1
        index = 5;
        st = await web3.eth.getStorageAt(storage.address, index);
        console.log(`[str_1] ${st}`);
        console.log();

        // str_2
        index = 6;
        st = await web3.eth.getStorageAt(storage.address, index);
        console.log(`[str_2 len] ${st}`);

        pos = web3.utils.soliditySha3(index);
        st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[str_2 0-31] ${st}`);
        console.log();

        // byt_1
        index = 7;
        st = await web3.eth.getStorageAt(storage.address, index);
        console.log(`[byt_1] ${st}`);
        console.log();

        // byt_2
        index = 8;
        st = await web3.eth.getStorageAt(storage.address, index);
        console.log(`[byt_2 len] ${st}`);

        pos = web3.utils.soliditySha3(index);
        st = await web3.eth.getStorageAt(storage.address, pos);
        console.log(`[byt_2 0-31] ${st}`);
        console.log();
    });
});
