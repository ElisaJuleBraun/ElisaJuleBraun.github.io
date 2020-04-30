let canvas;
let video;
let classifier;
let flippedVideo;
let confidence;
let label;


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
  fill(0);
  rect(width - 1710, height - 1100, 150, 150);
  fill(255, 255, 255)
  textSize(20);
  text(nope, width - 1700, height - 1000);
  text(nope2, width - 1700, height - 970);

  if(confidence < 0.8){
    fill(255, 255 ,255);
    rect(width - 1710, height - 500, 30, 30);
  }

  fill(201, 201 ,201);
  rect(width - 1710, height - 100, 180, 60);
  fill(201, 201 ,201);
  rect(width - 1710, height - 200, 380, 60);
  fill(201, 201 ,201);
  rect(width - 1710, height - 300, 580, 60);
  fill(201, 201 ,201);
  rect(width - 1710, height - 400, 780, 60);
  fill(201, 201 ,201);
  rect(width - 1710, height - 500, 980, 60);
  fill(201, 201 ,201);
  rect(width - 1710, height - 600, 1180, 60);
  fill(201, 201 ,201);
  rect(width - 1710, height - 700, 1380, 60);





  if(label == "Prost"){
    fill(255, 64 ,64);
    rect(width - 1710, height - 100, 180, 60);
  }
  if(label == "Fleißig"){
    fill(255, 106, 106);
    rect(width - 1710, height - 200, 380, 60);
  }
  if (label == "Kartoffel"){
    fill(255,	193, 193);
    rect(width - 1710, height - 300, 580, 60);
  }
  if (label == "Unfreundlich"){
    fill(0, 245, 255);
    rect(width - 1710, height - 400, 780, 60);
  }
  if (label == "Mülltrennung"){
    fill(127, 255, 212);
    rect(width - 1710, height - 500, 980, 60);
  }
  if (label == "Humorlos und steif"){
    fill(154, 255, 154);
    rect(width - 1710, height - 600, 1180, 60);
  }
  if (label == "Einkommensteuererklärung"){
    fill(0, 255, 0);
    rect(width - 1710, height - 700, 1380, 60);
  }
  if (label == "Background Noise"){
  fill(0);
  rect(width - 1710, height - 700, 100, 100);
  }





  fill(0);
  textSize(40);
  text(titel, width - 1710, height - 850);
  text(score, width - 1710, height - 750);
  text(confidence, width - 1580, height - 750);

  textSize(20);
  fill(0);
  //draw the label on teh canvas
  text(test1, width - 1700, height - 50);
  text(test2, width - 1700, height - 150);
  text(test3, width - 1700, height - 250);
  text(test4, width - 1700, height - 350);
  text(test5, width - 1700, height - 450);
  text(test6, width - 1700, height - 550);
  text(test7, width - 1700, height - 650);




}
