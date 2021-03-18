pragma solidity ^0.7.3;

import "./BarylauToken.sol";

contract SenderContract {

    address adres;

    function setAddress(address _adres) public {
        adres = _adres;
    }

    function getAddress() public view returns (address) {
        return adres;
    }


    function sendToAdres(address sender, address recipient, uint256 amount) external returns (bool){
        BarylauToken token = BarylauToken(adres);
        return token.transferFrom(sender, recipient, amount);
    }


}