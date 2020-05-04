var img;
var e8;
function preload() {
	img = loadImage('images/Whoops.png');
}
function setup() {
  // Top-left corner of the img is at (0, 0)
  // Width and height are the img's original width and height
  createCanvas(windowWidth,windowHeight);
  e8 = createAudio('audio/e8boogie.mp3');
  e8.autoplay(true);
}

function draw(){
	image(img,mouseX-250,mouseY-250);
}