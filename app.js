"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
//Create ne Deputies
var Gnida = new classes_1.Deputy(90, 170, 'Gnidenko', 'Vasyl', 42, true, 1000);
var Petia = new classes_1.Deputy(60, 160, 'Petrova', 'Oksana', 35, false, 0);
var Dupa = new classes_1.Deputy(55, 157, 'Duma', 'Maria', 42, true, 5000);
var Hera = new classes_1.Deputy(130, 178, 'Herasumiv', 'Genadiy', 50, false, 0);
var Rada1 = new classes_1.Rada([]);
var Robbers = new classes_1.Fraction('FirstITFraction', [Gnida, Petia, Hera]);
