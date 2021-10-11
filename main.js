canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");

array = ["notmars1.jpg", "notmars2.jpg", "notmars3.jpeg"];

random__no = Math.floor(Math.random() * 3);

rover_width = 100;

rover_height = 90;

background_img = array[random__no];

rover_img = "rover.png";

rover_X = 10;

rover_Y = 10;

function add() {
    bckgrd_imgTag = new Image();
    bckgrd_imgTag.onload = uploadBackground;
    bckgrd_imgTag.src = background_img;
    rvr_imgTag = new Image();
    rvr_imgTag.onload = uploadrover;
    rvr_imgTag.src = rover_img;
}

function uploadBackground() {
    ctx.drawImage(bckgrd_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(rvr_imgTag, rover_X,rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function up() {
    if (rover_Y >= 0) {
        rover_Y = rover_Y - 10;
        console.log("when up arrow is pressed,X=" + rover_X + ",Y=" + rover_Y);
        uploadBackground();
        uploadrover();
    }
}

function down() {
    if (rover_Y <= 500) {
        rover_Y = rover_Y + 10;
        console.log("when down arrow is pressed,X=" + rover_X + ",Y=" + rover_Y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_X >= 0) {
        rover_X = rover_X - 10;
        console.log("when left arrow is pressed,X=" + rover_X + ",Y=" + rover_Y);
        uploadBackground();
        uploadrover();
    }
}

function right() {
    if (rover_X <= 700) {
        rover_X = rover_X + 10;
        console.log("when right arrow is pressed,X=" + rover_X + ",Y=" + rover_Y);
        uploadBackground();
        uploadrover();
    }
}

function my_keydown(e) {
    keypress = e.keyCode;
    console.log(keypress);
    if (keypress == '38') {
        up();
        console.log("up");

    }
    if (keypress == '40') {
        down();
        console.log("down");
        
    }
    if (keypress == '37') {
        left();
        console.log("left");

    }
    if (keypress == '39') {
        right();
        console.log("right");

    }
}