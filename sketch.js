// background Image
var bgIMG;

// Sheilds
var she1, she2, she3, she4;

//Sheild Image
var sheIMG1, sheIMG2, sheIMG3, sheIMG4;

// User Player
var user;

// User Player Images
var userIMG;

// Team Mates
var tea1, tea2, tea3, tea4, tea5, tea6;

//Team Mates Image
var teaIMG;

// Opponents
var op1, op2, op3, op4, op5, op6, op7;

//Opponents Image
var opIMG;

//edges
var edges;

//bullets group
var buTea1, buTea2, buTea3, buTea4, buTea5, buTea6, buUser, buOp1, buOp2, buOp3, buOp4, buOp5, buOp6, buOp7;

//bullet
var bulletIMG;
var bul;
var bullet;
var bullet1;
var bullGr;

//dead
var teaDead, opDead;

//score
var score = 0;
function preload(){

	//bg IMG
	bgIMG = loadImage("images/back.png");

	//Sheild Image
	sheIMG1 = loadImage("images/shei1.png");
	sheIMG2 = loadImage("images/shei2.png");
	sheIMG3 = loadImage("images/shei3.png");
	sheIMG4 = loadImage("images/shei4.png");
	
	//team mates Img
	teaIMG = loadImage("images/tea1.png");

	// op Img
	opIMG  = loadImage("images/op.png");

	//bulletIMG
	bulletIMG = loadImage("images/bullet.png");
	bul = loadImage("images/bullet - Copy.png");

	//dead
	teaDead = loadImage("images/teaDead.png");
	opDead = loadImage("images/opDead.png");
}

function setup() {

	createCanvas(displayWidth-20, displayHeight-83);
	
	//sheilds
	she1 = createSprite(300,170,30,250);// left top
	she1.addImage(sheIMG4);
	she1.scale = 0.7;

	she2 = createSprite(1000,470,30,250);//right bottom
	she2.addImage(sheIMG2);
	she2.scale = 0.7;

	she3 = createSprite(400,400,30,250);//left bottom
	she3.addImage(sheIMG1);
	she3.scale = 0.7;

	she4 = createSprite(800,230,30,250);// right top
	she4.addImage(sheIMG3);
	she4.scale = 0.7;

	edges = createEdgeSprites();
	//user
	user = createSprite(150,150,20,20);

	//team Mates
	tea1 = createSprite(150,50,20,20);
	tea2 = createSprite(150,170,20,20);
	tea3 = createSprite(150,240,20,20);
	tea4 = createSprite(150,350,20,20);
	tea5 = createSprite(150,450,20,20);
	tea6 = createSprite(150,550,20,20);
	

	//Opponents
	op1 = createSprite(1100,50,20,20);
	op2 = createSprite(1100,150,20,20);
	op3 = createSprite(1100,250,20,20);
	op4 = createSprite(1100,350,20,20);
	op5 = createSprite(1100,450,20,20);
	op6 = createSprite(1100,550,20,20);
	op7 = createSprite(1100,650,20,20);
	
	// Bull group
	bullGr = new Group();
	buTea1 = new Group();
	buTea2 = new Group();
	buTea3 = new Group();
	buTea4 = new Group();
	buTea5 = new Group();
	buTea6 = new Group();

	buUser = new Group();

	buOp1 = new Group();
	buOp2 = new Group();
	buOp3 = new Group();
	buOp4 = new Group();
	buOp5 = new Group();
	buOp6 = new Group();
	buOp7 = new Group();






	//team members IMG
	tea1.addImage(teaIMG);
	tea2.addImage(teaIMG);
	tea3.addImage(teaIMG);
	tea4.addImage(teaIMG);
	tea5.addImage(teaIMG);
	tea6.addImage(teaIMG);

	//userIMG
	user.addImage(teaIMG);

	//opIMG
	op1.addImage(opIMG);
	op2.addImage(opIMG);
	op3.addImage(opIMG);
	op4.addImage(opIMG);
	op5.addImage(opIMG);
	op6.addImage(opIMG);
	op7.addImage(opIMG);

}


