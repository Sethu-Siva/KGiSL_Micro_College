// creating a constructor function
function Vehicle(vehicleName)
{
    this.vehicleName = vehicleName;
    throw new Error("Sthu");
}

Vehicle.prototype.display = function() {
    return this.vehicleName;
}

var vehicle = new Vehicle();