import p5 from 'p5';

const sketch = (p: p5) =>
{
  let x = 200, y = 200;
  let diameter = 50;
  let xSpeed = 2, ySpeed = 2.5;

  p.setup = () =>
  {
    p.createCanvas(400, 400);
  };
  
  p.draw = () =>
  {
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

new p5(sketch);
