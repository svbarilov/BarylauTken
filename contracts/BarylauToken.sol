pragma solidity ^0.7.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract BarylauToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("BarylauToken", "BRLU") {
        _mint(msg.sender, initialSupply);
    }
}