import {Fraction} from "./Fraction.class";
import {Deputy} from "./Deputy.class";

export class Rada {
    FractionsList: Fraction[];

    constructor(FractionsList: Array<Fraction>) {
        this.FractionsList = FractionsList;
    }
    addFraction(fraction: Fraction) {
        this.FractionsList.push(fraction);
        console.log(`${fraction.name} has been added`)
    }
    deleteFraction(name: string) {
        const foundFraction = this.FractionsList.findIndex((fraction: Fraction) => fraction.name === name);
        if (foundFraction < 0) {
            `Fraction ${name} not found`
        }
        this.FractionsList.splice(foundFraction, 1);
    }
    showAllFraction() {
        this.FractionsList.forEach((fraction: Fraction) => {
            console.log(`${fraction.name}`)
        })
    }
    ShowConcreteFraction(name: string) {
        const foundFraction = this.FractionsList.find((fraction: Fraction) => fraction.name === name);
        console.log(foundFraction);
    }
    ShowAllFractionBribeTakers(fraction: Fraction) {
        const BribeTakers = fraction.deputyList.filter((deputy: Deputy) => deputy.corrupt);
        BribeTakers.forEach((bribeTaker: Deputy) => {
            console.log(`${bribeTaker.name}, ${bribeTaker.surname}, ${bribeTaker.AccBribe}`)
        })
    }

    ShowBiggestBribeTaker(fraction: Fraction) {
        fraction.theBribiest();
    }

    ShowAllFractionDeputies(fraction: Fraction) {
        fraction.deleteDeputies()
    }

}