function draw() {
  rectMode(CENTER);
  background(bgIMG);

// controls for user
if(keyDown(LEFT_ARROW)){
	changePosition(-5,0);
}
else if(keyDown(RIGHT_ARROW)){
	changePosition(5,0);
}
else if(keyDown(UP_ARROW)){
	changePosition(0,-5);
}
else if(keyDown(DOWN_ARROW)){
	changePosition(0,+5);
}



user.collide(she1);
user.collide(she2);
user.collide(she3);
user.collide(she4);
user.collide(edges);

tea1.collide(she1);
tea1.collide(she2);
tea1.collide(she3);
tea1.collide(she4);
tea1.collide(edges);

tea2.collide(she1);
tea2.collide(she2);
tea2.collide(she3);
tea2.collide(she4);
tea2.collide(edges);

tea3.collide(she1);
tea3.collide(she2);
tea3.collide(she3);
tea3.collide(she4);
tea3.collide(edges);

tea4.collide(she1);
tea4.collide(she2);
tea4.collide(she3);
tea4.collide(she4);
tea4.collide(edges);

tea5.collide(she1);
tea5.collide(she2);
tea5.collide(she3);
tea5.collide(she4);
tea5.collide(edges);

tea6.collide(she1);
tea6.collide(she2);
tea6.collide(she3);
tea6.collide(she4);
tea6.collide(edges);


op1.collide(she1);
op1.collide(she2);
op1.collide(she3);
op1.collide(she4);
op1.collide(edges);

op2.collide(she1);
op2.collide(she2);
op2.collide(she3);
op2.collide(she4);
op2.collide(edges);

op3.collide(she1);
op3.collide(she2);
op3.collide(she3);
op3.collide(she4);
op3.collide(edges);

op4.collide(she1);
op4.collide(she2);
op4.collide(she3);
op4.collide(she4);
op4.collide(edges);

op5.collide(she1);
op5.collide(she2);
op5.collide(she3);
op5.collide(she4);
op5.collide(edges);

op6.collide(she1);
op6.collide(she2);
op6.collide(she3);
op6.collide(she4);
op6.collide(edges);

op7.collide(she1);
op7.collide(she2);
op7.collide(she3);
op7.collide(she4);
op7.collide(edges);

randVelocityTE(tea1);
randVelocityTE(tea2);
randVelocityTE(tea3);
randVelocityTE(tea4);
randVelocityTE(tea5);
randVelocityTE(tea6);


randVelocityOP(op1);
randVelocityOP(op2);
randVelocityOP(op3);
randVelocityOP(op4);
randVelocityOP(op5);
randVelocityOP(op6);
randVelocityOP(op7);


tea1.collide(tea2);
tea1.collide(tea3);
tea1.collide(tea4);
tea1.collide(tea5);
tea1.collide(tea6);
tea1.collide(op1);
tea1.collide(op2);
tea1.collide(op3);
tea1.collide(op4);
tea1.collide(op5);
tea1.collide(op6);
tea1.collide(op7);
tea1.collide(user);

tea2.collide(tea3);
tea2.collide(tea4);
tea2.collide(tea5);
tea2.collide(tea6);
tea2.collide(op1);
tea2.collide(op2);
tea2.collide(op3);
tea2.collide(op4);
tea2.collide(op5);
tea2.collide(op6);
tea2.collide(op7);
tea2.collide(user);


tea3.collide(tea4);
tea3.collide(tea5);
tea3.collide(tea6);
tea3.collide(op1);
tea3.collide(op2);
tea3.collide(op3);
tea3.collide(op4);
tea3.collide(op5);
tea3.collide(op6);
tea3.collide(op7);
tea3.collide(user);


tea4.collide(tea5);
tea4.collide(tea6);
tea4.collide(op1);
tea4.collide(op2);
tea4.collide(op3);
tea4.collide(op4);
tea4.collide(op5);
tea4.collide(op6);
tea4.collide(op7);
tea4.collide(user);

tea5.collide(tea6);
tea5.collide(op1);
tea5.collide(op2);
tea5.collide(op3);
tea5.collide(op4);
tea5.collide(op5);
tea5.collide(op6);
tea5.collide(op7);
tea5.collide(user);

tea6.collide(op1);
tea6.collide(op2);
tea6.collide(op3);
tea6.collide(op4);
tea6.collide(op5);
tea6.collide(op6);
tea6.collide(op7);
tea6.collide(user);



user.collide(op1);
user.collide(op2);
user.collide(op3);
user.collide(op4);
user.collide(op5);
user.collide(op6);
user.collide(op7);



if(frameCount% 300=== 0){
	bulletsTea1(tea1);
}

if(frameCount%350 === 0){
	bulletsTea2(tea2);
}

if(frameCount%150 === 0){
	bulletsTea3(tea3);
}

if(frameCount%250 === 0){
	bulletsTea4(tea4);
}

if(frameCount%175 === 0){
	bulletsTea6(tea6);
}

if(frameCount%370 === 0){
	bulletsTea5(tea5);
}



if(frameCount% 278=== 0){
	bulletsOp1(op1);
}
								
if(frameCount%329 === 0){
	bulletsOp2(op2);
}
								
if(frameCount%176 === 0){
	bulletsOp3(op3);
}
								
if(frameCount%238 === 0){
	bulletsOp4(op4);
}
								
if(frameCount%183 === 0){
	bulletsOp5(op5);
}
								
if(frameCount%281 === 0){
	bulletsOp6(op6);
}

if(frameCount%335 === 0){
	bulletsOp7(op7);
}



if (keyWentDown("SPACE")){
	bulletUser(user);
}


if(buTea1.isTouching(tea2)){
	tea2.addImage(teaDead);
	tea2.x = -1000;
	tea2.y = -19029000;	
}
if(buTea1.isTouching(tea3)){
	tea3.addImage(teaDead);
	tea3.x = -1000;
	tea3.y = -199892000;

}
if(buTea1.isTouching(tea4)){
	tea4.addImage(teaDead);
	tea4.x = -1000;
	tea4.y = -10909200;	
}
if(buTea1.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000;
	tea5.y = -10090920;
}
if(buTea1.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1000;
	tea6.y = -10090920;
}
if(buTea1.isTouching(user)){
	user.addImage(teaDead);	
	user.x = -1000;
	user.y = -102898100;
}
if(buTea1.isTouching(op1)){
	op1.addImage(opDead);	
	op1.x = -1000;
	op1.y = -10089280;
	score = score +10;
}
if(buTea1.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -10089820;	
	score = score +10;
}
if(buTea1.isTouching(op3)){
	op3.addImage(opDead);	
	op3.x = -1000;
	op3.y = -1008920;
	score = score +10;
}
if(buTea1.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1000;
	op4.y = -1089200;
	score = score +10;
}
if(buTea1.isTouching(op5)){
	op5.addImage(opDead);	
	op5.x = -1000;
	op5.y = -10089280;
	score = score +10;
}
if(buTea1.isTouching(op6)){
	op6.addImage(opDead);	
	op6.x = -1000;
	op6.y = -108289800;
	score = score +10;
}
if(buTea1.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -1000;
	op7.y = -192000;
	score = score +10;
}


if(buTea2.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -1000;
	tea1.y = -100909390;
}
if(buTea2.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -1000;
	tea3.y = -10089830;
}
if(buTea2.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1000;
	tea4.y = -10099300;
}
if(buTea2.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000;
	tea5.y = -18983000;
}
if(buTea2.isTouching(tea6)){
	tea6.addImage(teaDead);
	tea6.x = -1000;
	tea6.y = -1900892000;	
}
if(buTea2.isTouching(user)){
	user.addImage(teaDead);
	user.x = -1000;
	user.y = -1902000;	
}
if(buTea2.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000;
	op1.y = -19092000;
	score = score +10;	
}
if(buTea2.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -10009202;	
	score = score +10;
}
if(buTea2.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -1009010;	
	score = score +10;
}
if(buTea2.isTouching(op4)){
	op4.addImage(opDead);	
	op4.x = -1000;
	op4.y = -1892000;
	score = score +10;
}
if(buTea2.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1000;
	op5.y = -1090200;	
	score = score +10;
}
if(buTea2.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1000;
	op6.y = -1892000;	
	score = score +10;
}
if(buTea2.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -1000;
	op7.y = -18982000;
	score = score +10;
}


if(buTea3.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -1000;
	tea1.y = -19901000;
}
if(buTea3.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -10899200;	
}
if(buTea3.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1000;
	tea4.y = -10898200;
}
if(buTea3.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000;
	tea5.y = -1008920;
}
if(buTea3.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1000;
	tea6.y = -100829;
}
if(buTea3.isTouching(user)){
	user.addImage(teaDead);	
	user.x = -1000;
	user.y = -100898320;
}
if(buTea3.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000;
	op1.y = -100787120;	
	score = score +10;
}
if(buTea3.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -10090910;
	score = score +10;
}
if(buTea3.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -10909100;	
	score = score +10;
}
if(buTea3.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1000;
	op4.y = -10089890;	
	score = score +10;
}
if(buTea3.isTouching(op5)){
	op5.addImage(opDead);	
	op5.x = -1000;
	op5.y = -100909120;
	score = score +10;
}
if(buTea3.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1000;
	op6.y = -100909120;	
	score = score +10;
}
if(buTea3.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -1000;
	op7.y = -10090120;
	score = score +10;
}


if(buTea4.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -1000;
	tea1.y = -10090920;
	
}
if(buTea4.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -19092000;	
	
}
if(buTea4.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -1000;
	tea3.y = -100998910;

}
if(buTea4.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000;
	tea5.y = -10090120;

}
if(buTea4.isTouching(tea6)){
	tea6.addImage(teaDead);
	tea6.x = -1000;
	tea6.y = -10088920;	
}
if(buTea4.isTouching(user)){
	user.addImage(teaDead);
	user.x = -1000;
	user.y = -1007777777820;	
}
if(buTea4.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000;
	op1.y = -100990210;	
	score = score +10;
}
if(buTea4.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -10889200;	
	score = score +10;
}
if(buTea4.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -10089820;	
	score = score +10;
}
if(buTea4.isTouching(op4)){
	op4.addImage(opDead);	
	op4.x = -1000;
	op4.y = -189821000;
	score = score +10;
}
if(buTea4.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1000;
	op5.y = -100080812;	
	score = score +10;
}
if(buTea4.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1000;
	op6.y = -10898200;	
	score = score +10;
}
if(buTea4.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -1000;
	op7.y = -10009012;
	score = score +10;
}


if(buTea5.isTouching(tea1)){
	tea1.addImage(teaDead);
	tea1.x = -1000;
	tea1.y = -10080210;	
}
if(buTea5.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -10009092;	
}
if(buTea5.isTouching(tea3)){
	tea3.addImage(teaDead);
	tea3.x = -1000;
	tea3.y = -10090910;	
}
if(buTea5.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1000;
	tea4.y = -10898100;
}
if(buTea5.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1000;
	tea6.y = -100889820;
}
if(buTea5.isTouching(user)){
	user.addImage(teaDead);
	user.x = -1000;
	user.y = -10078720;	
}
if(buTea5.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -10089771980;
	op1.y = -1000;	
	score = score +10;
}
if(buTea5.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -100898210;	
	score = score +10;
}
if(buTea5.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -100898920;	
	score = score +10;
}
if(buTea5.isTouching(op4)){
	op4.addImage(opDead);	
	op4.x = -1000;
	op4.y = -10872100;
	score = score +10;
}
if(buTea5.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1000;
	op5.y = -10089810;	
	score = score +10;
}
if(buTea5.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -100077812;
	op6.y = -1000;	
	score = score +10;
}
if(buTea5.isTouching(op7)){
	op7.addImage(opDead);
	op7.x = -1000;
	op7.y = -1090909100;	
	score = score +10;
}


if(buTea6.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -10008888889120;
	tea1.y = -1000;
}
if(buTea6.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -108988200;
	tea2.y = -1000;	
}
if(buTea6.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -100898210;
	tea3.y = -1000;
}
if(buTea6.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -10088920;
	tea4.y = -1000;
}
if(buTea6.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000;
	tea5.y = -100898210;
}
if(buTea6.isTouching(user)){
	user.addImage(teaDead);
	user.x = -1000;
	user.y = -100797920;	
}
if(buTea6.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1089089100;
	op1.y = -1000;	
	score = score +10;
}
if(buTea6.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -1009122000;	
	score = score +10;
}
if(buTea6.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -18892000;
	op3.y = -1000;	
	score = score +10;
}
if(buTea6.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1000;
	op4.y = -1008989210;	
	score = score +10;
}
if(buTea6.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1008901220;
	op5.y = -1000;	
	score = score +10;
}
if(buTea6.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -10898200;
	op6.y = -1000;	
	score = score +10;
}
if(buTea6.isTouching(op7)){
	op7.addImage(opDead);
	op7.x = -1000;
	op7.y = -10898200;	
	score = score +10;
}


if(buUser.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -1000;
	tea1.y = -10089020;
}
if(buUser.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -10898928100;
	tea2.y = -1000;	
}
if(buUser.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -1008988120;
	tea3.y = -1000;
}
if(buUser.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1000;
	tea4.y = -78721000;
}
if(buUser.isTouching(tea5)){
	tea5.addImage(teaDead);
	tea5.x = -10078720;
	tea5.y = -1000;	
}
if(buUser.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1089889200;
	tea6.y = -1000;
}
if(buUser.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000;
	op1.y = -10089820;	
	score = score +10;
}
if(buUser.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -18082000;
	op2.y = -1000;	
	score = score +10;
}
if(buUser.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -100797910;
	op3.y = -1000;
	score = score +10;	
}
if(buUser.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -189892112000;
	op4.y = -1000;	
	score = score +10;
}
if(buUser.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -123212000;
	op5.y = -1000;	
	score = score +10;
}
if(buUser.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1007878910;
	op6.y = -1000;	
	score = score +10;
}
if(buUser.isTouching(op7)){
	op7.addImage(opDead);
	op7.x = -1000;
	op7.y = -100898920;	
	score = score +10;
}


if(buOp1.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -100898910;
	tea1.y = -1000;
}
if(buOp1.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -108919300;
	tea2.y = -1000;	
}
if(buOp1.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -100787729879837987489682180;
	tea3.y = -1000;
}
if(buOp1.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1000;
	tea4.y = -10078778979878927892787973198390;
}
if(buOp1.isTouching(tea5)){
	tea5.addImage(teaDead);
	tea5.x = -1000;
	tea5.y = -100789278190;	
}
if(buOp1.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1000;
	tea6.y = -1000787927982791791;
}
if(buOp1.isTouching(user)){
	user.addImage(opDead);
	user.x = -1000;
	user.y = -10079789798278120;	
}
if(buOp1.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -7829791821000;	
	score = score +10;
}
if(buOp1.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -293911000;
	op3.y = -1000;	
	score = score +10;
}
if(buOp1.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1007872120;
	op4.y = -1000;	
	score = score +10;
}
if(buOp1.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1000;
	op5.y = -100078928921;
	score = score +10;	
}
if(buOp1.isTouching(op6)){
	op6.addImage(opDead);	
	op6.x = -1072987927100;
	op6.y = -1000;
	score = score +10;
}
if(buOp1.isTouching(op7)){
	op7.addImage(opDead);
	op7.x = -1000718898091;
	op7.y = -1000;	
	score = score +10;
}


if(buOp2.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -107891200;
	tea1.y = -1000;
	
}
if(buOp2.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -1006678610;	
}
if(buOp2.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -1000;
	tea3.y = -10078927120;
}
if(buOp2.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1007798710;
	tea4.y = -1000;
}
if(buOp2.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -100787979120;
	tea5.y = -1000;
}
if(buOp2.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -100679879120;
	tea6.y = -1000;
}
if(buOp2.isTouching(user)){
	user.addImage(opDead);
	user.x = -1072771279800;
	user.y = -1000;	
}
if(buOp2.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -10789981789300;
	op1.y = -1000;
	score = score +10;	
}
if(buOp2.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -100661763287310;
	op3.y = -1000;	
	score = score +10;
}
if(buOp2.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -10078792879130;
	op4.y = -1000;	
	score = score +10;
}
if(buOp2.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1007961863896298360;
	op5.y = -1000;	
	score = score +10;
}
if(buOp2.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1761297821000;
	op6.y = -1000;	
	score = score +10;
}
if(buOp2.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -100789378910;
	op7.y = -1000;
	score = score +10;
}


if(buOp3.isTouching(tea1)){
	tea1.addImage(teaDead);
	tea1.x = -1000;
	tea1.y = -1004234321210;	
}
if(buOp3.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -1001214210;	
}
if(buOp3.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -1000;
	tea3.y = -100124122310;
}
if(buOp3.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -1000;
	tea4.y = -10012321110;
}
if(buOp3.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000231242;
	tea5.y = -1000;
}
if(buOp3.isTouching(tea6)){
	tea6.addImage(teaDead);
	tea6.x = -1000;
	tea6.y = -10001124234;	
}
if(buOp3.isTouching(user)){
	user.addImage(opDead);
	user.x = -10001231242;
	user.y = -1000;	
}
if(buOp3.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000;
	op1.y = -1003214110;	
	score = score +10;
}
if(buOp3.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1000;
	op2.y = -10014214120;
	score = score +10;	
}
if(buOp3.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1000;
	op4.y = -102312400;
	score = score +10;	
}
if(buOp3.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1000;
	op5.y = -1798921000;	
	score = score +10;
}
if(buOp3.isTouching(op6)){
	op6.addImage(opDead);	
	op6.x = -10024120;
	op6.y = -1000;
	score = score +10;
}
if(buOp3.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -14323000;
	op7.y = -1000;
	score = score +10;
}


if(buOp4.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -100422140;
	tea1.y = -1000;
}
if(buOp4.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -123124000;	
}
if(buOp4.isTouching(tea3)){
	tea3.addImage(teaDead);
	tea3.x = -10242142100;
	tea3.y = -1000;	
}
if(buOp4.isTouching(tea4)){
	tea4.addImage(teaDead);
	tea4.x = -1000;
	tea4.y = -10879798100;	
}
if(buOp4.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -1000;
	tea5.y = -10024233430;
}
if(buOp4.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1000;
	tea6.y = -100235320;
}
if(buOp4.isTouching(user)){
	user.addImage(opDead);
	user.x = -1000;
	user.y = -100342340;	
}
if(buOp4.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000;
	op1.y = -1004222222230;
	score = score +10;	
}
if(buOp4.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -10242120;
	op2.y = -1000;	
	score = score +10;
}
if(buOp4.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -10002321;
	score = score +10;	
}
if(buOp4.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -242341000;
	op5.y = -1000;	
	score = score +10;
}
if(buOp4.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1000;
	op6.y = -10023421240;
	score = score +10;	
}
if(buOp4.isTouching(op7)){
	op7.addImage(opDead);	
	op6.x = -23432421000;
	op6.y = -1000;
	score = score +10;
}


if(buOp5.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -10023421210;
	tea1.y = -1000;
}
if(buOp5.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -103423400;	
}
if(buOp5.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -189000;
	tea3.y = -1000;
}
if(buOp5.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -10751822100;
	tea4.y = -1000;
}

if(buOp5.isTouching(tea5)){
	tea5.addImage(teaDead);
	tea5.x = -1000;
	tea5.y = -1009280;
}
if(buOp5.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -100729810;
	tea6.y = -1000;
}
if(buOp5.isTouching(user)){
	user.addImage(opDead);	
	user.x = -1008789910;
	user.y = -1000;
}
if(buOp5.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -100277918920;
	op1.y = -1000;	
	score = score +10;
}
if(buOp5.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -1007872980;
	op2.y = -1000;	
	score = score +10;
}
if(buOp5.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000879879728;
	op3.y = -1000;	
	score = score +10;
}
if(buOp5.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1000;
	op4.y = -100738920;
	score = score +10;	
}
if(buOp5.isTouching(op6)){
	op6.addImage(opDead);
	op6.x = -1007879280;
	op6.y = -1000;	
	score = score +10;
}
if(buOp5.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -10067632870;
	op7.y = -1000;
	score = score +10;
}


if(buOp6.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -1000;
	tea1.y = -1000342234444;
}
if(buOp6.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -1000;
	tea2.y = -10023427879790;	
}
if(buOp6.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -1000;
	tea3.y = -14335000;
}
if(buOp6.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -100231111110;
	tea4.y = -1000;
}
if(buOp6.isTouching(tea5)){
	tea5.addImage(teaDead);	
	tea5.x = -100242420;
	tea5.y = -1000;
}
if(buOp6.isTouching(tea6)){
	tea6.addImage(teaDead);	
	tea6.x = -1000;
	tea6.y = -1002434320;
}
if(buOp6.isTouching(user)){
	user.addImage(teaDead);
	user.x = -100454320;
	user.y = -1000;	
}
if(buOp6.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -10232100;
	op1.y = -1000;	
	score = score +10;
}
if(buOp6.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -10024220;
	op2.y = -1000;	
	score = score +10;
}
if(buOp6.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -1045300;
	score = score +10;	
}
if(buOp6.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -1374723000;
	op4.y = -1000;	
	score = score +10;
}
if(buOp6.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -10035320;
	op5.y = -1000;	
	score = score +10;
}
if(buOp6.isTouching(op7)){
	op7.addImage(opDead);	
	op7.x = -100655570;
	op7.y = -1000;
	score = score +10;
}


if(buOp7.isTouching(tea1)){
	tea1.addImage(teaDead);	
	tea1.x = -10076575645630;
	tea1.y = -1000;
}
if(buOp7.isTouching(tea2)){
	tea2.addImage(teaDead);	
	tea2.x = -10006362654936952;
	tea2.y = -1000;	
}
if(buOp7.isTouching(tea3)){
	tea3.addImage(teaDead);	
	tea3.x = -10789379638928900;
	tea3.y = -1000;
}
if(buOp7.isTouching(tea4)){
	tea4.addImage(teaDead);	
	tea4.x = -100738920;
	tea4.y = -1000;
}
if(buOp7.isTouching(tea5)){
	tea4.addImage(teaDead);
	tea5.x = -1000;
	tea5.y = -106736863600;	
}
if(buOp7.isTouching(tea6)){
	tea6.addImage(teaDead);
	tea6.x = -1000;
	tea6.y = -100000000;	
}
if(buOp7.isTouching(user)){
	user.addImage(teaDead);
	user.x = -1000000000000000;
	user.y = -1000;	
}
if(buOp7.isTouching(op1)){
	op1.addImage(opDead);
	op1.x = -1000000;
	op1.y = -1000;	
	score = score +10;
}
if(buOp7.isTouching(op2)){
	op2.addImage(opDead);
	op2.x = -10000000000000000;
	op2.y = -1000;	
	score = score +10;
}
if(buOp7.isTouching(op3)){
	op3.addImage(opDead);
	op3.x = -1000;
	op3.y = -1000000000000;
	score = score +10;	
}
if(buOp7.isTouching(op4)){
	op4.addImage(opDead);
	op4.x = -10000000000000000000000000000000000000000;
	op4.y = -1000;	
	score = score +10;
}
if(buOp7.isTouching(op5)){
	op5.addImage(opDead);
	op5.x = -1000;
	op5.y = -1000000000000000;
	score = score +10;	
}
if(buOp7.isTouching(op6)){
	op6.addImage(opDead);
	tea6.x = 1000;
	tea6.y = -1000;
	score = score +10;

}

if(buTea1.isTouching(she1) || buTea1.isTouching(she2) || buTea1.isTouching(she3) || buTea1.isTouching(she4) || buTea1.isTouching(tea2) || buTea1.isTouching(tea3) || buTea1.isTouching(tea4) || buTea1.isTouching(tea5) || buTea1.isTouching(tea6) || buTea1.isTouching(op1) || buTea1.isTouching(op2) || buTea1.isTouching(op3) || buTea1.isTouching(op4) || buTea1.isTouching(op5) || buTea1.isTouching(op6) || buTea1.isTouching(op7) || buTea1.isTouching(user)){
	buTea1.destroyEach();
}

if(buTea2.isTouching(she1) || buTea2.isTouching(she2) || buTea2.isTouching(she3) || buTea2.isTouching(she4) || buTea2.isTouching(tea1) || buTea2.isTouching(tea3) || buTea2.isTouching(tea4) || buTea2.isTouching(tea5) || buTea2.isTouching(tea6) || buTea2.isTouching(op1) || buTea2.isTouching(op2) || buTea2.isTouching(op3) || buTea2.isTouching(op4) || buTea2.isTouching(op5) || buTea2.isTouching(op6) || buTea2.isTouching(op7) || buTea2.isTouching(user)){
	buTea2.destroyEach();
}

if(buTea3.isTouching(she1) || buTea3.isTouching(she2) || buTea3.isTouching(she3) || buTea3.isTouching(she4) || buTea3.isTouching(tea1) || buTea3.isTouching(tea2) || buTea3.isTouching(tea4) || buTea3.isTouching(tea5) || buTea3.isTouching(tea6) || buTea3.isTouching(op1) || buTea3.isTouching(op2) || buTea3.isTouching(op3) || buTea3.isTouching(op4) || buTea3.isTouching(op5) || buTea3.isTouching(op6) || buTea3.isTouching(op7) || buTea3.isTouching(user)){
	buTea3.destroyEach();
}

if(buTea4.isTouching(she1) || buTea4.isTouching(she2) || buTea4.isTouching(she3) || buTea4.isTouching(she4) || buTea4.isTouching(tea1) || buTea4.isTouching(tea2) || buTea4.isTouching(tea3) || buTea4.isTouching(tea5) || buTea4.isTouching(tea6) || buTea4.isTouching(op1) || buTea4.isTouching(op2) || buTea4.isTouching(op3) || buTea4.isTouching(op4) || buTea4.isTouching(op5) || buTea4.isTouching(op6) || buTea4.isTouching(op7) || buTea4.isTouching(user)){
	buTea4.destroyEach();
}

if(buTea5.isTouching(she1) || buTea5.isTouching(she2) || buTea5.isTouching(she3) || buTea5.isTouching(she4) || buTea5.isTouching(tea1) || buTea5.isTouching(tea2) || buTea5.isTouching(tea3) || buTea5.isTouching(tea4) || buTea5.isTouching(tea6) || buTea5.isTouching(op1) || buTea5.isTouching(op2) || buTea5.isTouching(op3) || buTea5.isTouching(op4) || buTea5.isTouching(op5) || buTea5.isTouching(op6) || buTea5.isTouching(op7) || buTea5.isTouching(user)){
	buTea5.destroyEach();
}

if(buTea6.isTouching(she1) || buTea6.isTouching(she2) || buTea6.isTouching(she3) || buTea6.isTouching(she4) || buTea6.isTouching(tea1) || buTea6.isTouching(tea2) || buTea6.isTouching(tea3) || buTea6.isTouching(tea4) || buTea6.isTouching(tea5) || buTea6.isTouching(op1) || buTea6.isTouching(op2) || buTea6.isTouching(op3) || buTea6.isTouching(op4) || buTea6.isTouching(op5) || buTea6.isTouching(op6) || buTea6.isTouching(op7) || buTea6.isTouching(user)){
	buTea6.destroyEach();
}




if(buOp1.isTouching(she1) || buOp1.isTouching(she2) || buOp1.isTouching(she3) || buOp1.isTouching(she4) || buOp1.isTouching(tea1) || buOp1.isTouching(tea2) || buOp1.isTouching(tea3) || buOp1.isTouching(tea4) || buOp1.isTouching(tea5) || buOp1.isTouching(tea6) || buOp1.isTouching(op2) || buOp1.isTouching(op3) || buOp1.isTouching(op4) || buOp1.isTouching(op5) || buOp1.isTouching(op6) || buOp1.isTouching(op7) || buOp1.isTouching(user)){
	buOp1.destroyEach();
}

if(buOp2.isTouching(she1) || buOp2.isTouching(she2) || buOp2.isTouching(she3) || buOp2.isTouching(she4) || buOp2.isTouching(tea1) || buOp2.isTouching(tea2) || buOp2.isTouching(tea3) || buOp2.isTouching(tea4) || buOp2.isTouching(tea5) || buOp2.isTouching(tea6) || buOp2.isTouching(op1) || buOp2.isTouching(op3) || buOp2.isTouching(op4) || buOp2.isTouching(op5) || buOp2.isTouching(op6) || buOp2.isTouching(op7) || buOp2.isTouching(user)){
	buOp2.destroyEach();
}

if(buOp3.isTouching(she1) || buOp3.isTouching(she2) || buOp3.isTouching(she3) || buOp3.isTouching(she4) || buOp3.isTouching(tea1) || buOp3.isTouching(tea2) || buOp3.isTouching(tea3) || buOp3.isTouching(tea4) || buOp3.isTouching(tea5) || buOp3.isTouching(tea6) || buOp3.isTouching(op1) || buOp3.isTouching(op2) || buOp3.isTouching(op4) || buOp3.isTouching(op5) || buOp3.isTouching(op6) || buOp3.isTouching(op7) || buOp3.isTouching(user)){
	buOp3.destroyEach();
}

if(buOp4.isTouching(she1) || buOp4.isTouching(she2) || buOp4.isTouching(she3) || buOp4.isTouching(she4) || buOp4.isTouching(tea1) || buOp4.isTouching(tea2) || buOp4.isTouching(tea3) || buOp4.isTouching(tea4) || buOp4.isTouching(tea5) || buOp4.isTouching(tea6) || buOp4.isTouching(op1) || buOp4.isTouching(op2) || buOp4.isTouching(op3) || buOp4.isTouching(op5) || buOp4.isTouching(op6) || buOp4.isTouching(op7) || buOp4.isTouching(user)){
	buOp4.destroyEach();
}

if(buOp5.isTouching(she1) || buOp5.isTouching(she2) || buOp5.isTouching(she3) || buOp5.isTouching(she4) || buOp5.isTouching(tea1) || buOp5.isTouching(tea2) || buOp5.isTouching(tea3) || buOp5.isTouching(tea4) || buOp5.isTouching(tea5) || buOp5.isTouching(tea6) || buOp5.isTouching(op1) || buOp5.isTouching(op2) || buOp5.isTouching(op3) || buOp5.isTouching(op4) || buOp5.isTouching(op6) || buOp5.isTouching(op7) || buOp5.isTouching(user)){
	buOp5.destroyEach();
}

if(buOp6.isTouching(she1) || buOp6.isTouching(she2) || buOp6.isTouching(she3) || buOp6.isTouching(she4) || buOp6.isTouching(tea1) || buOp6.isTouching(tea2) || buOp6.isTouching(tea3) || buOp6.isTouching(tea4) || buOp6.isTouching(tea5) || buOp6.isTouching(tea6) || buOp6.isTouching(op1) || buOp6.isTouching(op2) || buOp6.isTouching(op3) || buOp6.isTouching(op4) || buOp6.isTouching(op5) || buOp6.isTouching(op7) || buOp6.isTouching(user)){
	buOp6.destroyEach();
}

if(buOp7.isTouching(she1) || buOp7.isTouching(she2) || buOp7.isTouching(she3) || buOp7.isTouching(she4) || buOp7.isTouching(tea1) || buOp7.isTouching(tea2) || buOp7.isTouching(tea3) || buOp7.isTouching(tea4) || buOp7.isTouching(tea5) || buOp7.isTouching(tea6) || buOp7.isTouching(op1) || buOp7.isTouching(op2) || buOp7.isTouching(op3) || buOp7.isTouching(op4) || buOp7.isTouching(op5) || buOp7.isTouching(op6) || buOp7.isTouching(user)){
	buOp7.destroyEach();
}


if(buUser.isTouching(she1) || buUser.isTouching(she2) || buUser.isTouching(she3) || buUser.isTouching(she4) || buUser.isTouching(tea1) || buUser.isTouching(tea2) || buUser.isTouching(tea3) || buUser.isTouching(tea4) || buUser.isTouching(tea5) || buUser.isTouching(tea6) || buUser.isTouching(op1) || buUser.isTouching(op2) || buUser.isTouching(op3) || buUser.isTouching(op4) || buUser.isTouching(op5) || buUser.isTouching(op6) || buUser.isTouching(op7) ){
	buUser.destroyEach();
}




drawSprites();
textSize(30);
fill(0);

text("Score: "+score,15,30)
 
}


