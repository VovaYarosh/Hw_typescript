
import {Human} from "./Human.class";

export class  deputy extends Human {

    surname: string;
    name: string;
    age: number;
    corrupt: boolean;
    maxbribeSize: number;
    AccBribe: number;

    constructor(weight: number, height: number,surname: string, name: string, age: number, corrupt: boolean, maxbribeSize: number,
        AccBribe: number = 0) {
        super(weight, height)
        this.surname = surname;
        this.name = name;
        this.age = age;
        this.corrupt = corrupt;
        this.maxbribeSize = maxbribeSize;
        this.AccBribe = AccBribe;
    }
    getBribe(sum){
        if(!this.corrupt){
            console.log('I dont get the bribes')
        }
        (sum <= this.maxbribeSize) ? (this.AccBribe += sum) : console.log('I can not take so much');
    }
    }