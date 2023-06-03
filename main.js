
function setup() {
    function createCanvas() {
        createCanvas(800, 600);

        video = createCapture(VIDEO);
        video.size(320, 240);
        video.hide();
    }

  }
  

  function draw() {
    
    background(220);

    fill(255, 0, 0);
    circle(100, 100, 50); 

    fill(0, 255, 0); 
    rect(200, 200, 80, 40); 
    fill(0, 0, 255); 
    ellipse(300, 300, 60, 80);
  

    image(video, 400, 200, 320, 240);
  

    let x = mouseX;
    let y = mouseY;
  
    
    fill(255, 255, 0); 
    triangle(x, y, x + 50, y + 50, x - 50, y + 50); 
  }
  