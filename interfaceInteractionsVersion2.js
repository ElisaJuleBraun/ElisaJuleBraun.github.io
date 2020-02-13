var data;
var dates;
var button1;

//January25
//var vid1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;

//January26
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
//var img19;
var img110;
//var img111;
var img12;
var img13;

//January27
var img21;
var img22;
var img23;
var img24;
var img25;
var img26;
var img27;
var img28;
var img29;
var img210;
var img211;
//var img12;
//var img13;

//January28
var img31;
var img32;
var img33;
var img34;
var img35;
var img36;
var img37;
var img38;
var img39;

//January29
var img41;
//var img42;
var img43;
var img44;
var img45;
var img46;
var img47;
var img48;
var img49;
var img410;
var img411;

//January30
var img51;
var img52;
var img53;
//var img54;
var img55;
var img56;
var img57;
var img58;

//January31
var img61;
var img62;
var img63;
var img64;
var img65;
var img66;
var img67;
var img68;
var img69;
var img610;

//February01
var img71;
var img72;
var img73;
var img74;
var img75;
var img76;
var img77;

//February02
var img81;
var img82;
var img83;
var img84;
var img85;
var img86;
var img87;
var img88;

//February03
var img91;
var img92;
var img93;
var img94;
var img95;

//February04
var img101;
var img102;
var img103;
var img104;
var img105;
var img106;
var img107;
var img108;

//February05
var img201;
var img202;
var img203;
var img204;
var img205;
var img206;
var img207;


var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var sound6;
var sound7;
var sound8;
var sound9;
var sound10;
var sound11;
var sound12;

var playsound;


var valueX;
var valueY;

var interactions;


