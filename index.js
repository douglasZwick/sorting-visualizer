"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var p5_1 = __importDefault(require("p5"));
var sketch = function (p) {
    var x = 200, y = 200;
    var diameter = 50;
    var xSpeed = 2, ySpeed = 2.5;
    p.setup = function () {
        p.createCanvas(400, 400);
    };
    p.draw = function () {
        p.colorMode(p.HSB);
        p.background(40);
        p.noStroke();
        p.fill(60, 90, 90);
        x += xSpeed;
        y += ySpeed;
        if (x < diameter / 2 || x > p.width - diameter / 2)
            xSpeed = -xSpeed;
        if (y < diameter / 2 || y > p.height - diameter / 2)
            ySpeed = -ySpeed;
        p.ellipse(x, y, diameter, diameter);
    };
};
new p5_1.default(sketch);
