function setup() {
    createCanvas(600, 600);
    background("yellow")
  }
  
  function draw() {
    stroke("white");
    fill("orange");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 30);
    }
  }
  