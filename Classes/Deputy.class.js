"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Human_class_1 = require("./Human.class");
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(weight, height, surname, name, age, corrupt, maxbribeSize, AccBribe) {
        if (AccBribe === void 0) { AccBribe = 0; }
        var _this = _super.call(this, weight, height) || this;
        _this.surname = surname;
        _this.name = name;
        _this.age = age;
        _this.corrupt = corrupt;
        _this.maxbribeSize = maxbribeSize;
        _this.AccBribe = AccBribe;
        return _this;
    }
    Deputy.prototype.getBribe = function (sum) {
        if (!this.corrupt) {
            console.log('I dont get the bribes');
        }
        (sum <= this.maxbribeSize) ? (this.AccBribe += sum) : console.log('I can not take so much');
    };
    return Deputy;
}(Human_class_1.Human));
exports.Deputy = Deputy;
