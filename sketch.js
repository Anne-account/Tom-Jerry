var canvas,bg;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600,20,20);
    tom.addAnimation("tom",tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600,20,20);
    jerry.addAnimation("jerry",jerryImg1);
    jerry.scale = 0.15;
}

function draw() {
    background(bg);

    console.log((tom.width - jerry.width)/2);
   if(tom.x-jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.changeAnimation("tomLastImage",tomImg3);
        tom.x =300;
        tom.scale=0.2;
        
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.changeAnimation("jerryLastImage",jerryImg3);
        jerry.scale=0.15;       
    } 
    drawSprites();
    textSize(30);
    strokeWeight(4)
    stroke("black");
    fill("white");
    text("Press the left arrow button to make the cat move",200,100);
}

function keyPressed(){
    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning",tomImg2);
        tom.changeAnimation("tomRunning");
        
       jerry.addAnimation("jerryTeasing",jerryImg2);
       jerry.changeAnimation("jerryTeasing",jerryImg2);
    }
}