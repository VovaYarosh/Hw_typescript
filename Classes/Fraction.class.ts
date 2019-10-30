import {Deputy} from "./Deputy.class";

export class Fraction{
    name: string;
    deputyList: Deputy[];

    constructor(name: string, deputyList: Deputy[]) {
        this.name = name;
        this.deputyList = deputyList;
    }
    addDeputy(deputy:Deputy){
        this.deputyList.push(deputy);
        console.log('deputy has been added')
    }
    deleteDeputy(name: string){
        let foundDeputy = this.deputyList.findIndex((deputy: Deputy) => deputy.name === name);
        if (foundDeputy < 0) {
            console.log('Deputy not found')
        }
        this.deputyList.splice(foundDeputy, 1);
        console.log(`deputy ${name} has been removed`)
    }
    deleteBribers(){
        const honestyDeputy = this.deputyList.filter((deputy:Deputy)=> !deputy.corrupt);
        this.deputyList.splice(0, this.deputyList.length);
        this.deputyList = [...honestyDeputy];
        }
     theBribiest(){
        let[corruptLeader] = this.deputyList.sort((a:Deputy,b:Deputy)=>{
        return b.AccBribe - a.AccBribe})
         console.log(corruptLeader)
    }
    showAllDeputies(){
        this.deputyList.forEach((deputy:Deputy)=> {
            console.log(`Name: ${deputy.name}, Surname: ${deputy.surname}`)
        })
    }
    deleteDeputies(){
        this.deputyList.splice(0, this.deputyList.length)
        }
    totalBribes(){
        this.deputyList.reduce((previousValue: number, currentValue: Deputy) => {
            return  previousValue + currentValue.AccBribe
        }, 0)
    }
    }