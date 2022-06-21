var starImg,bgImg,starImg2;
var star, star2, star3, starBody;
//create variable for fairy sprite and fairyImg
 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	starImg2= loadImage("images/star.png");
	starImg3= loadImage("images/star.png");
	//bgImg = loadImage("images/starNight.png");
	bgImg = loadImage("images/starryNight.jpg");
	//load animation for fairy here
    // fairyImage=loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	 fairyImage=loadImage("images/fairy - N.png");
	 fairySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fairySound.play();
	//create fairy sprite and add animation for fairy
     //fairy=createSprite(130,520);
	 //fairy.addAnimation("atifairy",fairyImage);
	 fairy=createSprite(130,520);
	 fairy.addAnimation("atifairy",fairyImage);
	 fairy.scale = 1.2;
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	star2 = createSprite(620,50);
	star2.addImage(starImg);
	star2.scale = 0.2;
	star3 = createSprite(590,45);
	star3.addImage(starImg);
	star3.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  star2.x= starBody.position.x 
  star2.y= starBody.position.y

  star2.x= starBody.position.x 
  star2.y= starBody.position.y

  /*star3.x= starBody.position.x 
  star3.y= starBody.position.y*/
  console.log(star.y);

  //write code to stop star in the hand of fairy

  if (star.y > 470 && starBody.position.y > 470) {
	  Matter.Body.setStatic(starBody,true);
  }
  if (star2.y > 480 && starBody.position.y > 470) {
	Matter.Body.setStatic(starBody,true);
  }
  //if (star3.y > 470 && starBody.position.y > 470) {
	//Matter.Body.setStatic(starBody,true);}
  drawSprites();

}

function keyPressed() {

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 20;
	}
	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x -20;
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyCode === UP_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	//writw code to move fairy left and right
	
}
