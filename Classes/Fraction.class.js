"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fraction = /** @class */ (function () {
    function Fraction(name, deputyList) {
        this.name = name;
        this.deputyList = deputyList;
    }
    Fraction.prototype.addDeputy = function (deputy) {
        this.deputyList.push(deputy);
        console.log('deputy has been added');
    };
    Fraction.prototype.deleteDeputy = function (name) {
        var foundDeputy = this.deputyList.findIndex(function (deputy) { return deputy.name === name; });
        if (foundDeputy < 0) {
            console.log('Deputy not found');
        }
        this.deputyList.splice(foundDeputy, 1);
        console.log("deputy " + name + " has been removed");
    };
    Fraction.prototype.deleteBribers = function () {
        var honestyDeputy = this.deputyList.filter(function (deputy) { return !deputy.corrupt; });
        this.deputyList.splice(0, this.deputyList.length);
        this.deputyList = honestyDeputy.slice();
    };
    Fraction.prototype.theBribiest = function () {
        var corruptLeader = this.deputyList.sort(function (a, b) {
            return b.AccBribe - a.AccBribe;
        })[0];
        console.log(corruptLeader);
    };
    Fraction.prototype.showAllDeputies = function () {
        this.deputyList.forEach(function (deputy) {
            console.log("Name: " + deputy.name + ", Surname: " + deputy.surname);
        });
    };
    Fraction.prototype.deleteDeputies = function () {
        this.deputyList.splice(0, this.deputyList.length);
    };
    Fraction.prototype.totalBribes = function () {
        this.deputyList.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue.AccBribe;
        }, 0);
    };
    return Fraction;
}());
exports.Fraction = Fraction;
