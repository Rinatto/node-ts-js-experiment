"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testDynamicStructureChange = void 0;
const Animal_1 = require("./Animal");
function testDynamicStructureChange() {
    console.time("TS Dynamic Structure Change");
    let animals = [];
    for (let i = 0; i < 100000; i++) {
        let animal = new Animal_1.Animal("Animal " + i);
        animals.push(animal);
        if (i % 10 === 0) {
            animal.newProperty = i;
        }
    }
    console.timeEnd("TS Dynamic Structure Change");
}
exports.testDynamicStructureChange = testDynamicStructureChange;
