//JavaScript Google Maps API Key: AIzaSyCsQJ2EWYI16ezj8a-TSfgjDf7jUBOkSOY

var totalHealth = 0;
var totalPrice = 0;
var totalRating = 0;
var hm = "No Result Found";
var highestMealValue = 0;
var MC = 0; 	//McDonalds
var SB = 0; 	//Starbucks
var SW = 0; 	//Subway
var BK = 0; 	//BurgerKing
var WE = 0; 	//Wendy's
var TB = 0; 	//Taco Bell
var DD = 0; 	//Dunkin Donuts
var CF = 0; 	//Chick-Fil-A
var PH = 0; 	//PizzaHut
var KFC = 0; 	//Kentucky Fried Chicken
var DM = 0; 	//Dominos
var SN = 0;		//Sonic
var CH = 0;		//Chipotle
var CJ = 0;		//Carl's jr
var LC = 0;		//little Caesars
var DQ = 0;		//Dairyqueen
var AR = 0;		//Arby's
var JB = 0;		//Jack in the Box
var PJ = 0;		//Papa Johns
var MCS = 'McDonalds';
var SBS = 'Starbucks';
var SWS = 'Subway';
var BKS = 'BurgerKing'
var WES = 'Wendys';
var TBS = 'Taco Bell';
var DDS = 'Dunkin Donuts';
var CFS = 'Chick-Fil-A';
var PHS = 'PizzaHut';
var KFCS = 'KFC';
var DMS = 'Dominos';
var SNS = 'Sonic';
var CHS = 'Chipotle';
var CJS = 'Carls jr';
var LCS = 'Little Caesars';
var DQS = 'Dairy Queen';
var ARS = 'Arbys';
var JBS = 'Jack in the Box';
var PJS = 'Papa Johns';

function increment(a, b, c, d, e, f, g, h, i, j, k) {
  var result = [];
  var i; //console.log(arguments.length);
  for(i = 0; i < arguments.length; ++i){
    result[i] = arguments[i] + 1;
    console.log(result[i])
 }
 return result;
}

function calculate(){
  var result;
  var restArray = [MC, SW, BK, WE, TB, DD, CF, PH, KFC, DM, SN, CH, CJ, LC, DQ, AR, JB, PJ];
  var restStrArray = [MCS, SWS, BKS, WES, TBS, DDS, CFS, PHS, KFCS, DMS, SNS, CHS, CJS, LCS, DQS, ARS, JBS, PJS];
	var i;
  for (i = 0; i < 19; ++i){
   	if (restArray[i] > highestMealValue){
    	hm = restStrArray[i];
     	highestMealValue = restArray[i];
   	}
  }
  //alert(hm);
  sessionStorage.setItem('hm', hm);
}
