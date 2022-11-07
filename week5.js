
  let c = 0;
  let abc = Math.floor(Math.random() * 251);;
  let mid = 250;
  
  function setup() {
    createCanvas(500, 500);
    noLoop();
  }
  
  function draw() {
    background('white');


    fill('#EB5C8B');
    stroke('#E63772');
    strokeWeight(2);
    circle(mid, mid, abc);


    fill('#4EB1F9');
    strokeWeight(1);
    stroke('#0282F2');
    circle(mid, mid, c);

    
    c = c + 1;

    if(c >= abc)
    {
        abc = Math.floor(Math.random() * 251);
    }

    if(c >= abc)
    {
        c = 0;
    }


  }

  function mousePressed() 
  {
    loop();
  }

  function mouseReleased()
  {
    noLoop();
  }