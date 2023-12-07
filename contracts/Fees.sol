// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity >= 0.8.21;

contract Fees {
    uint gasPrice;
    address payAddress;
    uint feePercent;
    
    function setGasPrice(uint price) public {
        gasPrice = price;
    }

    function getGasPrice() public view returns (uint) {
        return gasPrice;
    }

    function setFeesParams(address addr, uint percent) public {
        payAddress = addr;
        feePercent = percent;
    }

    function getFeesParams() public view returns (address addr, uint percent) {
        return (payAddress, feePercent);
    }
}
