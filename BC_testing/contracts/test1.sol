pragma solidity ^0.8.21;

contract TestContract {
    uint counting;

    event Transfer(address from, address receiveAddress, uint amount);

    struct TestStruct {
        address sendAddress;
        address receiveAddress;
        uint amount;
    }

    TestStruct[] testStructs;

    function addToBC(address payable receiveAddress, uint amount) public{
        counting += 1;
        testStructs.push(TestStruct(msg.sender, receiveAddress, amount));

        emit Transfer(msg.sender,receiveAddress ,amount);

    }
}