function changePosition(x,y){
	user.x  = user.x + x;
	user.y = user.y + y;
}

function randVelocityOP(op){
	var rand = random(-5,5);
	op.velocityY = rand;
	if(op.x <= 600){
		op.velocityX = 5;
		}else if(op.x===1100){
			op.velocityX = -5;
		}
		
		
	
}

function randVelocityTE(te){
	if(te.x >= 600){
	te.velocityX = -5;
	}else if(te.x===150){
		te.velocityX = 5;
	}
	var rand = random(-5,5);
	te.velocityY = rand;
}

function bulletsTea1(tea){
	
	
		
	var bullet  = createSprite(tea.x,tea.y,20,2);
	bullet.velocityX = 20;

	buTea1.add(bullet);
	bullet.addImage(bulletIMG);	
	


}

function bulletsTea2(tea){
	
	
		
	var bullet  = createSprite(tea.x,tea.y,20,2);
	bullet.velocityX = 20;

	buTea2.add(bullet);
	bullet.addImage(bulletIMG);	
	


}

function bulletsTea3(tea){
	
	
		
	var bullet  = createSprite(tea.x,tea.y,20,2);
	bullet.velocityX = 20;

	buTea3.add(bullet);
	bullet.addImage(bulletIMG);	
	


}

function bulletsTea4(tea){
	
	
		
	var bullet  = createSprite(tea.x,tea.y,20,2);
	bullet.velocityX = 20;

	buTea4.add(bullet);
	bullet.addImage(bulletIMG);	
	


}

