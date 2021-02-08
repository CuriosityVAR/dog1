//Create variables here
var dogX = 200;
var dog = createSprite(dogX, 300, 40, 40);
var food = createSprite(200, 50, 10, 10);

function preload()
{
  dog = loadImage("dogImg.png");
  
}

function setup() {
  createCanvas(800, 700);
  

  
}


function draw() {  
  background("aqua");
  dogX = mouseX;
  if(dog.y === food.y) {
    if(dog.x === food.x) {
      food.x = 200;
      food.y = 50;
    }
  food.y = food.y + 1;
  }

  drawSprites();

}



