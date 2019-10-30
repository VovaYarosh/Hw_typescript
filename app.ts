import {Deputy, Fraction, Rada} from "./classes";
//Create ne Deputies
const Gnida = new Deputy(90,170,'Gnidenko', 'Vasyl', 42, true, 1000);
const Petia = new Deputy(60,160,'Petrova', 'Oksana', 35, false, 0);
const Dupa = new Deputy(55,157,'Duma', 'Maria', 42, true, 5000);
const Hera = new Deputy(130,178,'Herasumiv', 'Genadiy', 50, false, 0);

const Rada1 = new Rada([]);
const Robbers = new Fraction('FirstITFraction', [Gnida, Petia, Hera]);