const { expect } = require('chai');

describe('barylau Token', () => {
    let Token, token, owner, address1, address2;

    beforeEach(async ()=> {
        Token = await ethers.getContractFactory('BarylauToken');
        token = await Token.deploy(10);
        [owner, address1, address2, _] = await ethers.getSigners();
        console.log(_);
    })

    describe('Deployment', () => {
        it('should set total supply', async () => {
            expect(await token.totalSupply()).to.equal(10)
        })

        it('should assign all supply to the owner', async () => {
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await  token.totalSupply()).to.equal(ownerBalance);
        })

        it('should have symbol', async () => {
            const symbol = await token.symbol();
            expect(symbol).to.equal('BRLU');
        })

    });

    describe('Transactions', ()=> {
        it('should transfer tokens', async () => {
            await token.transfer(address1.address, 10);
            const addr1Balance = await token.balanceOf(address1.address);
            expect(addr1Balance).to.equal(10);
        })
    })

})

