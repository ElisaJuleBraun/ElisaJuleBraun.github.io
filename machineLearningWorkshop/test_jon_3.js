let canvas;
let video;
let classifier;
let flippedVideo;
let confidence;
let label;
let sound1;
let sound2;
var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var image;
let ProstR = 201;
let ProstG = 201;
let ProstB = 201;
let FleißigR = 201;
let FleißigG = 201;
let FleißigB = 201;
let KartoffelR = 201;
let KartoffelG = 201;
let KartoffelB = 201;
let UnfreundlichR = 201;
let UnfreundlichG = 201;
let UnfreundlichB = 201;
let MülltrennungR = 201;
let MülltrennungG = 201;
let MülltrennungB = 201;
let HumorlosR = 201;
let HumorlosG = 201;
let HumorlosB = 201;
let EinkommensteuererklärungR = 201;
let EinkommensteuererklärungG = 201;
let EinkommensteuererklärungB = 201;


var video1;
var playVideo;

let titel = "S W A B I A N   N A T U R A L I Z A T I O N   T E S T   F O R   A I s";
let modelText = "model.json";
let test1 = "PROST                     You'll never be one of us.";
let test2 = "FLEISSIG                                                      Take a language course first.";
let test3 = "KARTOFFEL                                                                                     Guestworker.";
let test4 = "UNFREUNDLICH                                                                                                                  Tolerated.";
let test5 = "MÜLLTRENNUNG                                                                                                                                                      Newcomer.";
let test6 = "HUMORLOS UND STEIF                                                                                                                                                                              Workpermit.";
let test7 = "EINKOMMENSTEUERERKLÄRUNG                                                                                                                                                                                               You can do anything but Swabian.";
let score = "Score: ";
let nope = "KEEP";
let nope2 = "TRAINING";




function preload(){
  //add a link to your own trained model
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8EcTF4M_c/'+ modelText);

sound1 = loadSound("cheer.mp3");
sound2 = loadSound("boo2.mp3");
image1 = loadImage("hermine.gif");
image2 = loadImage("will.com.gif");
image3 = loadImage("pelosigif.gif");
image4 = loadImage("superman.gif");
image5 = loadImage("heidi.gif");
image6 = loadImage("holly.gif");
image7 = loadImage("nightshow.gif");
image8 = loadImage("flagge.jpg");
}

function setup() {
 canvas = createCanvas(windowWidth, windowHeight);

 //create the video
 classifyAudio();

}

function classifyAudio(){
  //what are we going to classify? The video. When that is ready call the
  //gotResults function to update the label
  classifier.classify(gotResults);
}


function gotResults(error, results){
  label = results[0].label;
  confidence = results[0].confidence;
  console.log(label);
  console.log(confidence);
}


function draw() {

  background (191, 239, 255 );




  //KEEP TRAINING


  // if(confidence < 0.8){
  //   fill(255, 255 ,255);
  //   rect(width - 1710, height - 500, 30, 30);
  // }

  //fill(201, 201 ,201);
  rect(width/10, height - 150, 180, 60);
  //fill(201, 201 ,201);
  rect(width/10, height - 250, 380, 60);
  //fill(201, 201 ,201);
  rect(width/10, height - 350, 580, 60);
  //fill(201, 201 ,201);
  rect(width/10, height - 450, 780, 60);
  //fill(201, 201 ,201);
  rect(width/10, height - 550, 980, 60);
  //fill(201, 201 ,201);
  rect(width/10, height - 650, 1180, 60);
  //fill(201, 201 ,201);
  rect(width/10, height - 750, 1380, 60);

  fill(0);
  rect(width/10, height - 1000, 150, 150);
  fill(255, 255 ,255);
  textSize(20);
  text(nope, 200, height - 900);
  text(nope2, 200, height - 870);




  if(label == "Prost" && confidence > .8){
    ProstR = 255;
    ProstG = 64;
    ProstB = 64;
    image(image1, width - 545, height - 580, 500, 500);
 }
    fill(ProstR, ProstG, ProstB);
    rect(width/10, height - 150, 180, 60);



    if(label == "Fleißig" && confidence > .8){
      FleißigR = 255;
      FleißigG = 106;
      FleißigB = 106;
      image(image4, width - 545, height - 580, 500, 500);
    }
      fill(FleißigR, FleißigG, FleißigB);
      rect(width/10, height - 250, 380, 60);


    if (label == "Kartoffel" && confidence > .8){
      KartoffelR = 255;
      KartoffelG = 193;
      KartoffelB = 193;
      image(image3, width - 545, height - 580, 500, 500);
    }
      fill(KartoffelR, KartoffelG, KartoffelB);
      rect(width/10, height - 350, 580, 60);



      if (label == "Unfreundlich" && confidence > .8){
        UnfreundlichR = 0;
        UnfreundlichG = 245;
        UnfreundlichB = 255;
        image(image6, width - 545, height - 580, 500, 500);
      }
        fill(UnfreundlichR, UnfreundlichG, UnfreundlichB);
        rect(width/10, height - 450, 780, 60);



      if (label == "Mülltrennung" && confidence > .8){
        MülltrennungR = 127;
        MülltrennungG = 255;
        MülltrennungB = 212;
        image(image5, width - 545, height - 580, 500, 500);
      }
        fill(MülltrennungR, MülltrennungG, MülltrennungB);
        rect(width/10, height - 550, 980, 60);



      if (label == "Humorlos und steif" && confidence > .8){
        HumorlosR = 154;
        HumorlosG = 255;
        HumorlosB = 154;
        image(image7, width - 545, height - 580, 500, 500);
      }
        fill(HumorlosR, HumorlosG, HumorlosB);
        rect(width/10, height - 650, 1180, 60);




      if (label == "Einkommensteuererklärung" && confidence > .9){
        EinkommensteuererklärungR = 0;
        EinkommensteuererklärungG = 255;
        EinkommensteuererklärungB = 0;
        image(image2, width - 545, height - 580, 500, 500);
        image(image8, width/10, height - 1000, 150, 150);
        sound1.play();
        sound1.playMode("untilDone");
      }
        fill(EinkommensteuererklärungR, EinkommensteuererklärungG, EinkommensteuererklärungB);
        rect(width/10, height - 750, 1380, 60);






  //if (confidence < .8){
    //if (label == confidence > .9) {
  //if (label == "Background Noise" && "Prost" && "Fleißig" && "Kartoffel" && "Unfreundlich" && "Mülltrennung" && "Humorlos und steif" && "Einkommensteuererklärung" && confidence < 0.5){
  //fill(0);
  //rect(width/10, height - 1000, 150, 150);
  //fill(255, 255 ,255);
  //textSize(20);
  //text(nope, 200, height - 900);
  //text(nope2, 200, height - 870);
  //sound2.play();
    //sound2.playMode("untilDone");



  fill(0);
  textSize(40);
  text(titel, 400, height - 970);
  //text(score, width/2, height - 900);
  text(confidence, 400, height - 900);

  textSize(20);
  fill(0);
  //draw the label on teh canvas
  text(test1, 200, height - 100);
  text(test2, 200, height - 200);
  text(test3, 200, height - 300);
  text(test4, 200, height - 400);
  text(test5, 200, height - 500);
  text(test6, 200, height - 600);
  text(test7, 200, height - 700);


}