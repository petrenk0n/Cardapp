pragma solidity ^0.5.0;

contract CarDetails {
    uint public carCount = 0;

    // Car object
    struct Car {
        uint id;
        string carModel;
        uint vin;
        uint mileage;
        uint numOfOwners;
        uint numOfServiceVisits;
        uint numOfReportedAccidents;
    }

    // Storing
    mapping(uint => Car) public cars;

    event CarAdded(
        uint id;
        string carModel;
        uint vin;
        uint mileage;
        uint numOfOwners;
        uint numOfServiceVisits;
        uint numOfReportedAccidents;
    );

    // Gets called when a smart contract is run for the first time
    constructor() public {
        // Add default car
        createCar("Koenigsegg Jesko", 123, 3000, 2, 7, 0);
    }

    // Put a new car inside the mapping
    function createCar(string memory _model, uint _vin, uint _mileage, uint _numOfOwners, uint _numOfServiceVisits, uint _numOfReportedAccidents) public {
        carCount++;
        cars[carCount] = Car(carCount, _model, _vin, _mileage, _numOfOwners, _numOfServiceVisits, _numOfReportedAccidents);

        // Trigger event
        emit CarAdded(carCount, _model, _vin, _mileage, _numOfOwners, _numOfServiceVisits, _numOfReportedAccidents)
    }
}