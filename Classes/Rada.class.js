"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rada = /** @class */ (function () {
    function Rada(FractionsList) {
        this.FractionsList = FractionsList;
    }
    Rada.prototype.addFraction = function (fraction) {
        this.FractionsList.push(fraction);
        console.log(fraction.name + " has been added");
    };
    Rada.prototype.deleteFraction = function (name) {
        var foundFraction = this.FractionsList.findIndex(function (fraction) { return fraction.name === name; });
        if (foundFraction < 0) {
            "Fraction " + name + " not found";
        }
        this.FractionsList.splice(foundFraction, 1);
    };
    Rada.prototype.showAllFraction = function () {
        this.FractionsList.forEach(function (fraction) {
            console.log("" + fraction.name);
        });
    };
    Rada.prototype.ShowConcreteFraction = function (name) {
        var foundFraction = this.FractionsList.find(function (fraction) { return fraction.name === name; });
        console.log(foundFraction);
    };
    Rada.prototype.ShowAllFractionBribeTakers = function (fraction) {
        var BribeTakers = fraction.deputyList.filter(function (deputy) { return deputy.corrupt; });
        BribeTakers.forEach(function (bribeTaker) {
            console.log(bribeTaker.name + ", " + bribeTaker.surname + ", " + bribeTaker.AccBribe);
        });
    };
    Rada.prototype.ShowBiggestBribeTaker = function (fraction) {
        fraction.theBribiest();
    };
    Rada.prototype.ShowAllFractionDeputies = function (fraction) {
        fraction.deleteDeputies();
    };
    return Rada;
}());
exports.Rada = Rada;
