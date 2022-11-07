let button;

function setup() {
    createCanvas(500, 500);
    button = createButton('change roof');
    button.position(215, 400);
    button.mousePressed(changeRoof);
  }

  let mid = 250;
  let x = Math.floor(Math.random() * 256);;
  let y = Math.floor(Math.random() * 256);;
  let z = Math.floor(Math.random() * 256);;


  function draw() {
    background('#FCF6B1');



    fill('#FFFFFF')
    rect(125, 200, 250, 150);

    fill(x, y, z);
    triangle(125, 200, 375, 200, 250, 100);

    fill('white')
    rect(285, 270, 50, 80);
  }


  function changeRoof()
  {
    x = Math.floor(Math.random() * 256);
    y = Math.floor(Math.random() * 256);
    z = Math.floor(Math.random() * 256);
  }