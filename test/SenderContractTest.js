const { expect } = require('chai');

describe('sender contract', () => {
    let Token, token, Contract, contract, owner, address1, address2;

    beforeEach(async ()=> {
        Token = await ethers.getContractFactory('BarylauToken');
        token = await Token.deploy(10**9);
        [owner, address1, address2, _] = await ethers.getSigners();
        Contract = await ethers.getContractFactory('SenderContract');
        contract = await Contract.deploy();
        await contract.setAddress(token.address);
        console.log('owner: ', owner.address);
        console.log('adres1: ', address1.address);
        console.log('adres2: ', address2.address);
    })

    describe('Deployment', () => {
        it('should set source adres', async () => {
            expect(await contract.getAddress()).to.equal(token.address);
        })

        it('should send ether', async () => {
            await token.transfer(address1.address, 100);
            await token.approve(contract.address, 100);
            await token.approve(owner.address, 100);
            console.log(await token.allowance(owner.address, contract.address));
            console.log(await token.allowance(address1.address, contract.address));
            await contract.sendToAdres(owner.address, address2.address, 1);
            console.log(await token.balanceOf(address2.address))
        })


    });


})

