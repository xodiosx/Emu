	// Check if a new cache is available on page load.	 
	function checkAppCache() {
		console.log('check AppCache');
		window.applicationCache.addEventListener('updateready', function (e) {
			console.log("AppCache: updateready");
			if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {

				// Browser downloaded a new app cache.
				// Swap it in and reload the page to get the new hotness.
				window.applicationCache.swapCache();
				if (confirm('A new version of this site is available. Load it?')) {
					window.location.reload();
				}

			} else {
				// Manifest didn't change. Nothing new to server.
			}
		}, false);

		window.applicationCache.addEventListener('cached', function (e) {
			console.log("AppCache: cached");
		}, false);

	}


	// Action starts here:

	function hideAdressbar() {
		console.log("hide adressbar");
		$("html").scrollTop(1);
		$("body").scrollTop(1);
	}

	
hideAdressbar();

		if (window.applicationCache != null) {checkAppCache();
}

setTimeout(function(){
   
document.getElementById('rready').style.display="none";
loadAssets();
 },10)

const loadAssets = () => {

 const diir='static/media/'; 
document.getElementById('preload-container').innerHTML = '<h9> ,,, جاري تحميل النظام ,,, <span id="loading-percent">' + 0 + '</span>%</h9>';

  const queue = new createjs.LoadQueue();

  queue.on("progress", handleProgress, this);
  queue.on("complete", handleComplete, this);

  queue.loadManifest([
{id:'img100',src:'../colormix/cs1/v1.mp4'},
{id:'img101',src:'../piano/cs2/v1.mp4'},
{id:'img102',src:'../Rubik/cs3/v1.mp4'},
{id:'img103',src:'../jigsaw/cs4/v1.mp4'},
{id:'img104',src:'../b1.png'},
{id:'img105',src:'../b2.png'},
{id:'img106',src:'../b3.png'},
{id:'img107',src:'../b4.png'},
{id:'img108',src:'../ovrc.gif'},
{id:'img109',src:'../ovrp.gif'},
{id:'img110',src:'../ovrr.gif'},
{id:'img111',src:'../ovrj.gif'},
{id:'img112',src:'../bgm.mp3'},
{id:'img113',src:'../saw.mp3'},
{id:'img0',src:diir+'Pirate_Cove-1.gif'},
{id:'img1',src:diir+'East_Hall-f.gif'},
{id:'img2',src:diir+'East_Hall-c.gif'},
{id:'img3',src:diir+'Freddy-Jumpscare1.gif'},
{id:'img4',src:diir+'Restrooms2.gif'},
{id:'img6',src:diir+'EHallCorner-c.gif'},
{id:'img7',src:diir+'EHallCorner-f.gif'},
{id:'img8',src:diir+'East_Hall-c-f.gif'},
{id:'img9',src:diir+'Pirate_Cove-2.gif'},
{id:'img11',src:diir+'Bonnie-Jumpscare.gif'},
{id:'img12',src:diir+'Chica-Jumpscare.gif'},
{id:'img13',src:diir+'Foxy-Jumpscare.gif'},
{id:'img14',src:diir+'Foxy-Jumpscare.gif'},
{id:'img15',src:diir+'Backstage-b.gif'},
{id:'img16',src:diir+'West_Hall-b.gif'},
{id:'img17',src:diir+'Pirate_Cove-3.gif'},
{id:'img18',src:diir+'Up.gif'},
{id:'img94',src:diir+'SupplyRoom.gif'},
{id:'img19',src:diir+'Down.gif'},
{id:'img20',src:diir+'DinningArea.gif'},
{id:'img21',src:diir+'DinningArea2.gif'},
{id:'img22',src:diir+'Restrooms.gif'},
{id:'img23',src:diir+'st.gif'},
{id:'img95',src:diir+'Static-Cam.gif'},
{id:'img24',src:diir+'Foxy-Hallway.gif'},
{id:'img25',src:diir+'West_Hall.gif'},
{id:'img26',src:diir+'Victory.gif'},
{id:'img27',src:diir+'FNAF.gif'},
{id:'img28',src:diir+'EHallCorner.gif'},
{id:'img29',src:diir+'SupplyRoom2.gif'},
{id:'img30',src:diir+'East_Hall.gif'},
{id:'img31',src:diir+'305.gif'},
{id:'img32',src:diir+'Freddy.gif'},
{id:'img33',src:diir+'RL.gif'},
{id:'img34',src:diir+'Backstage.gif'},
{id:'img35',src:diir+'RL_LL_BONNIE.gif'},
{id:'img36',src:diir+'RL_LL_BONNIE_CHICA.gif'},
{id:'img37',src:diir+'RL_LL_CHICA.gif'},
{id:'img38',src:diir+'LD_RL_BONNIE.gif'},
{id:'img39',src:diir+'LD_RL_CHIC.gif'},
{id:'img40',src:diir+'RL_CHICA.gif'},
{id:'img41',src:diir+'LD_RL.gif'},
{id:'img42',src:diir+'RL_LL.gif'},
{id:'img43',src:diir+'Pirate_Cove.gif'},
{id:'img44',src:diir+'LL_BONNIE.gif'},
{id:'img45',src:diir+'LL_CHICA.gif'},
{id:'img46',src:diir+'RL_BONNIE.gif'},
{id:'img47',src:diir+'RD_LL_BONNIE.gif'},
{id:'img48',src:diir+'RD.gif'},
{id:'img49',src:diir+'LL.gif'},
{id:'img50',src:diir+'LD.gif'},
{id:'img51',src:diir+'RD_LL.gif'},
{id:'img52',src:diir+'Default.gif'},
{id:'img53',src:diir+'RD_LD.gif'},
{id:'img54',src:diir+'foxy.png'},
{id:'img55',src:diir+'chica.png'},
{id:'img56',src:diir+'WHallCorner.gif'},
{id:'img57',src:diir+'304.gif'},
{id:'img58',src:diir+'Stage.gif'},
{id:'img59',src:diir+'bonnie.png'},
{id:'img60',src:diir+'WHallCorner-b.gif'},
{id:'img61',src:diir+'Complete_Map.png'},
{id:'img62',src:diir+'golden_freddy.gif'},
{id:'img63',src:diir+'CameraButton.png'},
{id:'img64',src:diir+'hello.mp3'},
{id:'img65',src:diir+'blip3.mp3'},
{id:'img66',src:diir+'putdown.mp3'},
{id:'img67',src:diir+'Clock.mp3'},
{id:'img68',src:diir+'garble1.mp3'},
{id:'img69',src:diir+'garble2.mp3'},
{id:'img70',src:diir+'jumpscare.mp3'},
{id:'img71',src:diir+'powerdown.mp3'},
{id:'img72',src:diir+'haul.ogg'},
{id:'img73',src:diir+'welcome.mp3'},
{id:'img74',src:diir+'breath2.mp3'},
{id:'img75',src:diir+'windowscare.mp3'},
{id:'img76',src:diir+'CameraIdle2.mp3'},
{id:'img96',src:diir+'powerdown2.mp3'},
{id:'img77',src:diir+'Dead.mp3'},
{id:'img78',src:diir+'musicbox.mp3'},
{id:'img79',src:diir+'ss/bgm22.mp3'},
{id:'img80',src:diir+'ss/bgm21.mp3'},
{id:'img81',src:diir+'ss/cryl.mp3'},
{id:'img82',src:diir+'ss/knockl.mp3'},
{id:'img83',src:diir+'ss/bgm.mp3'},
{id:'img84',src:diir+'ss/cryr.mp3'},
{id:'img85',src:diir+'ss/wsl.mp3'},
{id:'img86',src:diir+'ss/cry2l.mp3'},
{id:'img87',src:diir+'ss/fsl.mp3'},
{id:'img88',src:diir+'ss/wsr.mp3'},
{id:'img89',src:diir+'ss/gsl.mp3'},
{id:'img90',src:diir+'ss/fsr.mp3'},
{id:'img91',src:diir+'ss/knock2l.mp3'},
{id:'img92',src:diir+'ss/gsr.mp3'},
{id:'img93',src:diir+'ss/lsl.mp3'},
{id:'img94',src:diir+'ss/doorl.mp3'},
{id:'img95',src:diir+'ss/lsr.mp3'},
{id:'img96',src:diir+'ss/doorr.mp3'}

  ]);

  queue.load();
};



const handleProgress = (e) => {

  let percent = Math.round(e.progress * 100);

  document.getElementById('loading-percent').innerHTML = percent;
};



const handleComplete = () => {

  document.getElementById('preload-container').innerHTML = '<h9>جاري التشغيل!</h9>';
navigator.vibrate([
  100, 50, 100, 50, 100, 50, 200,
])
setTimeout(function(){
   loaded=true;
document.getElementById('rready').style.display="block";
document.getElementById('preload-container').style.display="none";
 },2500)
};



var hellon= new Audio("static/media/hello.mp3");

var bgm21= new Audio("static/media/ss/bgm21.mp3");
var bgm22= new Audio("static/media/ss/bgm22.mp3");
var bgm= new Audio("static/media/ss/bgm.mp3");
var cryl= new Audio("static/media/ss/cryl.mp3");
var cryr= new Audio("static/media/ss/cryr.mp3");
var cry2l= new Audio("static/media/ss/cry2l.mp3");
var cry2r= new Audio("static/media/ss/cry2r.mp3");
var knockl= new Audio("static/media/ss/knockl.mp3");
var knockr= new Audio("static/media/ss/knockr.mp3");

