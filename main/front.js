
function setup() {
	var pos = createCanvas(windowWidth,150,WEBGL);
	pos.position(0,150);
}

function draw(){
	let x = mouseX-(windowWidth/2);
	let locX = mouseX - windowHeight / 2;
	let locY = mouseY - windowWidth / 2;
	ambientLight(60, 60, 60);
	pointLight(255, 255, 255, locX, locY, 100);
	background(255,127,80);
	ambientMaterial(255,0,0);
	push();
	
	
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	torus(30, 15,64,64);
	pop();
	
	translate(500,0,0);
	//push();
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	rotateZ(frameCount * 0.01);
	box(0);
	pop();
	
	push();
	translate(-500,0,0);
	ambientMaterial(0,0,255);
	rotateX(frameCount * 0.01);
	rotateY(frameCount * 0.01);
	rotateZ(frameCount * 0.01);
	cone(30,64,64);
	pop();
}