function bulletsTea5(tea){
	
	
		
	var bullet  = createSprite(tea.x,tea.y,20,2);
	bullet.velocityX = 20;

	buTea5.add(bullet);
	bullet.addImage(bulletIMG);	
	


}

function bulletsTea6(tea){
	
	
		
	var bullet  = createSprite(tea.x,tea.y,20,2);
	bullet.velocityX = 20;

	buTea6.add(bullet);
	bullet.addImage(bulletIMG);	
	


}


function bulletsOp1(op){
	
	
var 	bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp1.add(bullet1);
	bullet1.addImage(bul);	
	


}

function bulletsOp2(op){
	
	
	var bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp2.add(bullet1);
	bullet1.addImage(bul);	
	


}

function bulletsOp3(op){
	
	
	var bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp3.add(bullet1);
	bullet1.addImage(bul);	
	


}

function bulletsOp4(op){
	
	
	var bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp4.add(bullet1);
	bullet1.addImage(bul);	
	


}

function bulletsOp5(op){
	
	
	var bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp5.add(bullet1);
	bullet1.addImage(bul);	
	


}

function bulletsOp6(op){
	
	
	var bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp6.add(bullet1);
	bullet1.addImage(bul);	
	


}

function bulletsOp7(op){
	
	
	var bullet1  = createSprite(op.x,op.y,20,2);
	bullet1.velocityX = -20;

	buOp7.add(bullet1);
	bullet1.addImage(bul);	
	


}
function bulletUser(use){
	
	
	var bullet1  = createSprite(use.x,use.y,20,2);
	bullet1.velocityX = 20;

	buUser.add(bullet1);
	bullet1.addImage(bulletIMG);	
	


}