var fsl= new Audio("static/media/ss/fsl.mp3");
var fsr= new Audio("static/media/ss/fsr.mp3");

var gsl= new Audio("static/media/ss/gsl.mp3");
var gsr= new Audio("static/media/ss/gsr.mp3");

var dorr= new Audio("static/media/ss/doorr.mp3");
var dorl= new Audio("static/media/ss/doorl.mp3");

var lsr= new Audio("static/media/ss/lsr.mp3");
var lsl= new Audio("static/media/ss/lsl.mp3");

var bgmplayed=false;
bgm21.loop=false;
var bgmplayed2=false;
bgm22.loop=false;
bgm.loop=true;

gsl.volume = 0.5;
gsl.volume = 0.5;
fsr.volume = 0.8;
fsl.volume = 0.9;
bgm.volume = 0.3;





  function fstt(){

const fss=setInterval(function(){
var aud=Math.round(Math.random() * 2);
var viprs=Math.round(Math.random() * 300);

 	if(aud==1&&powr<85&&hhour>0){
gsl.volume = 0.8;
gsr.volume = 0.8;

fsr.play();

navigator.vibrate([ viprs]);
}
if(aud==0&&powr<80&&hhour>0){


fsl.play();
navigator.vibrate([ viprs]);
}
if(aud==2&&powr<85&&hhour>0){

fsl.play();
navigator.vibrate([ viprs]);

}
clearInterval(fss)
  },4000)
}

function dorlr(){
if(hhour>1&&powr<75){
knockl.play();
navigator.vibrate([
300, 0, 100, 0, 100, 0, 300, 0, 100, 0, 100, 0, 100, 0, 100, 0, 600,
])

}

}





function gover(){

sessionStorage.removeItem("hhour");
localStorage.removeItem("hhour");
sessionStorage.removeItem("saveg");
localStorage.removeItem("saveg");
sessionStorage.removeItem("powr");
localStorage.removeItem("powr");
localStorage.clear();
sessionStorage.clear();


}



function goverr(){

sessionStorage.removeItem("hhour");
localStorage.removeItem("hhour");
sessionStorage.removeItem("saveg");
localStorage.removeItem("saveg");
sessionStorage.removeItem("powr");
localStorage.removeItem("powr");
localStorage.clear();
sessionStorage.clear();
setTimeout(function(){
  
window.location.reload();

  },9000)

}


document.getElementById("extras").style.display="none";
document.getElementById("extras2").style.display="none";
document.getElementById("extras3").style.display="none";
document.getElementById("extras4").style.display="none";







document.getElementById("extras").onclick = function(){

location=("../colormix/index2.html");
};

document.getElementById("extras2").onclick = function(){

location=("../piano/index2.html");
};

document.getElementById("extras3").onclick = function(){

location=("../Rubik/index2.html");
};


document.getElementById("extras4").onclick = function(){

location=("../jigsaw/index2.html");
};

var xxinfo = document.getElementById("xinfo");
xxinfo.innerHTML = "";
let adult = JSON.parse(localStorage.getItem("adult"));

setTimeout(function(){
  
if (adult){
//alert (adult)

sessionStorage.setItem("adult", JSON.stringify(adult));
localStorage.setItem("adult", JSON.stringify(adult));
} else {
 location=("../age/index.html");
}

  },1000)
var welcomes= new Audio("static/media/welcome.mp3");

let welcome=JSON.parse(localStorage.getItem("welcome"));


let timmrc;
let timmrp;
let timmrr;
let timmrj;
timmrc = JSON.parse(localStorage.getItem("timmrc"));
 timmrp = JSON.parse(localStorage.getItem("timmrp"));
 timmrr = JSON.parse(localStorage.getItem("timmrr"));
 timmrj = JSON.parse(localStorage.getItem("timmrj"));


let hhour=0;
let gamend=false;
 gamend = JSON.parse(localStorage.getItem("gamend"))

let crying=1;
setInterval(function(){
   crying=1;
cry2.pause();
cryr.pause();
cryl.pause();

  },4000)
let crying2=1;
setInterval(function(){
   crying2=1;

  },4000)

var cry= new Audio("static/media/cry.mp3");
var cry2= new Audio("static/media/ss/cry2l.mp3");

let hhourl = JSON.parse(localStorage.getItem("hhour"))
if(hhourl!=null){

 hhour=hhourl;
//alert(hhour)

} 

//alert(hhour)
let rest1="static/media/Restrooms2.gif";
let dinin="static/media/DinningArea2.gif";
let stag="static/media/Stage.gif";
let spply="static/media/SupplyRoom2.gif";
let eng;
let engy;
let powr;
let chk2;
let powrs;
let tpowr=18200;
chk2 = JSON.parse(localStorage.getItem("saveg"));
let rpowr;
rpowr = JSON.parse(localStorage.getItem("powr"));
powrs = rpowr;


if(rpowr!=undefined||
rpowr!="undefined"){
eng=rpowr;
} else {
eng=10;
}
//eng=rpowr;
//alert(rpowr)

let saveg =JSON.parse(localStorage.getItem("saveg"));

sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
chk2 = JSON.parse(localStorage.getItem("saveg"));
//saveg=111;
//alert(saveg)

 







if (chk2==111&&timmrc!=null){



 //rest1="static/media/Restrooms2.gif";

} else if (chk2==222&& timmrp!=null){ 

dinin="static/media/DinningArea.gif";

} else if (chk2==333&& timmrr!=null){ 



spply="static/media/SupplyRoom2.gif";} 

let deadp = JSON.parse(localStorage.getItem("deadp"));
if(deadp=="yes"){
dinin="../ovrp.png";
}
let deadc = JSON.parse(localStorage.getItem("deadc"));
if(deadc=="yes"){
rest1="../ovrc.png";
}
let deadr = JSON.parse(localStorage.getItem("deadr"));
if(deadr=="yes"){
spply="../ovrr.png";
}
let deadj = JSON.parse(localStorage.getItem("deadj"));
let deaths=JSON.parse(localStorage.getItem("deaths"));
if (deadc=="yes"){
deaths+=1;
sessionStorage.setItem("deaths", JSON.stringify(deaths));
localStorage.setItem("deaths", JSON.stringify(deaths));
} if(deadp=="yes"){
deaths+=1;
sessionStorage.setItem("deaths", JSON.stringify(deaths));
localStorage.setItem("deaths", JSON.stringify(deaths));
}
if(deadr=="yes"){
deaths+=1;
sessionStorage.setItem("deaths", JSON.stringify(deaths));
localStorage.setItem("deaths", JSON.stringify(deaths));
}
if(deadj=="yes"){
new Audio("../pops3.mp3").play();
setTimeout(function(){
    gover();
  },3000)
}




if (hhour<2&&chk2<1&&deadc==null&&deadp==null&& welcome==null){
setTimeout(function(){
    xxinfo.style.display="none";
xxinfo.innerHTML ="";

  },7000)

xxinfo.innerHTML = "لتجربة أفضل قم بوصل سماعة الأذن )\n                 ~ For a better experience, please use headphones";
//alert("لتجربة أفضل قم بوصل سماعة الأذن )\n                 ~ For a better experience, please use headphones ")
}

if (chk2<1&&deadc=="yes"||deadp=="yes"||deadr=="yes"){
setTimeout(function(){
    
//chk2 +2;
//rready.click();
  },2000)
}


if(hhour>2&&timmrc==null&&deadr==null&&deadc==null){
 dinin="static/media/DinningArea.gif";
  rest1="static/media/Restrooms.gif";

 spply="static/media/SupplyRoom.gif";

} else if(hhour>2&&deadp==null&& timmrp==null){
 dinin="static/media/DinningArea.gif";
 spply="static/media/SupplyRoom.gif";

} else if(hhour>2&&deadp==null&& timmrp!=null){
 dinin="static/media/DinningArea2.gif";
 

} else if(hhour>2&&deadr==null&&timmrr==null){
 

 spply="static/media/SupplyRoom.gif";

} else if(hhour>2&&chk2==333&&deadr==null){
 dinin="static/media/DinningArea2.gif";
  rest1="static/media/Restrooms2.gif";

 spply="static/media/SupplyRoom2.gif";

}else if(hhour>2&&chk2==333&&deadc==null&&deadp==null&&deadr==null){
 dinin="static/media/DinningArea2.gif";
  rest1="static/media/Restrooms2.gif";

 spply="static/media/SupplyRoom2.gif";

}else if(hhour>2&&chk2==222&&deadc==null&&deadp==null&&deadr==null){
 dinin="static/media/DinningArea2.gif";
  rest1="static/media/Restrooms2.gif";

 spply="static/media/SupplyRoom.gif";

}else if(hhour>2&&chk2==111&&deadc==null&&deadp==null&&deadr==null&&timmrc!=null){
 dinin="static/media/DinningArea.gif";
  rest1="static/media/Restrooms2.gif";

 spply="static/media/SupplyRoom.gif";

}else if(hhour>2&&chk2==111&&deadc!=null&&deadp==null&&deadr==null){
 dinin="static/media/DinningArea2.gif";
  rest1="../ovrc.png";

 spply="static/media/SupplyRoom2.gif";

}else if(hhour>2&&chk2==111&&deadc==null&&deadp!=null&&deadr==null&timmrc!=null){
 
  rest1="static/media/Restrooms2.gif";
dinin="../ovrp.png";
 spply="static/media/SupplyRoom2.gif";

} else if(hhour>2&&chk2==111&&deadc==null&&deadp==null&&deadr!=null&timmrc!=null){
 dinin="static/media/DinningArea2.gif";
  rest1="static/media/Restrooms2.gif";

 spply="../ovrr.png";

}else if(hhour>2&&chk2==222&&deadc!=null&&deadp==null&&deadr==null){
 dinin="static/media/DinningArea2.gif";
  rest1="../ovrc.png";

 spply="static/media/SupplyRoom2.gif";

}else if(hhour>2&&chk2==222&&deadc==null&&deadp!=null&&deadr==null){
 
  rest1="static/media/Restrooms2.gif";
dinin="../ovrp.png";
 spply="static/media/SupplyRoom2.gif";

} else if(hhour>2&&chk2==222&&deadc==null&&deadp==null&&deadr!=null){
 dinin="static/media/DinningArea2.gif";
  rest1="static/media/Restrooms2.gif";

 spply="../ovrr.png";

}else if(hhour>2&&chk2==333&&deadc!=null&&deadp==null&&deadr==null){
 dinin="static/media/DinningArea2.gif";
  rest1="../ovrc.png";

 spply="static/media/SupplyRoom2.gif";

}else if(hhour>2&&chk2==333&&deadc==null&&deadp!=null&&deadr==null){
 
  rest1="static/media/Restrooms2.gif";
dinin="../ovrp.png";
 spply="static/media/SupplyRoom2.gif";

} else if(hhour>2&&chk2==333&&deadc==null&&deadp==null&&deadr!=null){
 dinin="static/media/DinningArea2.gif";
  rest1="static/media/Restrooms2.gif";

 spply="../ovrr.png";

}









