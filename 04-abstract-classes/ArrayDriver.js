"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myCircle = new Circle_1.Circle(5, 10, 20);
let myRectangle = new Rectangle_1.Rectangle(0, 0, 3, 7);
// Declare an Array of shape ... initially empty
let theShapes = [];
//add the shape to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let tempShapes of theShapes) {
    console.log(tempShapes.getInfo());
    console.log(tempShapes.calculateArea());
    console.log();
}