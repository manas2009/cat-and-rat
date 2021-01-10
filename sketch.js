var wallpaperImage,wallpaper;
var tom,tom_siting,tom_running,tom_running2,tom_last;
var jerry,jerry_one,jerry_two,jerry_three,jerry_last;
function preload() {
    wallpaperImage = loadImage("garden.png");

    tom_siting = loadAnimation("tomOne.png");
    tom_running = loadAnimation("tomTwo.png");
tom_running2 = loadAnimation("tomThree.png");
tom_last = loadAnimation("tomFour.png");

jerry_one = loadAnimation("jerryOne.png");
jerry_two = loadAnimation("jerryTwo.png");
jerry_three = loadAnimation("jerryThree.png");
jerry_last = loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(1200,1200);
    wallpaper = createSprite(300,300,30,100);
    wallpaper.addImage("garden",wallpaperImage);

tom = createSprite(200,200,30,50);
tom .addAnimation("siting",tom_siting);

jerry = createSprite(300,200,50,60);
jerry.addAnimation("one",jerry_one);

}

function draw() {



    background(0);
 
if (tom.x - jerry.x < (tom.width -jerry.width )/2) {
    tom.addAnimation("tom_running",tomTwo) 
    jerry.addAnimation("jerry_two",jerryTwo) 
}
else{
    tom.addAnimation("tom_last",tomFour) 
    jerry.addAnimation("jerry_last",jerryFour) 
}


    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW ) {
   tom.velocityX = -5;
   tom.addAnimation("tom_running",tomTwo) 
   tom.changeAnimation("tom_running") 
}



}