if (gamend){
document.getElementById("extras").style.display="block";

document.getElementById("extras2").style.display="block";

document.getElementById("extras3").style.display="block";

document.getElementById("extras4").style.display="block";
}

function bgmbgm(){
setTimeout(function(){


   
bgm21.volume = 1;


if(!bgmplayed&&powr>3&&hhour<2&&hhour>0){
bgmplayed=true;

bgm21.play();

bgm.volume = 0.1;
}

 },1000)


}

function bgmbgm2(){
setTimeout(function(){

   
bgm22.volume = 1;


if(!bgmplayed2&&powr>3&& hhour<3&& hhour>1){
bgmplayed2=true;

bgm22.play();

bgm.volume = 0.1;
}

 },1000)


}

setTimeout(function(){



 },3000)




setInterval(function(){


if(!bgmplayed&&powr>3&&hhour<3&&hhour>0&&powr<82){



bgmbgm();
} else if(!bgmplayed2&&powr>3&&hhour<3&&hhour>1){


bgmbgm2();
} else {
bgm.play();
bgm.volume = 0.1;
}

 },1000)






    function gload() 
    {
 
 
    if (saveg==000){

//alert ("111")

//tpowr = powrs;

}
else  if (saveg==111){

//alert ("111")

//tpowr = powrs;

  

}
else if (saveg==222){

//alert ("222") 

//tpowr = powrs;
 

}
else if (saveg==333){

//alert ("333") 

//tpowr = powrs;

}


 else {
saveg=000;
sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
//alert ("no save")

}

    }




