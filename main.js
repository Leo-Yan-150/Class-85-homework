var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var rover_x = 10;
var rover_y = 10;
var rover_width = 150;
var rover_height = 90;
var background_image = "cars.jpg";
var rover_image = "car1.png";

var car_image = "car2.png";
var car_x = 10;
var car_y = 100;
var car_width = 150;
var car_height = 90;

var game = "notended"

function add(){
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

rover_imgTag = new Image();
rover_imgTag.onload = uploadrover;
rover_imgTag.src = rover_image;

car_imgTag = new Image();
car_imgTag.onload = uploadcar;
car_imgTag.src = car_image;
}

function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

function uploadcar(){
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
    }

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed = e.keyCode;
console.log(keyPressed);

if(keyPressed == '38'){
console.log("P1 up");
up();
}

if(keyPressed == '40'){
console.log("P1 down");
down();
}

if(keyPressed == '37'){
console.log("P1 left");
left();
}

if(keyPressed == '39'){
console.log("P1 right");
right();
}

if(keyPressed == '87'){
    console.log("P2 up");
    upcar();
    }
    
    if(keyPressed == '83'){
    console.log("P2 down");
    downcar();
    }
    
    if(keyPressed == '65'){
    console.log("P2 left");
    leftcar();
    }
    
    if(keyPressed == '68'){
    console.log("P2 right");
    rightcar();
    }
    function up(){
        if(rover_y >= 0){
        rover_y -= 10;
        console.log("Up arrow is pressed = "+ rover_x + "-" + rover_y);
        uploadBackground();
        uploadrover();
        uploadcar()
        }
        }
        function down(){
        if(rover_y <= 700){
        rover_y += 10;
        console.log("Down arrow is pressed = "+ rover_x + "-" + rover_y);
        uploadBackground();
        uploadrover();
        uploadcar()
        }
        }
        function left(){
        if(rover_x >= 0){
        rover_x -= 10;
        console.log("Left arrow is pressed = "+ rover_x + "-" + rover_y);
        uploadBackground();
        uploadrover();
        uploadcar()
        }
        }
        function right(){
        if(rover_x <= 900){
        rover_x += 10;
        console.log("Right arrow is pressed = "+ rover_x + "-" + rover_y);
        uploadBackground();
        uploadrover();
        uploadcar()
        }
        }
        function upcar(){
            if(car_y >= 0){
            car_y -= 10;
            console.log("Up arrow is pressed = "+ car_x + "-" + car_y);
            uploadBackground();
            uploadrover();
            uploadcar()
            }
            }
            function downcar(){
            if(car_y <= 700){
            car_y += 10;
            console.log("Down arrow is pressed = "+ car_x + "-" + car_y);
            uploadBackground();
            uploadrover();
            uploadcar()
            }
            }
            function leftcar(){
            if(car_x >= 0){
            car_x -= 10;
            console.log("Left arrow is pressed = "+ car_x + "-" + car_y);
            uploadBackground();
            uploadrover();
            uploadcar()
            }
            }
            function rightcar(){
            if(car_x <= 900){
            car_x += 10;
            console.log("Right arrow is pressed = "+ car_x + "-" + car_y);
            uploadBackground();
            uploadrover();
            uploadcar()
            }
        }
        if(game == "notended"){
        if(car_x>700){
        console.log('Player 2 won!');
        document.getElementById('game_status').innerHTML = "Game status: Car 2 won!"
        game = "ended";
        }
        if(rover_x>700){
        console.log('Player 1 won!');
        document.getElementById('game_status').innerHTML = "Game status: Car 1 won!"
        game = "ended";
        }
        }
    }
