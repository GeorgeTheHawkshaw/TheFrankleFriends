var img;
function preload() {
	img = loadImage('images/Whoops.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(windowWidth,windowHeight);
}

function draw(){
	image(img,mouseX-250,mouseY-250);
}