var starImg,bgImg, fada, fadaImg;
var star, starBody;
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
    fadaImg = loadImage("images/fairyImage1.png");
    //carregar animação de fada 
}

function setup() {
    createCanvas(800, 750);

    fada = createSprite(100,600,100,100);
    fada.addImage(fadaImg);
    fada.scale = 0.2;
    //escrever código para tocar o som vozFada

    //criar sprite de fada e adicionar animação para fada

    

    engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, starBody);
	
    star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.velocityY = 2;
   
	Engine.run(engine);
    

}

function draw() {
    background(bgImg);
    drawSprites();

Engine.update(engine);

    if(keyDown(RIGHT_ARROW)) {
        fada.x = fada.x +10;

    }

    if(keyDown(LEFT_ARROW)) {
        fada.x = fada.x -10;
    }

    if(star.y > 470 && starBody.position.y > 400) {
        Matter.Body.setStatic(starBody, true);
        star.velocityY = 0;
    }

}