(this.webpackJsonpfnaf=this.webpackJsonpfnaf||[]).push([[0],[,,,,,,function(e,t,a){e.exports={golden_freddy:"CustomNight_golden_freddy__34mHX",custom_night_container:"CustomNight_custom_night_container__3GF8d",github_icon:"CustomNight_github_icon__2aDHa",animatronics_container:"CustomNight_animatronics_container__22Jbz",animatronic:"CustomNight_animatronic__O7vMK",range_buttons:"CustomNight_range_buttons__2Rm--",start_screen:"CustomNight_start_screen__2aVL9",ready_button:"CustomNight_ready_button__3fZ54",footer:"CustomNight_footer__2LgN5"}},function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAWACQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+f+iiigAooooAKKKKACiiigAooooAKKKKAP/Z"},,,function(e,t,a){e.exports=a.p+"static/media/jumpscare.mp3"},function(e,t,a){e.exports=a.p+stag},function(e,t,a){e.exports=a.p+"static/media/Static-Cam.gif"},,,function(e,t,a){e.exports=a.p+"static/media/MainAmbience.mp3"},function(e,t,a){e.exports=a.p+"static/media/Default.gif"},function(e,t,a){e.exports=a.p+"static/media/304.gif"},function(e,t,a){e.exports=a.p+"static/media/EHallCorner-f.gif"},,function(e,t,a){e.exports=a.p+"static/media/powerdown.mp3"},,function(e,t,a){e.exports=a.p+"static/media/put down.mp3"},function(e,t,a){e.exports=a.p+"static/media/blip3.mp3"},function(e,t,a){e.exports=a.p+"static/media/ss/gsr.mp3"},function(e,t,a){e.exports=a.p+"static/media/ss/gsl.mp3"},function(e,t,a){e.exports=a.p+"static/media/Door.mp3"},function(e,t,a){e.exports=a.p+"static/media/knock2.mp3"},function(e,t,a){e.exports=a.p+"static/media/windowscare.mp3"},function(e,t){e.exports="data:image/png;base64,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"},function(e,t,a){e.exports=a.p+"static/media/Up.gif"},function(e,t,a){e.exports=a.p+"static/media/Down.gif"},function(e,t,a){e.exports=a.p+"static/media/Complete_Map.png"},function(e,t,a){e.exports=a.p+"static/media/music box.mp3"},function(e,t,a){e.exports=a.p+"static/media/Freddy.gif"},function(e,t,a){e.exports=a.p+"static/media/Bonnie-Jumpscare.gif"},function(e,t,a){e.exports=a.p+"static/media/Chica-Jumpscare.gif"},function(e,t,a){e.exports=a.p+"static/media/Freddy-Jumpscare1.gif"},function(e,t,a){e.exports=a.p+"static/media/Freddy-Jumpscare.gif"},function(e,t,a){e.exports=a.p+"static/media/Foxy-Jumpscare.gif"},function(e,t,a){e.exports=a.p+"static/media/LD.gif"},function(e,t,a){e.exports=a.p+"static/media/RD.gif"},function(e,t,a){e.exports=a.p+"static/media/RD_LD.gif"},function(e,t,a){e.exports=a.p+"static/media/LD_RL.gif"},function(e,t,a){e.exports=a.p+"static/media/RD_LL.gif"},function(e,t,a){e.exports=a.p+"static/media/RD_LL_BONNIE.gif"},function(e,t,a){e.exports=a.p+"static/media/LD_RL_CHIC.gif"},function(e,t,a){e.exports=a.p+"static/media/RL.gif"},function(e,t,a){e.exports=a.p+"static/media/RL_LL_BONNIE.gif"},function(e,t,a){e.exports=a.p+"static/media/LL.gif"},function(e,t,a){e.exports=a.p+"static/media/LL_BONNIE.gif"},function(e,t,a){e.exports=a.p+"static/media/RL_LL.gif"},function(e,t,a){e.exports=a.p+"static/media/RL_CHICA.gif"},function(e,t,a){e.exports=a.p+"static/media/RL_LL_CHICA.gif"},function(e,t,a){e.exports=a.p+"static/media/RL_LL_BONNIE_CHICA.gif"},function(e,t,a){e.exports=a.p+stag},function(e,t,a){e.exports=a.p+stag},function(e,t,a){e.exports=a.p+stag},function(e,t,a){e.exports=a.p+stag},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+dinin},function(e,t,a){e.exports=a.p+"static/media/Backstage.gif"},function(e,t,a){e.exports=a.p+"static/media/Backstage-b.gif"},function(e,t,a){e.exports=a.p+"static/media/Pirate_Cove.gif"},function(e,t,a){e.exports=a.p+"static/media/Pirate_Cove-1.gif"},function(e,t,a){e.exports=a.p+"static/media/Pirate_Cove-2.gif"},function(e,t,a){e.exports=a.p+"static/media/Pirate_Cove-3.gif"},function(e,t,a){e.exports=a.p+spply},function(e,t,a){e.exports=a.p+spply},function(e,t,a){e.exports=a.p+"static/media/West_Hall.gif"},function(e,t,a){e.exports=a.p+"static/media/West_Hall-b.gif"},function(e,t,a){e.exports=a.p+"static/media/WHallCorner.gif"},function(e,t,a){e.exports=a.p+"static/media/WHallCorner-b.gif"},function(e,t,a){e.exports=a.p+rest1},function(e,t,a){e.exports=a.p+rest1},function(e,t,a){e.exports=a.p+rest1},function(e,t,a){e.exports=a.p+rest1},function(e,t,a){e.exports=a.p+"static/media/East_Hall.gif"},function(e,t,a){e.exports=a.p+"static/media/East_Hall-c.gif"},function(e,t,a){e.exports=a.p+"static/media/East_Hall-f.gif"},function(e,t,a){e.exports=a.p+"static/media/East_Hall-c-f.gif"},function(e,t,a){e.exports=a.p+"static/media/EHallCorner.gif"},function(e,t,a){e.exports=a.p+"static/media/EHallCorner-c.gif"},function(e,t,a){e.exports=a.p+"static/media/garble1.mp3"},function(e,t,a){e.exports=a.p+"static/media/garble2.mp3"},function(e,t,a){e.exports=a.p+"static/media/Dead.mp3"},function(e,t,a){e.exports=a.p+"static/media/Victory.gif"},function(e,t,a){e.exports=a.p+"static/media/Clock.mp3"},function(e,t,a){e.exports=a.p+"static/media/freddy.png"},function(e,t,a){e.exports=a.p+"static/media/bonnie.png"},function(e,t,a){e.exports=a.p+"static/media/chica.png"},function(e,t,a){e.exports=a.p+"static/media/foxy.png"},function(e,t,a){e.exports=a.p+"static/media/haul.ogg"},function(e,t,a){e.exports=a(110)},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/Foxy-Hallway.gif"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(4),r=a(0),i=a.n(r),c=a(9),o=a.n(c),s=a(2),u=a.n(s),l=a(5),f=a(20),d=a.n(f),p=a(3),m=u.a.mark(b),g=u.a.mark(y),h=u.a.mark(w),A=u.a.mark(E);function b(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(["Dinning Area","Backstage","Supply Closet","West Hall","W. Hall Corner","Door"],"t0",1);case 1:case"end":return e.stop()}}),m)}function y(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(["Dinning Area","Restrooms","Kitchen","East Hall","E. Hall Corner","Door"],"t0",1);case 1:case"end":return e.stop()}}),g)}function w(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(["Stage","Dinning Area","Restrooms","Kitchen","East Hall","E. Hall Corner","Door"],"t0",1);case 1:case"end":return e.stop()}}),h)}function E(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield(["_1","_2","_3"],"t0",1);case 1:case"end":return e.stop()}}),A)}var C={Freddy:w,Chica:y,Bonnie:b,Foxy:E,changeAnimatronic:function(e,t,a,n){t.next().value,a(n)},checkAnimatronicsPosition:function(e,t,a,n){var r="";return e==n&&(r+="-b"),t==n&&(r+="-c"),a==n&&(r+="-f"),r}},v=a(22),O=a.n(v),x=a(23),N=a.n(x),D=a(15),R=a.n(D),j=a(24),F=a.n(j),L=a(25),S=a.n(L),H=a(26),I=a.n(H),B=a(27),M=a.n(B),_=a(28),G=a.n(_),k=a(10),T=a.n(k),X=a(29),W=a.n(X),U=a(30),P=a.n(U),z=a(31),Y=a.n(z),Z=a(32),K=a.n(Z),V=a(11),Q=a.n(V),J={Sounds:{OpenCamera:new Audio(O.a),CameraChange:new Audio(N.a),Ambience:new Audio(R.a),FreddyLaugh1:new Audio(F.a),FreddyLaugh2:new Audio(S.a),Door:new Audio(I.a),FoxyPunch:new Audio(M.a),Surprise:new Audio(G.a),Jumpscare:new Audio(T.a)},Images:{CameraButton:W.a,Up:P.a,Down:Y.a,Map:K.a,Stage:Q.a,Ambience:R.a}},q=C.Freddy(),$=C.Bonnie(),ee=C.Chica(),te=C.Foxy();q.next();var ae=1e4,ne=5e3,re=7300,ie=13e3,ce={Freddy:1,Bonnie:1,Chica:2,Foxy:1},oe=!1,se=!1;var ue=Object(p.b)((function(e){return{leftDoor:e.officeReducer.leftDoor,rightDoor:e.officeReducer.rightDoor,animatronics:e.animatronicsReducer,config:e.configReducer}}))((function(e){var t=e.animatronics,a=e.config,n=e.handleJumpscare,c=e.isThisDoorOpen,o=e.dispatch,s=e.stages,f=a.hour,d=a.gameOver,p=a.blackout;Object(r.useEffect)((function(){return ce.Freddy=s.Freddy,ce.Bonnie=s.Bonnie,ce.Chica=s.Chica,ce.Foxy=s.Foxy,s.Bonnie&&h("Bonnie",$,ne),s.Chica&&h("Chica",ee,re),s.Foxy&&h("Foxy",te,ie),s.Freddy&&s.Chica&&s.Bonnie&&h("Freddy",q,ae),function(){q=C.Freddy(),$=C.Bonnie(),ee=C.Chica(),te=C.Foxy(),q.next(),ae=1e4,ne=5e3,re=7300,ie=13e3,ce.Freddy=s.Freddy,ce.Bonnie=s.Bonnie,ce.Chica=s.Chica,ce.Foxy=s.Foxy,oe=!1,se=!1}}),[]),Object(r.useEffect)((function(){2===f?(ae=9500,ne=4700,re=6800,ie=1e4,ce.Bonnie=ce.Bonnie+1,ce.Chica=ce.Chica+1):4===f?(ce.Bonnie=ce.Bonnie+2,ce.Chica=ce.Chica+2,ce.Freddy=ce.Freddy+1,ce.Foxy=ce.Foxy+1):5===f&&(ce.Bonnie=ce.Bonnie+2,ce.Chica=ce.Chica+2,ce.Freddy=ce.Freddy+2,ce.Foxy=ce.Foxy+2)}),[f]),Object(r.useEffect)((function(){d&&(se=d)}),[d]);var m=function(e){o({type:"CHANGE_ANIMATRONICS_MOVING",content:!0}),e(),setTimeout((function(){o({type:"CHANGE_ANIMATRONICS_MOVING",content:!1})}),1500)},g=function(e){m((function(){o({type:"CHANGE_ANIMATRONIC",animatronic:e,animatronicState:{door:!0,camera:"Freddy"===e?"Stage":"Foxy"===e?"":"Dinning Area",jumpscare:!1}}),"Bonnie"===e?h("Bonnie",$=C.Bonnie(),ne):"Chica"===e?h("Chica",ee=C.Chica(),re):"Foxy"===e?(te=C.Foxy(),dorlr(),h("Foxy",te,ie)):"Freddy"===e&&((q=C.Freddy()).next(),h("Freddy",q,ae))}))};function h(e,a,n){var r=setInterval((function(){var n,i="Bonnie"===e||"Chica"===e?22:30;Math.floor(Math.random()*i)<ce[e]&&!t[e].door&&(m((function(){n=a.next().value,o({type:"CHANGE_ANIMATRONIC",animatronic:e,animatronicState:{door:"Door"===n||"_3"===n,jumpscare:!1,camera:n}})})),"Freddy"===e&&(oe||(0==Math.floor(2*Math.random())?gsl.play():gsr.play(),fstt()))),(oe||se)&&clearInterval(r),"Door"!==n&&"_3"!==n||(oe||function(e){A.apply(this,arguments)}(e),clearInterval(r))}),n)}function A(){return(A=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a="Bonnie"===t||"Foxy"===t?"leftDoor":"rightDoor",setTimeout(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a);case 2:e.sent?g(t):setTimeout(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a);case 2:e.sent?g(t):setTimeout(Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(a);case 2:e.sent?g(t):n(t);case 4:case"end":return e.stop()}}),e)}))),3e3);case 4:case"end":return e.stop()}}),e)}))),5e3);case 4:case"end":return e.stop()}}),e)}))),1e4);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){p&&(oe=!0)}),[p]),i.a.createElement(i.a.Fragment,null)})),le=a(16),fe=a.n(le),de=a(17),pe=a.n(de),me=a(33),ge=a.n(me),he=a(34),Ae=a.n(he),be=a(35),ye=a.n(be),we=a(36),Ee=a.n(we),Ce=a(37),ve=a.n(Ce),Oe=a(38),xe=a.n(Oe),Ne=a(39),De=a.n(Ne),Re=a(40),je=a.n(Re),Fe=a(41),Le=a.n(Fe),Se=a(42),He=a.n(Se),Ie=a(43),Be=a.n(Ie),Me=a(44),_e=a.n(Me),Ge=a(45),ke=a.n(Ge),Te=a(46),Xe=a.n(Te),We=a(47),Ue=a.n(We),Pe=a(48),ze=a.n(Pe),Ye=a(49),Ze=a.n(Ye),Ke=a(50),Ve=a.n(Ke),Qe=a(51),Je=a.n(Qe),qe=a(52),$e=a.n(qe),et=a(53),tt=a.n(et),at=a(54),nt=a.n(at),rt=!0,it={LD:je.a,RD:Le.a,RD_LD:He.a,LD_RL:Be.a,RD_LL:_e.a,RD_LL_BONNIE:ke.a,LD_RL_CHICA:Xe.a,RL:Ue.a,RL_LL_BONNIE:ze.a,LL:Ze.a,LL_BONNIE:Ve.a,RL_CHICA:$e.a,RL_LL:Je.a,RL_LL_CHICA:tt.a,RL_LL_BONNIE_CHICA:nt.a},ct=new Audio(ge.a),ot=new Audio(T.a);ct.loop="true";var st=Object(p.b)((function(e){return{officeConfig:e.officeReducer,animatronics:e.animatronicsReducer,isCameraOpen:e.cameraReducer.isCameraOpen,jumpscare:e.configReducer.jumpscare}}))((function(e){var t=e.blackout,a=e.animatronics,c=e.officeConfig,o=e.jumpscare,s=e.isCameraOpen,f=e.endGame,d=e.dispatch,p=Object(r.useState)(null),m=Object(n.a)(p,2),g=m[0],h=m[1],A=Object(r.useState)(fe.a),b=Object(n.a)(A,2),y=b[0],w=b[1],E=Object(r.useState)(pe.a),C=Object(n.a)(E,2),v=C[0],O=C[1];function x(){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(u.a.mark((function e(){var t,n,r,i,o,s,l,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=function(){var e=[];return n&&e.push("RD"),t&&e.push("LD"),i&&!n&&e.push("RL"),r&&!t&&e.push("LL"),o.door&&r&&e.push("BONNIE"),s.door&&i&&e.push("CHICA"),e},t=c.leftDoor,n=c.rightDoor,r=c.leftLight,i=c.rightLight,o=a.Bonnie,s=a.Chica,e.next=5,l();case 5:0===(f=e.sent).length?w(fe.a):w(it[f.join("_")]);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){x()}),[c.leftDoor,c.leftLight,c.rightDoor,c.rightLight]),Object(r.useEffect)((function(){s||(x(),o&&(d({type:"CHANGE_CAMERA_BUTTON"}),h(o),ot.play(),vipr(),setTimeout((function(){f(!1)}),5e3)))}),[s]),Object(r.useEffect)((function(){

a.Foxy.jumpscare&&(d({type:"CHANGE_CAMERA_BUTTON"}),h("Foxy"),ot.play(),vipr(),setTimeout((function(){f(!1)}),5e3))}),[a.Foxy.jumpscare]),Object(r.useEffect)((function(){a.Freddy.jumpscare&&(d({type:"CHANGE_CAMERA_BUTTON"}),h("Freddy"),ot.play(),vipr(),setTimeout((function(){f(!1)}),5e3))}),[a.Freddy.jumpscare]);var D=function(e){var t=c.leftDoor,n=c.rightDoor,r=a.Bonnie,i=a.Chica,o="leftLight"===e&&!t&&r.door,s="rightLight"===e&&!n&&i.door;(o||s)&&J.Sounds.Surprise.play()};Object(r.useEffect)((function(){t&&R()}),[t]),Object(r.useEffect)((function(){return rt=!0,function(){rt=!1,ct.pause()}}),[]);var R=function(){var e=setInterval((function(){var t=Math.floor(9*Math.random());if(rt||clearInterval(e),t<3&&rt){ct.currentTime=0,ct.play(),O(Ae.a),clearInterval(e);


var a=setInterval((function(){var e=Math.floor(3*Math.random());if(rt||clearInterval(a),0==e&&rt){O(null),ct.pause(),clearInterval(a);var t=setInterval((function(){var e=Math.floor(9*Math.random());if(rt||clearInterval(t),0==e&&rt){var a=ve.a;O(a),ot.play(),vipr(),d({type:"CHANGE_JUMPSCARE",animatronic:!0}),clearInterval(t),setTimeout((function(){f(!1),O(pe.a)}),5e3)}}),3e3)}}),5e3)}}),3e3)};return"Bonnie"!==g||s?"Foxy"===g?i.a.createElement("div",{className:"office-container"},i.a.createElement("img",{alt:"Office",draggable:"false",style:{width:"100vw"},src:De.a,className:"office-img",useMap:"#office"})):"Freddy"===g?i.a.createElement("div",{className:"office-container"},i.a.createElement("img",{alt:"Office",draggable:"false",style:{width:"100vw"},src:xe.a,className:"office-img",useMap:"#office"})):"Chica"!==g||s?i.a.createElement(i.a.Fragment,null,t?i.a.createElement("div",{className:"office-container"},i.a.createElement("img",{alt:"Office",draggable:"false",style:{width:"100vw"},src:v,className:"office-img"})):i.a.createElement("div",{className:"office-container"},i.a.createElement("div",{style:{width:"fit-content"}},i.a.createElement("img",{alt:"Office",draggable:"false",style:{width:"100vw"},src:y,className:"office-img",useMap:"#office"}),i.a.createElement("a",{href:"",title:"leftDoor",style:{
background: "darkred",
display:"block",
position:"absolute",left:"1.63%",top:"55.53%",width:"6.13%",height:"10.56%",zIndex:2},onClick:function(e){e.preventDefault(),d({type:"CHANGE_OFFICE_CONFIG",obj:"leftDoor"}),x(), dorl.play()}}),i.a.createElement("a",{href:"",title:"leftLight",style:{

background: "yellow",
display:"block",
position:"absolute",left:"1.75%",top:"65.06%",width:"6.13%",height:"10.56%",zIndex:2},onClick:function(e){e.preventDefault(),d({type:"CHANGE_OFFICE_CONFIG",obj:"leftLight"}),x(),lsl.play(),D("leftLight")}}),i.a.createElement("a",{href:"",id:"dl1",title:"rightDoor",style:{

background: "darkred",
display:"block",
position:"absolute",left:"94.25%",top:"55.94%",width:"6.13%",height:"10.56%",zIndex:2},onClick:function(e){e.preventDefault(),d({type:"CHANGE_OFFICE_CONFIG",obj:"rightDoor"}),x(),dorr.play()}}),i.a.createElement("a",{href:"",title:"rightLight",style:{
background: "yellow",
display:"block",
position:"absolute",left:"94.44%",top:"65.47%",width:"6.13%",height:"10.56%",zIndex:2},onClick:function(e){e.preventDefault(),d({type:"CHANGE_OFFICE_CONFIG",obj:"rightLight"}),x(),lsr.play(),D("rightLight")}})))):i.a.createElement("div",{className:"office-container"},i.a.createElement("img",{alt:"Office",draggable:"false",style:{width:"100vw"},src:Ee.a,className:"office-img",useMap:"#office"})):i.a.createElement("div",{className:"office-container"},i.a.createElement("img",{alt:"Office",draggable:"false",style:{width:"100vw"},src:ye.a,className:"office-img",useMap:"#office"}))})),ut=a(55),lt=a.n(ut),ft=a(56),dt=a.n(ft),pt=a(57),mt=a.n(pt),gt=a(58),ht=a.n(gt),At=a(59),bt=a.n(At),yt=a(60),wt=a.n(yt),Et=a(61),Ct=a.n(Et),vt=a(62),Ot=a.n(vt),xt=a(63),Nt=a.n(xt),Dt=a(64),Rt=a.n(Dt),jt=a(65),Ft=a.n(jt),Lt=a(66),St=a.n(Lt),Ht=a(67),It=a.n(Ht),Bt=a(68),Mt=a.n(Bt),_t=a(69),Gt=a.n(_t),kt=a(70),Tt=a.n(kt),Xt=a(71),Wt=a.n(Xt),Ut=a(72),Pt=a.n(Ut),zt=a(73),Yt=a.n(zt),Zt=a(74),Kt=a.n(Zt),Vt=a(75),Qt=a.n(Vt),Jt=a(76),qt=a.n(Jt),$t=(a(108),a(77)),ea=a.n($t),ta=a(78),aa=a.n(ta),na=a(79),ra=a.n(na),ia=a(80),ca=a.n(ia),oa=a(81),sa=a.n(oa),ua=a(82),la=a.n(ua),fa=a(83),da=a.n(fa),pa=a(84),ma=a.n(pa),ga=a(85),ha=a.n(ga),Aa=a(86),ba=a.n(Aa),ya=a(87),wa=a.n(ya),Ea=a(88),Ca=a.n(Ea),va=a(18),Oa=a.n(va),xa=a(7),Na=a.n(xa),Da={Stage:lt.a,Stage_b_c_f:Q.a,Stage_b_f:dt.a,Stage_c_f:mt.a,Stage_f:ht.a,DinningArea:bt.a,DinningArea_b_c_f:St.a,DinningArea_c_f:Rt.a,DinningArea_b_f:Ft.a,DinningArea_b_c:Nt.a,DinningArea_b:wt.a,DinningArea_c:Ct.a,DinningArea_f:Ot.a,Backstage:It.a,Backstage_b:Mt.a,SupplyCloset:Yt.a,SupplyCloset_b:Kt.a,WestHall:Qt.a,WestHall_b:qt.a,WHallCorner:ea.a,WHallCorner_b:aa.a,Restrooms:ra.a,Restrooms_c:ca.a,Restrooms_c_f:la.a,Restrooms_f:sa.a,EastHall:da.a,EastHall_c:ma.a,EastHall_c_f:ba.a,EastHall_f:ha.a,EHallCorner:wa.a,EHallCorner_c:Ca.a,EHallCorner_f:Oa.a,EHallCorner_c_f:Oa.a,PirateCove:Gt.a,PirateCove_1:Tt.a,PirateCove_2:Wt.a,PirateCove_3:Pt.a,Kitchen:ea.a,Kitchen_c:ea.a,Kitchen_f:ea.a,Kitchen_c_f:ea.a};var Ra=a(89),ja=a.n(Ra),Fa=a(90),La=a.n(Fa),Sa=a(12),Ha=a.n(Sa);var Ia=function(e){var t=e.handleCameraChange;return i.a.createElement("div",{className:"map",id:"mp11",style:{position:"absolute",zIndex:10}},i.a.createElement("img",{alt:"Mapa da c\xe2mera",draggable:"false",src:J.Images.Map,style:{zIndex:"1",width:"100%",display:""},useMap:"#map"}),i.a.createElement("a",{href:"",onClick:t,title:"Stage",style:{position:"absolute",left:"27.25%",top:"5%",width:"13.25%",height:"9.25%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"Restrooms",style:{position:"absolute",left:"79.75%",top:"24.25%",width:"12.75%",height:"8.25%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"Dinning Area",style:{position:"absolute",left:"24%",top:"20.5%",width:"12.25%",height:"8.25%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"Backstage",style:{position:"absolute",left:"0%",top:"27%",width:"13.5%",height:"9%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"Pirate Cove",style:{position:"absolute",left:"12%",top:"39.5%",width:"12.75%",height:"9%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"Supply Closet",style:{position:"absolute",left:"8.25%",top:"62.5%",width:" 12%",height:"8.25%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"West Hall",style:{position:"absolute",left:"26.5%",top:" 70.5%",width:"12.5%",height:"9.25%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"East Hall",style:{position:"absolute",left:"49%",top:"70%",width:"14.5%",height:"9.5%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"W. Hall Corner",style:{position:"absolute",left:"26%",top:"81.75%",width:"14%",height:"8.25%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"E. Hall Corner",style:{position:"absolute",left:" 49.25%",top:"81.25%",width:"14.25%",height:"10%",zIndex:2}}),i.a.createElement("a",{href:"",onClick:t,title:"Kitchen",style:{position:"absolute",left:"79.5%",top:"57.75%",width:"14.25%",height:"9.25%",zIndex:2}}))};var Ba=function(e){var t=e.handleCameraButton,a=function(e){var a=e.target;"true"==a.dataset.disabled&&(a.dataset.disabled="false",J.Sounds.OpenCamera.play(),t(),setTimeout((function(){a.dataset.disabled="true"}),700))};return i.a.createElement("div",null,i.a.createElement("img",{draggable:"false",className:"camera-button",alt:"Bot\xe3o da camera","data-disabled":"true",src:J.Images.CameraButton,id:"cb11",style:{position:"absolute",zIndex:1, width:"40%"},onMouseOver:a,onTouchStart:a}))};var Ma=Object(p.b)((function(e){return{animatronics:e.animatronicsReducer,camera:e.cameraReducer.camera,office:e.officeReducer,isCameraOpen:e.cameraReducer.isCameraOpen,areAnimatronicsMoving:e.cameraReducer.areAnimatronicsMoving,jumpscare:e.configReducer.jumpscare,cameraButtonDisappear:e.configReducer.cameraButtonDisappear}}))((function(e){var t=e.animatronics,a=e.areAnimatronicsMoving,c=e.isCameraOpen,o=e.office,s=e.camera,u=e.cameraButtonDisappear,l=e.dispatch,f=Object(r.useState)(J.Images.Stage),d=Object(n.a)(f,2),p=d[0],m=d[1],g=Object(r.useRef)(null),h=Object(r.useRef)(null);return Object(r.useEffect)((function(){h.current&&(c?setTimeout((function(){h.current.style.display="flex"}),350):setTimeout((function(){h.current.style.display="none"}),100))}),[c]),Object(r.useEffect)((function(){var e=t.Bonnie,a=t.Chica,n=t.Freddy,r=t.Foxy,i="";e.camera===s&&(i+="_b"),a.camera===s&&(i+="_c"),n.camera===s&&(i+="_f");var c=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";
var xxx = t.replace('"','').replace('"','');
var xxxx ="good u";
//console.log(xxx);
n=xxx.trim().replace(" ","").replace(' ','');;
console.log(n);
if("W.HallCorner"===n){
//alert("hc")

cry2.pause();
cryr.pause();
cryl.pause();
chk2 = JSON.parse(localStorage.getItem("saveg"));

sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));


} else if ("E.HallCorner"===n)
{
//alert("ehc")
cry2.pause();
cryr.pause();
cryl.pause();
} else if ("Restrooms"===n)
{
//alert("rr")
cry2.pause();
cryr.pause();
cryl.pause();
chk2 = JSON.parse(localStorage.getItem("saveg"));

sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));

if
(deadc==null&&hhour>2&&powr>3&&chk2<=111&& deadp==null&&timmrc==null){
setTimeout(function(){
   
if(cry2.paused) {

      cryr.play();
cry2.pause();

   } else {
     
cry2.pause();
cryr.pause();
cryl.pause();
   }

  },1000)

}

if (timmrc==null&&deadc==null&&hhour>2){
document.getElementById("mp11").style.display = "none";
document.getElementById("cb11").style.display = "none";
setTimeout(function(){



    location=("../colormix/cs1/index.html");
 //saveg=111;

sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
  },7000)
} else if (deadp==null){


}
} else if ("Kitchen"===n)
{
//alert("kit")
cry2.pause();
cryr.pause();
cryl.pause();
} else if ("EastHall"===n)
{
//alert("eh")
cry2.pause();
cryr.pause();
cryl.pause();
} else if ("DinningArea"===n)
{
//alert("da")
cry2.pause();
cryr.pause();
cryl.pause();
chk2 = JSON.parse(localStorage.getItem("saveg"));

sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));


if (deadp==null&&hhour>2&&powr>3&&chk2<222){
setTimeout(function(){
   
if(cry2.paused) {

      cryl.play();
cry2.pause();

   } else {
     
cry2.pause();
cryr.pause();
cryl.pause();
   }

  },1000)

}

if (chk2==111&&timmrc!=null&&deadp==null&&hhour>2){
document.getElementById("mp11").style.display = "none";
document.getElementById("cb11").style.display = "none";
setTimeout(function(){
    location=("../piano/cs2/index.html");
 //saveg=222;

sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
  },7000)
} else if (deadc=="yes"&&deadp==null&&hhour>2&&chk2<111){
document.getElementById("mp11").style.display = "none";
document.getElementById("cb11").style.display = "none";
setTimeout(function(){



    location=("../piano/cs2/index.html");
 //saveg=111;

sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
  },7000)
} 
} else if ("Stage"===n)
{

sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));

if(!cry2.paused||!cry.paused) {
cry.currentTime = 0;
   cry2.currentTime = 0;   

cry.currentTime = 0;
   cry2.currentTime = 0;
   } else {
     

cry.currentTime = 0;
   cry2.currentTime = 0;
   }

chk2 = JSON.parse(localStorage.getItem("saveg"));

sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));
 const welchk= setInterval(function(){


        
setTimeout(function(){
 welcome=JSON.parse(localStorage.getItem("welcome"));  
if (chk2<111&&deadc==null&&hhour==3&& welcome==0){
setTimeout(function(){
   
welcomes.play();
dinin="static/media/DinningArea.gif";
  rest1="static/media/Restrooms.gif";

 spply="static/media/SupplyRoom.gif";


  },1000)

welcome=1;
sessionStorage.setItem("welcome", JSON.stringify(welcome));
localStorage.setItem("welcome", JSON.stringify(welcome));

} else if (chk2<111&&deadc==null&&hhour<3&&welcome==3){
let rest1="static/media/Restrooms2.gif";
let dinin="static/media/DinningArea2.gif";
let stag="static/media/Stage.gif";
let spply="static/media/SupplyRoom2.gif";

sessionStorage.setItem("welcome", JSON.stringify(welcome));
localStorage.setItem("welcome", JSON.stringify(welcome));
}
 },1000)

 if (chk2<111&&deadc==null&&hhour==3&& welcome==3){
setTimeout(function(){
   welcome=0;
sessionStorage.setItem("welcome", JSON.stringify(welcome));
localStorage.setItem("welcome", JSON.stringify(welcome));
window.location.reload()

  },1000)

}

 

//clearInterval(welchk);
  },3000)




var hasPlayed3 =false;

if (deadr=="yes"||timmrr!=null&&deadj==null&& deaths!=null&&timmrj==null){
document.getElementById("cb11").style.display = "none";

if(!hasPlayed3){


new Audio("end2.mp3").play();
}
setTimeout(function(){
    location=("../jigsaw/cs4/index.html");

  },5500)
} else if (chk2==333&&deadj==null&&deaths==null&& timmrj==null){
//gload();
document.getElementById("cb11").style.display = "none";
if(!hasPlayed3){
new Audio("end1.mp3").play();
}

setTimeout(function(){
    location=("../jigsaw/cs4/index.html");

  },5500)
} else if (chk2==444&&deadj==null&&timmrj!=null){
new Audio("../saw.mp3").play();
new Audio("../good.mp3").play();
gamend=true;
sessionStorage.setItem("gamend", JSON.stringify(gamend));
localStorage.setItem("gamend", JSON.stringify(gamend));

setTimeout(function(){
    sessionStorage.removeItem("powr");
localStorage.removeItem("powr");
sessionStorage.removeItem("hhour");
localStorage.removeItem("hhour");
sessionStorage.removeItem("saveg");
localStorage.removeItem("saveg");

  },4400)
} 



//alert("st")
cry2.pause();
cryr.pause();
cryl.pause();


} else if ("SupplyCloset"===n)
{
//alert("sc")


chk2 = JSON.parse(localStorage.getItem("saveg"));

sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));

