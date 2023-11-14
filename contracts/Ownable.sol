// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity >= 0.8.21;

contract Ownable {
    address private _owner;

    constructor() {
        _owner = msg.sender;
    }

    function owner() public view virtual returns (address) {
        return _owner;
    }

    modifier ownerOnly() {
        require(msg.sender == owner(), "Access denied");
        _;
    }
}
