canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
height_car=150;
weidth_car=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
car_x=100;
car_y=300;
function add() {
	background_imgTag=new Image();
    background_imgTag.onload= uploadBackground;
    background_imgTag.src=background_image;

	greencar_imgTag=new Image();
	greencar_imgTag.onload=uploadgreencar;
	greencar_imgTag.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,car_x,car_y,weidth_car,height_car);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y>=0){
        car_y=car_y-10;
        uploadBackground();
        uploadgreencar();
}
}

function down()
{
	if(car_y<=500){
        car_y=car_y+10;
        uploadBackground();
        uploadgreencar();
}
}

function left()
{
	if(car_x>=0){
        car_x=car_x-10;
		uploadBackground();
        uploadgreencar();
	}
}
function right(){
	if(car_x<=750){
        car_x=car_x+10;
		uploadBackground();
        uploadgreencar();
}
}
