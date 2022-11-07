function setup() {
    createCanvas(500, 500);
  }

  let xmid = 250;
  let ymid = 250;
  
  function draw() {
    background('#C3EB78');

    stroke('#A18A7D');
    fill('#D4D2D5'); 
    strokeWeight(1);
    circle(xmid, ymid, 250);
    
    strokeWeight(2.5);
    stroke('#C3B5AC');
    arc(230, 235, 175, 155, 0, HALF_PI);

    fill('#E1E0E1');
    noStroke();
    circle(247, 245, 120);
    
    strokeWeight(1);
    stroke('#FFFFFF');
    fill('#96D520');
    triangle(145, 265, 155, 260, 170, 275);
    fill('#B0E44E');
    triangle(150, 230, 165, 215, 160, 245);

  }

