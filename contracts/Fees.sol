// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity >= 0.8.21;

import "./Ownable.sol";

contract Fees is Ownable {
    uint gasPrice;
    address payAddress;
    uint feePercent;
    
    function setGasPrice(uint price) public ownerOnly() {
        gasPrice = price;
    }

    function getGasPrice() public view returns (uint) {
        return gasPrice;
    }

    function setPayAddress(address addr) public ownerOnly() {
        payAddress = addr;
    }

    function setFeePercent(uint percent) public ownerOnly() {
        feePercent = percent;
    }

    function getPayAddresAndFeePercent() public view returns (address addr, uint percent) {
        return (payAddress, feePercent);
    }

    function getPayAddress() public view returns (address) {
        return payAddress;
    }

    function getFeePercent() public view returns (uint) {
        return feePercent;
    }
}
