function setup() {
    createCanvas(600, 600);
  background("white");
  }
  function draw() {
    
  
    stroke("blue");
    fill("red");
  
    //console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 30, 30,200);
    }
  }
  