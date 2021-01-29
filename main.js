canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

WDcar1_width = 120;
WDcar1_height = 70;
WDcar1_image = "White Dragon Car1.png";
WDcar1_x = 10;
WDcar1_y = 300;

GMcar2_width = 120;
GMcar2_height = 70;
GMcar2_image = "green";
GMcar2_x = 10;
GMcar2_y = 400;

background_image = "racingtrack.jfif";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    WDcar1_imgTag = new Image();
    WDcar1_imgTag.onload = uploadWDcar1;
    WDcar1_imgTag.src = WDcar1_image;

    GMcar2_imgTag = new Image();
    GMcar2_imgTag.onload = uploadGMcar2;
    GMcar2_imgTag.src = GMcar2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadWDcar1() {
    ctx.drawImage(WDcar1_imgTag, WDcar1_x, WDcar1_y, WDcar1_width, WDcar1_height);
}

function uploadGMcar2() {
    ctx.drawImage(GMcar2_imgTag, GMcar2_x, GMcar2_y, GMcar2_width, GMcar2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        car1_up();
        console.log("Up");
    }
    if (keyPressed == '40') {
        car1_down();
        console.log("Down");
    }
    if (keyPressed == '37') {
        car1_left();
        console.log("Left");
    }
    if (keyPressed == '39') {
        car1_right();
        console.log("Right");
    }
    if (keyPressed == '87') {
        car2_up();
        console.log("up");
    }
    if (keyPressed == '83') {
        car2_down();
        console.log("down");
    }
    if (keyPressed == '65') {
        car2_left();
        console.log("left");
    }
    if (keyPressed == '68') {
        car2_right();
        console.log("right");
    }
}