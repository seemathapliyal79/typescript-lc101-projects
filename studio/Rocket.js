"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //Returns the sum of all items using each item's massKg property
        var myTotalMass = 0;
        for (var i = 0; i < items.length; i++) {
            myTotalMass += items[i].massKg;
        }
        return myTotalMass;
    };
    Rocket.prototype.currentMassKg = function () {
        var cargoTotal = this.sumMass(this.cargoItems);
        var astronautTotal = this.sumMass(this.astronauts);
        var massTotal = cargoTotal + astronautTotal;
        return massTotal;
    };
    Rocket.prototype.canAdd = function (item) {
        var totalMass = this.currentMassKg() + item.massKg;
        if (totalMass <= this.totalCapacityKg)
            return true;
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        var itCanAddIt = this.canAdd(cargo);
        if (itCanAddIt) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var itCanAddIt = this.canAdd(astronaut);
        if (itCanAddIt) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
