// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.6.0;

contract Storage {
    uint256 public v256_1;
    uint8 public v8_1;
    uint16 public v16_1;
    uint8 public v8_2;
    mapping(string => uint256) vmap_1;

    constructor() public {
        v256_1 = uint256(-1);
        v8_1 = 0x56;
        v16_1 = 0x1234;
        v8_2 = 0x78;
        vmap_1["abc"] = 100;
    }
}