function preload(){
	//loading
	data = loadJSON("interactions.json");
	//vid1 = loadVideo("imagedataprofile/January25/1.mov");
	img2 = loadImage("imagedataprofile/January25/2.png");
	img3 = loadImage("imagedataprofile/January25/3.png");
	img4 = loadImage("imagedataprofile/January25/4.png");
	img5 = loadImage("imagedataprofile/January25/5.png");
	img6 = loadImage("imagedataprofile/January25/6.png");
	img7 = loadImage("imagedataprofile/January25/7.png");

	img11 = loadImage("imagedataprofile/January26/1.png");
	img12 = loadImage("imagedataprofile/January26/2.jpeg");
	img13 = loadImage("imagedataprofile/January26/3.PNG");
	img14 = loadImage("imagedataprofile/January26/4.jpeg");
	img15 = loadImage("imagedataprofile/January26/5.png");
	img16 = loadImage("imagedataprofile/January26/6.png");
	img17 = loadImage("imagedataprofile/January26/7.png");
	img18 = loadImage("imagedataprofile/January26/8.png");
	//img19 = loadImage("imagedataprofile/January26/9.png");
	img110 = loadImage("imagedataprofile/January26/10.png");
	//img111 = loadImage("imagedataprofile/January26/8.png");
	img112 = loadImage("imagedataprofile/January26/12.png");
	img113 = loadImage("imagedataprofile/January26/13.png");

	img21 = loadImage("imagedataprofile/January27/1.png");
 	img22 = loadImage("imagedataprofile/January27/2.png");
	img23 = loadImage("imagedataprofile/January27/3.png");
	img24 = loadImage("imagedataprofile/January27/4.png");
	img25 = loadImage("imagedataprofile/January27/5.PNG");
	img26 = loadImage("imagedataprofile/January27/6.png");
	img27 = loadImage("imagedataprofile/January27/7.png");
	img28 = loadImage("imagedataprofile/January27/8.png");
	img29 = loadImage("imagedataprofile/January27/9.png");
	img210 = loadImage("imagedataprofile/January27/10.jpeg");
	img211 = loadImage("imagedataprofile/January27/11.jpeg");

	img31 = loadImage("imagedataprofile/January28/1.png");
	img32 = loadImage("imagedataprofile/January28/2.png");
	img33 = loadImage("imagedataprofile/January28/3.png");
	img34 = loadImage("imagedataprofile/January28/4.png");
	img35 = loadImage("imagedataprofile/January28/5.png");
	img36 = loadImage("imagedataprofile/January28/6.jpeg");
	img37 = loadImage("imagedataprofile/January28/7.png");
	img38 = loadImage("imagedataprofile/January28/8.jpeg");
	img39 = loadImage("imagedataprofile/January28/9.png");

	img41 = loadImage("imagedataprofile/January29/1.png");
	//img42 = loadImage("imagedataprofile/January29/2.jpeg");
	img43 = loadImage("imagedataprofile/January29/3.png");
	img44 = loadImage("imagedataprofile/January29/4.png");
	img45 = loadImage("imagedataprofile/January29/5.png");
	img46 = loadImage("imagedataprofile/January29/6.png");
	img47 = loadImage("imagedataprofile/January29/7.png");
	img48 = loadImage("imagedataprofile/January29/8.png");
	img49 = loadImage("imagedataprofile/January29/9.png");
	img410 = loadImage("imagedataprofile/January29/10.jpeg");
	img411 = loadImage("imagedataprofile/January29/11.jpeg");

	img51 = loadImage("imagedataprofile/January30/1.png");
	img52 = loadImage("imagedataprofile/January30/2.png");
	img53 = loadImage("imagedataprofile/January30/3.png");
	//img54 = loadImage("imagedataprofile/January30/4.png");
	img55 = loadImage("imagedataprofile/January30/5.png");
	img56 = loadImage("imagedataprofile/January30/6.png");
	img57 = loadImage("imagedataprofile/January30/7.png");
	img58 = loadImage("imagedataprofile/January30/8.png");

	img61 = loadImage("imagedataprofile/January31/1.png");
	img62 = loadImage("imagedataprofile/January31/2.png");
	img63 = loadImage("imagedataprofile/January31/3.png");
	img64 = loadImage("imagedataprofile/January31/4.png");
	img65 = loadImage("imagedataprofile/January31/5.png");
	img66 = loadImage("imagedataprofile/January31/6.png");
	img67 = loadImage("imagedataprofile/January31/7.png");
	img68 = loadImage("imagedataprofile/January31/8.png");
	img69 = loadImage("imagedataprofile/January31/9.png");
	img610 = loadImage("imagedataprofile/January31/10.png");

	img71 = loadImage("imagedataprofile/February01/1.png");
	img72 = loadImage("imagedataprofile/February01/2.png");
	img73 = loadImage("imagedataprofile/February01/3.png");
	img74 = loadImage("imagedataprofile/February01/4.png");
	img75 = loadImage("imagedataprofile/February01/5.png");
	img76 = loadImage("imagedataprofile/February01/6.jpeg");
	img77 = loadImage("imagedataprofile/February01/7.png");

	img81 = loadImage("imagedataprofile/February02/1.png");
	img82 = loadImage("imagedataprofile/February02/2.png");
	img83 = loadImage("imagedataprofile/February02/3.png");
	img84 = loadImage("imagedataprofile/February02/4.png");
	img85 = loadImage("imagedataprofile/February02/5.jpeg");
	img86 = loadImage("imagedataprofile/February02/6.png");
	img87 = loadImage("imagedataprofile/February02/7.jpeg");
	img88 = loadImage("imagedataprofile/February02/8.png");

	img91 = loadImage("imagedataprofile/February03/1.png");
	img92 = loadImage("imagedataprofile/February03/2.png");
	img93 = loadImage("imagedataprofile/February03/3.png");
	img94 = loadImage("imagedataprofile/February03/4.png");
	img95 = loadImage("imagedataprofile/February03/5.png");

	img101 = loadImage("imagedataprofile/February04/1.png");
	img102 = loadImage("imagedataprofile/February04/2.png");
	img103 = loadImage("imagedataprofile/February04/3.png");
	img104 = loadImage("imagedataprofile/February04/4.png");
	img105 = loadImage("imagedataprofile/February04/5.png");
	img106 = loadImage("imagedataprofile/February04/6.png");
	img107 = loadImage("imagedataprofile/February04/7.png");
	img108 = loadImage("imagedataprofile/February04/8.jpeg");

	img201 = loadImage("imagedataprofile/February05/1.png");
	img202 = loadImage("imagedataprofile/February05/2.png");
	img203 = loadImage("imagedataprofile/February05/3.png");
	img204 = loadImage("imagedataprofile/February05/4.png");
	img205 = loadImage("imagedataprofile/February05/5.png");
	img206 = loadImage("imagedataprofile/February05/6.png");
	img207 = loadImage("imagedataprofile/February05/7.png");

	sound1 = loadSound("tracks/1.mp3");
	sound2 = loadSound("tracks/2.wav");
	sound3 = loadSound("tracks/3.mp3");
	sound4 = loadSound("tracks/4.mp3");
	sound5 = loadSound("tracks/5.mp3");
	sound6 = loadSound("tracks/6.mp3");
	sound7 = loadSound("tracks/7.mp3");
	sound8 = loadSound("tracks/8.mp3");
	sound9 = loadSound("tracks/9.wav");
	sound10 = loadSound("tracks/10.mp3");
	sound11 = loadSound("tracks/11.mp3");
	sound12 = loadSound("tracks/12.mp3");

}

