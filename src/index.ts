import './style.css';
import p5 from 'p5';


const sketch = (p: p5) =>
{
  let x = 0, y = 0;
  let diameter = 100;
  let xSpeed = 1.89187, ySpeed = 2.51151;

  p.setup = () =>
  {
    p.createCanvas(800, 450);

    x = p.width / 2;
    y = p.height / 2;
  };
  
  p.draw = () =>
  {
    p.colorMode(p.HSB);
    p.background(10);
    p.stroke(60, 100, 100);
    p.fill(350, 100, 90);

    x += xSpeed;
    y += ySpeed;

    if (x < diameter / 2 || x > p.width - diameter / 2)
      xSpeed = -xSpeed;
    if (y < diameter / 2 || y > p.height - diameter / 2)
      ySpeed = -ySpeed;

    p.ellipse(x, y, diameter, diameter);
  };

  p.keyPressed = () =>
  {
    if (p.keyCode === 32)
      throw new Error("Intentional error for debugging purposes");
  };
};

new p5(sketch);
