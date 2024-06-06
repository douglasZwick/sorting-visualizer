"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var p5_1 = __importDefault(require("p5"));
var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(400, 400);
    };
    p.draw = function () {
        p.background(220);
        p.ellipse(200, 200, 50, 50);
    };
};
new p5_1.default(sketch);
