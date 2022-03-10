const { ethers } = require("hardhat");

async function main(){
    const Car = await ethers.getContractFactory("CarDetails");
    const car = await Car.deploy("Koenigsegg Jesko", 123, 3000, 2, 7, 0);
    console.log("Contract was deployed to address", car.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.log(error);
        process.exit(1);
    })