if (deadr==null&&hhour>2&&powr>3&&chk2<333&&timmrr==null){
setTimeout(function(){
   
if(cryl.paused&&cryr.paused) {

      cry2.play();
cry.pause();

   } else {
     
cry2.pause();
cryr.pause();
cryl.pause();
   }

  },1000)

}
if (chk2==222&&deadr==null){
document.getElementById("mp11").style.display = "none";
setTimeout(function(){
    location=("../rubik/cs3/index.html");
//saveg=333;

sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
  },3000)
} else if (deaths!=null&&deadr==null&& timmrr==null){
document.getElementById("mp11").style.display = "none";
setTimeout(function(){
    location=("../rubik/cs3/index.html");
//saveg=333;

sessionStorage.setItem("saveg", JSON.stringify(saveg));
localStorage.setItem("saveg", JSON.stringify(saveg));
  },3000)
} 

}else if ("Backstage"===n)
{
//alert("bb")
cry2.pause();
cryr.pause();
cryl.pause();
} else if ("WestHall"===n)
{
//alert("wh")

cry2.pause();
cryr.pause();
cryl.pause();

} else if ("EastHallt"===n)
{
//alert("eh")
cry2.pause();
cryr.pause();
cryl.pause();
}else if ("PirateCove"===n)
{
//alert("pc")
cry2.pause();
cryr.pause();
cryl.pause();
} else if ("WestHall"===n)
{
//alert("wh")
cry2.pause();
cryr.pause();
cryl.pause();
} else if ("EastHall"===n)
{}
return"W.HallCorner"===n&&(n="WHallCorner"),"E.HallCorner"===n&&(n="EHallCorner"),Da["".concat(n).concat(e).concat("PirateCove"===n?a:"")]}(i,s,r.camera);m(c)}),[s,t,a,t.Foxy.camera]),Object(r.useEffect)((function(){if(a&&c){var e=Math.floor(2*Math.random());(1==e||2==e?new Audio(ja.a):new Audio(La.a)).play()}}),[a]),i.a.createElement("div",null,u?null:i.a.createElement(Ba,{handleCameraButton:function(){l({type:"SET_IS_OPEN"})},style:{zIndex:"1"}}),c?i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{draggable:"false",className:"camera opening animation","data-left-door":o.leftDoor,"data-right-door":o.rightDoor,id:"camera",src:J.Images.Up,alt:"Opening camera",style:{margin:0,width:"100vw",height:"100vh",position:"absolute",top:0}}),i.a.createElement("div",{className:"camera-container",style:{display:"none"},ref:h},i.a.createElement(Ia,{handleCameraChange:function(e){e.preventDefault(),J.Sounds.CameraChange.play(),l({type:"CHANGE_CAMERA",content:e.target.title})}}),a?i.a.createElement("img",{draggable:"false",src:Na.a,alt:"Animatronics are moving",className:"animatronics-true",style:{height:"100vh",width:"100vw",backgroundColor:"black",position:"absolute"}}):i.a.createElement("img",{src:p,alt:"Camera",className:"camera-img",style:{width:"100vw",position:"absolute"}}),i.a.createElement("img",{alt:"Static",src:"static/media/st.gif",style:{opacity:"0.4",width:"100%",height:"100%"},draggable:"false",className:"static-open"}))):i.a.createElement("img",{draggable:"false",className:"camera opening",id:"camera",ref:g,src:J.Images.Down,alt:"Closing camera",style:{width:"100vw",height:"100vh",position:"absolute"}}))}));var _a=Object(p.b)((function(e){return{hour:e.configReducer.hour,energy:e.configReducer.energy}}))((function(e){ 

engy=e.energy;

if(engy<2){
cry2.pause();
cryr.pause();
cryl.pause();

}
powr = engy;
sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));


var t=e.hour,a=e.energy;return i.a.createElement("div",{style:{zIndex:10}},i.a.createElement("h1",{className:"hour"},0===t?"12صباحا":"".concat(t,"صباحا")),i.a.createElement("h2",{className:"energy"},a,"%"))})),Ga=!1,ka=J.Sounds.Ambience;ka.loop=!0;var Ta={leftDoor:!0,rightDoor:!0},Xa=Object(p.b)((function(e){return{animatronics:e.animatronicsReducer,time:e.configReducer.time,hour:e.configReducer.hour,energy:e.configReducer.energy,office:e.officeReducer,camera:e.cameraReducer.camera,isCameraOpen:e.cameraReducer.isCameraOpen}}))((function(e){
engy=e.energy;
hhour=e.hour;
sessionStorage.setItem("hhour", JSON.stringify(hhour));
localStorage.setItem("hhour", JSON.stringify(hhour));


if(engy<2){
cry2.pause();
cryr.pause();
cryl.pause();

}
if(engy<1){
engy=100;

powr = engy;
sessionStorage.setItem("powr", JSON.stringify(powr));
localStorage.setItem("powr", JSON.stringify(powr));

setTimeout(function(){
   gover();
//window.location.reload()
  },3000)

} 
var t=e.office,a=e.isCameraOpen,n=e.energy,c=e.gameOver,o=e.stages,s=e.endGame,f=e.dispatch;Object(r.useEffect)((function(){ka.currentTime=0,ka.play(),Ga=!1,Ta={leftDoor:!0,rightDoor:!0}}),[]),Object(r.useEffect)((function(){c&&ka.pause()}),[c]),Object(r.useEffect)((function(){n<=0&&(Ga=!0,ka.pause())}),[n]),Object(r.useEffect)((function(){var e=tpowr;t.leftDoor&&(e-=3000),t.rightDoor&&(e-=3000),t.leftLight&&(e-=1400),t.rightLight&&(e-=1400),a&&(e-=1500),f({type:"CHANGE_TIME",content:e}),Ta={leftDoor:t.leftDoor,rightDoor:t.rightDoor}}),[t.leftDoor,t.rightDoor,t.leftLight,t.rightLight,a]);var d=function(e){Ga||c||(f({type:"CHANGE_ANIMATRONIC",animatronic:e,animatronicState:{door:null,camera:null,jumpscare:!0}})
,f({type:"CHANGE_JUMPSCARE",animatronic:e}),"Foxy"!==e&&"Freddy"!==e||f({type:"FORCE_CAMERA_CLOSE"}),setTimeout((function(){a||f({type:"FORCE_CAMERA_CLOSE"})}),1e4))};function p(){return(p=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ta[t];case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.a.createElement(i.a.Fragment,null,i.a.createElement(ue,{stages:o,handleJumpscare:d,gameOver:c,isThisDoorOpen:function(e){return p.apply(this,arguments)},blackout:n<=0}),c?null:i.a.createElement(i.a.Fragment,null,n<=0?null:i.a.createElement(_a,null),i.a.createElement(Ma,{handleJumpscare:d}),a?null:i.a.createElement(st,{endGame:s,blackout:n<=0})))})),Wa=a(91),Ua=a.n(Wa),Pa=a(92),za=a.n(Pa),Ya=a(93),Za=a.n(Ya),Ka=new Audio(Ua.a);var Va=Object(p.b)((function(e){return{time:e.configReducer.time,hour:e.configReducer.hour,isPlaying:e.configReducer.isPlaying,jumpscare:e.configReducer.jumpscare,energy:e.configReducer.energy,animatronics:e.animatronicsReducer}}))((function(e){
engy=e.energy;
hhour=e.hour;
sessionStorage.setItem("hhour", JSON.stringify(hhour));
localStorage.setItem("hhour", JSON.stringify(hhour));

if(engy<2){
cry2.pause();
cryr.pause();
cryl.pause();
}
var t=e.isPlaying,a=e.hour,c=e.time,o=e.energy,s=e.jumpscare,f=e.setStart,p=e.dispatch,m=e.stages,g=Object(r.useState)(!1),h=Object(n.a)(g,2),A=h[0],b=h[1],y=Object(r.useState)(!1),w=Object(n.a)(y,2),E=w[0],C=w[1];function v(){return(v=Object(l.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&!s&&!A&&a<6&&p({type:"CHANGE_HOUR"});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(e){return x.apply(this,arguments)}function x(){return(x=Object(l.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t&&!A&&a>0&&setTimeout((function(){p({type:"CHANGE_ENERGY"})}),c);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){return p({type:"CLEAR_DATA"}),O(),function(){p({type:"CLEAR_DATA"}),Ka.pause()}}),[]),Object(r.useEffect)((function(){setTimeout((function(){5!==a||A?function(e){v.apply(this,arguments)}(a):D(!0)}),149e3)}),[a]),Object(r.useEffect)((function(){o<=0?N():O(o)}),[o]);var N=function(){new Audio(d.a).play(),p({type:"FORCE_CAMERA_CLOSE"}),p({type:"CHANGE_CAMERA_BUTTON"})},D=function(e){if(e){C(!0),new Audio(Za.a).play();var t=JSON.parse(localStorage.getItem("victories"))||{};"CUSTOM"!==m.mode&&(t[m.mode]="\u2605"),localStorage.setItem("victories",JSON.stringify(t))}else b(!0),Ka.currentTime=0,Ka.play();goverr();p({type:"SET_GAME_OVER"}),setTimeout((function(){f(!1)}),1e4)};return i.a.createElement(i.a.Fragment,null,A?i.a.createElement("img",{alt:"static",src:Ha.a,style:{width:"100vw",height:"100vh"}}):null,E?i.a.createElement("div",{style:{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}},i.a.createElement("img",{alt:"victory",src:za.a})):null,i.a.createElement(Xa,{stages:m,gameOver:A||E,endGame:D}))})),Qa=(a(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Ja(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}
if(eng<3&&welcome!=null){
eng =100;
gover();

window.location.reload();
} else {
if(rpowr!=null&&eng==rpowr&& welcome!=null){
 eng=rpowr-1;
    
//alert("power")

} else {
eng =100;
}}
var qa=a(13),$a=a(1),en={camera:"Stage",isCameraOpen:!1,areAnimatronicsMoving:!1};var tn={hour:
hhour,isPlaying:!0,energy:eng,time:5000,blackout:!1,jumpscare:!1,gameOver:!1,cameraButtonDisappear:!1};var an={leftDoor:!0,rightDoor:!0,leftLight:!1,rightLight:!1};var nn={Freddy:{camera:"Stage",door:!1,jumpscare:!1},Bonnie:{camera:"Stage",door:!1,jumpscare:!1},Chica:{camera:"Stage",door:!1,jumpscare:!1},Foxy:{camera:"",door:!1,jumpscare:!1}};var rn=Object(qa.a)({cameraReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:en,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_CAMERA":return Object($a.a)(Object($a.a)({},e),{},{camera:t.content});case"SET_IS_OPEN":return Object($a.a)(Object($a.a)({},e),{},{isCameraOpen:!e.isCameraOpen});case"FORCE_CAMERA_CLOSE":return Object($a.a)(Object($a.a)({},e),{},{isCameraOpen:!1});case"CHANGE_ANIMATRONICS_MOVING":return Object($a.a)(Object($a.a)({},e),{},{areAnimatronicsMoving:t.content});default:return e}},configReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_HOUR":return e.jumpscare||e.gameOver?e:Object($a.a)(Object($a.a)({},e),{},{hour:e.hour+1});case"CHANGE_ENERGY":return 6===e.hour?e:Object($a.a)(Object($a.a)({},e),{},{energy:e.energy-1});case"CHANGE_TIME":return Object($a.a)(Object($a.a)({},e),{},{time:t.content});case"CHANGE_BLACKOUT":return Object($a.a)(Object($a.a)({},e),{},{blackout:!0});case"CHANGE_IS_PLAYING":return Object($a.a)(Object($a.a)({},e),{},{isPlaying:t.content});case"CHANGE_JUMPSCARE":return Object($a.a)(Object($a.a)({},e),{},{jumpscare:t.animatronic});case"CHANGE_CAMERA_BUTTON":return Object($a.a)(Object($a.a)({},e),{},{cameraButtonDisappear:!0});case"SET_GAME_OVER":return Object($a.a)(Object($a.a)({},e),{},{gameOver:!0});default:return e}},officeReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_OFFICE_CONFIG":return"leftLight"===t.obj&&e.leftDoor||"rightLight"===t.obj&&e.rightDoor?e:"leftDoor"===t.obj&&!e.leftDoor&&e.leftLight?Object($a.a)(Object($a.a)({},e),{},{leftLight:!1,leftDoor:!0}):"rightDoor"===t.obj&&!e.rightDoor&&e.rightLight?Object($a.a)(Object($a.a)({},e),{},{rightLight:!1,rightDoor:!0}):(e[t.obj]=!e[t.obj],e);case"CLEAR_DATA":return Object($a.a)({},an);default:return e}},animatronicsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:nn,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ANIMATRONIC":var a=e[t.animatronic];return a=Object($a.a)({},t.animatronicState),e[t.animatronic]=a,e;case"SET_FOXY_NULL":return Object($a.a)(Object($a.a)({},e),{},{Foxy:Object($a.a)(Object($a.a)({},e.Foxy),{},{camera:null})});case"CLEAR_DATA":return Object($a.a)({},nn);default:return e}}});var cn=Object(qa.b)((function(e,t){return"CLEAR_DATA"===t.type&&(e=void 0),rn(e,t)})),on=a(8),sn=a(6),un=a.n(sn),ln=a(94),fn=a.n(ln),dn=a(95),pn=a.n(dn),mn=a(96),gn=a.n(mn),hn=a(97),An=a.n(hn),bn=a(98),yn=a.n(bn),wn={Freddy:fn.a,Bonnie:pn.a,Chica:gn.a,Foxy:An.a},En=function(e){var t=e.range,a=e.changeRange,n=e.character;return i.a.createElement("div",{className:un.a.animatronic},i.a.createElement("img",Object(on.a)({alt:"Five Nights At Freddy's",src:wn[n],title:n},"alt",n)),i.a.createElement("div",{className:un.a.range_buttons},i.a.createElement("button",{onClick:function(){a(-1,n)},disabled:0===t}," ","<"," "),i.a.createElement("span",null," ",t," "),i.a.createElement("button",{onClick:function(){a(1,n)},disabled:20===t}," ",">"," ")))},Cn=function(e){var t=e.state,a=e.setStart,r=i.a.useState(!1),c=Object(n.a)(r,2),o=c[0],s=c[1],u=function(e){var a={};switch(e){case"EASY":a={Bonnie:2,Freddy:2,Chica:2,Foxy:2};break;case"NORMAL":a={Bonnie:10,Freddy:10,Chica:10,Foxy:10};break;case"HARD":a={Bonnie:15,Freddy:15,Chica:15,Foxy:15};break;case"IMPOSSIBLE":a={Bonnie:20,Freddy:20,Chica:20,Foxy:20};break;default:return}t.setStages((function(t){return Object($a.a)(Object($a.a)({},a),{},{mode:e})}))},l=function(e,a){t.setStages((function(t){return Object($a.a)(Object($a.a)({},t),{},Object(on.a)({mode:"CUSTOM"},a,function(e,t){return 0===e&&t<0||20===e&&t>0?e:e+t}(t[a],e)))}))},f=function(e){return(JSON.parse(localStorage.getItem("victories"))||{})[e]||" "};return o?i.a.createElement(vn,{setGoldenFreddy:s}):i.a.createElement("div",{className:un.a.custom_night_container},i.a.createElement("a",{href:"https://www.youtube.com/@xodmods5082",target:"_blank",className:un.a.github_icon},i.a.createElement("img",{src:"xod.png",width:"140",height:"80"})),i.a.createElement("h1",{className:"vg",style:{

display:"block",
position:"relative",left:"0%",justifyContent:"center",alignItems:"center",zIndex:2}},null,"puzzle man | رجل الاحجية"),i.a.createElement("div",{className:un.a.animatronics_container},i.a.createElement(En,{character:"Bonnie",range:t.ranges.Bonnie,changeRange:l}),i.a.createElement(En,{character:"Chica",range:t.ranges.Chica,changeRange:l}),i.a.createElement(En,{character:"Foxy",range:t.ranges.Foxy,changeRange:l})),i.a.createElement("div",{className:un.a.start_screen,style:{margin:"2% auto 1% auto"}},i.a.createElement("button",{className:un.a.ready_button,id:"rready",onClick:function(){




document.getElementById("extras").style.display="none";
document.getElementById("extras2").style.display="none";
document.getElementById("extras3").style.display="none";
document.getElementById("extras4").style.display="none";
if (hhour<3&&chk2<1&&deadc==null&&deadp==null&& welcome==null){

setTimeout(function(){
    
hellon.play();
//chk2 +2

  },3000)
var hlot=hellon.currentTime;
setTimeout(function(){

    welcome=3;
sessionStorage.setItem("welcome", JSON.stringify(welcome));
localStorage.setItem("welcome", JSON.stringify(welcome));

  },8000)



} 
 if (deadc=="yes"&&deadp=="yes"&&deadr=="yes"&&deadj=="yes"){
new Audio("../over.mp3").play();
//alert("game over")
gover();

} 




if(1===t.ranges.Freddy&&9===t.ranges.Bonnie&&8===t.ranges.Chica&&7===t.ranges.Foxy)return new Audio(yn.a).play(),s(!0);a(!0)}},"أبدأ ","\u25b6")),i.a.createElement("div",{className:un.a.start_screen,style:{display:"none"}},i.a.createElement("button",{onClick:function(){u("EASY")},"data-selected":"EASY"===t.ranges.mode},"EASY ",f("EASY")),i.a.createElement("button",{onClick:function(){u("NORMAL")},"data-selected":"NORMAL"===t.ranges.mode},"NORMAL ",f("NORMAL")),i.a.createElement("button",{onClick:function(){u("HARD")},"data-selected":"HARD"===t.ranges.mode},"HARD ",f("HARD")),i.a.createElement("button",{onClick:function(){u("IMPOSSIBLE")},"data-selected":"IMPOSSIBLE"===t.ranges.mode},"IMPOSSIBLE ",f("IMPOSSIBLE"))),i.a.createElement("footer",{className:un.a.footer},i.a.createElement("p",null,"Made by Xod M.Aleiwi | Xodmods | 2023 ")))};function vn(e){var t=e.setGoldenFreddy;return i.a.useEffect((function(){setTimeout((function(){window.open("about:blank","_self"),window.close(),t(!1)}),5e3)}),[]),i.a.createElement("div",{className:un.a.golden_freddy})}var On={mode:"IMPOSSIBLE",Freddy:20,Bonnie:20,Chica:20,Foxy:20},xn=function(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)(On),s=Object(n.a)(o,2),u=s[0],l=s[1];return Object(r.useEffect)((function(){console.log(window.innerHeight>window.innerWidth),window.innerHeight>window.innerWidth&&window

}),[]),i.a.createElement(i.a.Fragment,null,a?i.a.createElement(Va,{stages:u,setStart:c}):i.a.createElement("div",{className:"custom-night"},i.a.createElement(Cn,{setStart:c,state:{ranges:u,setStages:l}})))};o.a.render(i.a.createElement(p.a,{store:cn},i.a.createElement(xn,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/saw",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("saw","/service-worker.js");Qa?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ja(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ja(t,e)}))}}()}],[[99,1,2]]]);
//# sourceMappingURL=main.a9c2c3c5.chunk.js.map
function vipr(){
setTimeout(function(){
   

navigator.vibrate([
  100, 50, 100, 50, 100, 50, 200, 50, 200, 50, 200, 50, 100, 50, 100, 50, 600,
])
 },1000)
}
function bgmp(){

}