function setup(){
	createCanvas(windowWidth, windowHeight);


	//load all of the data into the interactions variable
 interactions = data.interactions;



}
function mouseReleased() {

 	 if(sound1.isPlaying()) {
     sound1.stop();
}
	if(sound2.isPlaying()) {
	    sound2.stop();
}
if(sound3.isPlaying()) {
		sound3.stop();
}
if(sound4.isPlaying()) {
		sound4.stop();
}
if(sound5.isPlaying()) {
		sound5.stop();
}
if(sound6.isPlaying()) {
		sound6.stop();
}
if(sound7.isPlaying()) {
		sound7.stop();
}
if(sound8.isPlaying()) {
		sound8.stop();
}
if(sound9.isPlaying()) {
		sound9.stop();
}
if(sound10.isPlaying()) {
		sound10.stop();
}
if(sound11.isPlaying()) {
		sound11.stop();
}
if(sound12.isPlaying()) {
		sound12.stop();
}
}


function draw(){

	background(255, 255, 0);;
	//fill(0, 255, 0);


	fill(0);
	textSize(70);
	textFont('Helvetica');
	//text('D A T A	 P R O F I L E', 100, 100);
	fill(0);

	//if (mouseX > 600 && mouseX < 800 && mouseY > 560 && mouseY < 600) {
	//video(vid1, 600, 560, 800, 800);
	//}
//JANUARY 25
	if (mouseX > 600 && mouseX < 800 && mouseY > 560 && mouseY < 600) {
		image(img2, 800, 700, 3584/3, 2240/3);
		image(img4, 1100, 00, 3584/3, 2240/3);
		image(img5, 200, 0, 3584/3, 2240/3);
		image(img6, 0, 500, 3584/3, 2240/3);
		image(img7, 800, -100, 3584/3, 2240/3);
		image(img2, -100, 200, 3584/3, 2240/3);
		image(img6, 300, 700, 3584/3, 2240/3);
		image(img3, -600, 0, 3584/3, 2240/3);
		image(img2, 800, 700, 3584/3, 2240/3);



		if(mouseIsPressed){

			sound1.play();
			sound1.playMode("untilDone");


			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 25"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 600, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 600, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);


						}
					}
				}
			}
		}

	}
	//JANUARY26
	if (mouseX > 300 && mouseX < 500 && mouseY > 260 && mouseY < 300) {
		image(img11, 100, 800, 640, 1136);
		image(img12, -30, -400, 640, 1136);
		image(img13, 1200, 600, 1536, 2048);
		image(img14, 800, -500, 640, 1136);
		image(img15, 300, 500, 640, 1136);
		image(img16, 1400, -500, 640, 1136);
		image(img17, -100, 700, 640, 1136);
		image(img18, 200, 0, 640, 1136);
		//image(img19, 1200, 600, width/2, height/2);
		image(img110, 800, 300, 3584/3, 2240/3);
		//image(img111, 300, 500, width/2, height/2);
		image(img112, 1400, 400, 640, 1136);
		image(img113, 100, 800, 3584/3, 2240/3);



		if(mouseIsPressed){

			sound2.play();
			sound2.playMode("untilDone");



			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 26"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 300, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 300, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//JANUARY27
	if (mouseX > 1200 && mouseX < 1400 && mouseY > 410 && mouseY < 450) {
		image(img21, 100, 800, 640, 1136);
		image(img22, 0, -500, 640, 1136);
		image(img23, 1200, -50, 640, 1136);
		image(img24, 800, 300, 640, 1136);
		image(img25, 300, 500, 1536, 2048);
		image(img26, 1400, 0, 3584/3, 2240/3);
		image(img27, -100, 800, 3584/3, 2240/3);
		image(img28, -200, 100, 3584/3, 2240/3);
		image(img29, 1200, 600, 3584/3, 2240/3);
		image(img210, 600, -300, 640, 1136);
		image(img211, 300, 200, 640, 1136);



		if(mouseIsPressed){

			sound3.play();
			sound3.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 27"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 1200, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 1200, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//JANUARY28
	if (mouseX > 800 && mouseX < 1000 && mouseY > 660 && mouseY < 700) {
		image(img31, 100, 800, 3584/3, 2240/3);
		image(img32, -200, 0, 3584/3, 2240/3);
		image(img38, 500, -300, 2248/3, 3264/3);
		image(img33, 1200, 600, 3584/3, 2240/3);
		image(img36, 1600, 300, 2448/3, 3264/3);
		image(img33, 1200, 600, 3584/3, 2240/3);
		image(img34, 1100, -200, 3584/3, 2240/3);
		image(img35, 300, 500, 3584/3, 2240/3);
		image(img37, -100, 700, 640, 1136);
		image(img39, 1000, 100, 640, 1136);

		if(mouseIsPressed){

			sound4.play();
			sound4.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 28"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 800, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 800, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//JANUARY29
	if (mouseX > 1000 && mouseX < 1200 && mouseY > 160 && mouseY < 200) {
		image(img41, 100, 800, 640, 1136);
		//image(img42, 0, 100, width/2, height/2);

		image(img44, 1100, 0, 3584/3, 2240/3);
		image(img45, 300, 800, 640, 1136);

		image(img46, 1100, -400, 3584/3, 2240/3);
		image(img410, 400, -300, 2448/3, 3264/3);
		image(img47, 0, 800, 3584/3, 2240/3);
		image(img43, 800, 0, 640, 1136);
		image(img48, -200, -100, 640, 1136);
		image(img49, 1000, 600, 3584/3, 2240/3);

		image(img411, 500, 500, 640, 1136);

		if(mouseIsPressed){

			sound5.play();
			sound5.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 29"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 1000, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 1000, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//JANUARY30
	if (mouseX > 1100 && mouseX < 1300 && mouseY > 510 && mouseY < 550) {

		image(img52, 0, -100, 640, 1136);
		image(img51, -100, 800, 640, 1136);
		image(img53, 1300, 680, 640, 1136);
		//image(img54, 800, 300, width/2, height/2);
		image(img55, 230, 500, 3584/3, 2240/3);
		image(img56, 1400, 0, 3584/3, 2240/3);
		image(img57, 100, 200, 3584/3, 2240/3);
		image(img58, 300, -200, 3584/3, 2240/3);

		if(mouseIsPressed){

			sound6.play();
			sound6.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 30"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 1100, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 1100, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//January31
	if (mouseX > 200 && mouseX < 400 && mouseY > 760 && mouseY < 800) {
		image(img61, 100, 800, 640, 1136);
		image(img62, 0, -200, 640, 1136);
		image(img63, 1200, 600, 3584/3, 2240/3);
		image(img64, 600, 700, 640, 1136);
		image(img65, 300, 500, 3584/3, 2240/3);
		image(img66, 1400, 0, 640, 1136);
		image(img67, -300, 800, 3584/3, 2240/3);
		image(img68, -300, 1400, 3584/3, 2240/3);
		image(img64, 700, 700, 640, 1136);
		image(img69, 1200, 300, 3584/3, 2240/3);
		image(img610, 500, -100, 3584/3, 2240/3);



		if(mouseIsPressed){

			sound7.play();
			sound7.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "January 31"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 200, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 200, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//FEBRUARY01
	if (mouseX > 100 && mouseX < 315 && mouseY > 310 && mouseY < 350) {
		image(img71, 600, 400, 640, 1136);
		image(img76, -550, -30, 2448/3, 3264/3);
		image(img73, 800, -100, 3584/3, 2240/3);
		image(img74, 200, 300, 3584/3, 2240/3);
		image(img75, -100, 700, 3584/3, 2240/3);
		image(img72, 200, 0, 640, 1136);
		image(img77, 1240, 600, 640, 1136);

		if(mouseIsPressed){

			sound8.play();
			sound8.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "February 01"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 100, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 100, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//FEBRUARY02
	if (mouseX > 1300 && mouseX < 1515 && mouseY > 610 && mouseY < 650) {
		image(img81, 100, 800, 640, 1136);
		image(img82, 500, -100, 3584/3, 2240/3);
		image(img83, 1200, 600, 3584/3, 2240/3);
		image(img84, 800, 300, 640, 1136);
		image(img85, 300, 500, 2448/3, 3264/3);
		image(img86, 1400, -50, 640, 1136);
		image(img87, 100, 800, 2448/3, 3264/3);
		image(img88, 0, 0, 640, 1136);

		if(mouseIsPressed){

			sound9.play();
			sound9.playMode("untilDone");

			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "February 02"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 1300, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 1300, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//FEBRUARY03
	if (mouseX > 500 && mouseX < 715 && mouseY > 710 && mouseY < 750) {
		image(img91, 800, 0, 3584/3, 2240/3);
		image(img92, -100, -50, 3584/3, 2240/3);
		image(img94, 1000, 400, 3584/3, 2240/3);
		image(img95, -50, 500, 3584/3, 2240/3);
		image(img93, 500, 800, 3584/3, 2240/3);

		if(mouseIsPressed){

			sound10.play();
			sound10.playMode("untilDone");


			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "February 03"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 500, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 500, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//FEBRUARY04
	if (mouseX > 900 && mouseX < 1115 && mouseY > 310 && mouseY < 350) {
		image(img101, 100, 600, 640, 1136);
		image(img102, 0, 200, 640, 1136);
		image(img103, 1200, -50, 640, 1136);
		image(img104, 800, 400, 3584/3, 2240/3);

		image(img106, 1400, 0, 3584/3, 2240/3);
		image(img107, 100, -20, 3584/3, 2240/3);
		image(img108, 0, -100, 900/2, 1600/2);
		image(img105, 700, 300, 640, 1136);

		if(mouseIsPressed){

			sound11.play();
			sound11.playMode("untilDone");


			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "February 04"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 900, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 900, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}
	//FEBRUARY05
	if (mouseX > 150 && mouseX < 365 && mouseY > 410 && mouseY < 450) {

		image(img203, 200, 0, 3584/3, 2240/3);
		image(img204, 800, -20, 3584/3, 2240/3);
		image(img205, 300, 500, 3584/3, 2240/3);

		image(img202, 0, -30, 640, 1136);

		image(img206, 1100, 650, 3584/3, 2240/3);
		image(img207, -300, 800, 3584/3, 2240/3);
		image(img201, 700, 100, 640, 1136);

		if(mouseIsPressed){

			sound12.play();
			sound12.playMode("untilDone");


			for(var i = 0; i< interactions.length; i++){
				//dates stores the date field
				dates = interactions[i].date;
				//create an h1 header for all ofthe date entries

				if(dates == "February 05"){
					//specifics stores all of the specific data for each date
					var specifics = interactions[i].specifics;
					let timeX = 40;
						let companyX = 70;

					//loop through all of the categories in the soecifics array
					for(let j = 0; j < specifics.length; j++){


						print(specifics[j].time);
						text("Time: " + specifics[j].time, 150, timeX);
						timeX = timeX+ 100;

						text("Company: " + specifics[j].company, 150, companyX);
						companyX = companyX+ 100;

						//services stores the services array fro each date
						let services = specifics[j].services;
						//loop through all of the services in the services array
						for(let s = 0; s<services.length; s++){
							//create a div for each services entry
							//createDiv("Services: " + services[s]);
						}
						//input stores the input array for each date
						let input = specifics[j].input;
						//loop through all of the inputs in the inputs array
						for(let s = 0; s<input.length; s++){
							//create a div for each input entry
							//createDiv("Inputs: " + input[s]);
						}
					}
				}
			}
		}

	}



	fill(0);

	rect(600, 560, 200, 50);
	rect(300, 260, 200, 50);
	rect(1200, 410, 200, 50);
	rect(800, 660, 200, 50);
	rect(1000, 160, 200, 50);
	rect(1100, 510, 200, 50);
	rect(200, 760, 200, 50);
	rect(100, 310, 215, 50);
	rect(1300, 610, 215, 50);
	rect(500, 710, 215, 50);
	rect(900, 310, 215, 50);
	rect(150, 410, 215, 50);

	fill(255, 255, 0)
	textSize(40);
	textFont('Helvetica');
	text("January 25", 600, 600);
	text("January 26", 300, 300);
	text("January 27", 1200, 450);
	text("January 28", 800, 700);
	text("January 29", 1000, 200);
	text("January 30", 1100, 550);
	text("January 31", 200, 800);
	text("February 01", 100, 350);
	text("February 02", 1300, 650);
	text("February 03", 500, 750);
	text("February 04", 900, 350);
	text("February 05", 150, 450);



}
