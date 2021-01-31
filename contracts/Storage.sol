// SPDX-License-Identifier: Apache-2.0
pragma solidity ^0.6.0;

contract Storage {
    uint256 public v256_1;
    uint8 public v8_1;
    uint16 public v16_1;
    uint8 public v8_2;
    mapping(string => uint256) public vmap_1;
    mapping(uint256 => string) public vmap_2;
    uint32[] public arr_1;
    string private str_1;
    string private str_2;
    bytes public byt_1;
    bytes private byt_2;

    constructor() public {
        v256_1 = uint256(-1);
        v8_1 = 0x56;
        v16_1 = 0x1234;
        v8_2 = 0x78;
        vmap_1["abc"] = 100;
        vmap_2[100] = "abc";
        arr_1.push(1);
        arr_1.push(2);
        arr_1.push(3);
        arr_1.push(4);
        arr_1.push(5);
        arr_1.push(6);
        arr_1.push(7);
        arr_1.push(8);
        arr_1.push(9);
        str_1 = "12345678901234567890123456789a";
        str_2 = "12345678901234567890123456789012";
        byt_1 = bytes("abcdefghijABCDEFGHIJabcdefghijk");
        byt_2 = bytes("abcdefghijABCDEFGHIJabcdefghijkl");
    }
}
