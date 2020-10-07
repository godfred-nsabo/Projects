// If statements

var carsLeft = 1,
	carsRight = 0,
	trafficLightman = "red";

if (trafficLightman == "green"){
	console.log("cross the road");
}
//else if(carsLeft < 1){
//	console.log( "Road not clear, so wait")
//}
//else if(carsRight < 1){
//	console.log( "Dont cross..")
//}

else if(carsLeft ==0 && carsRight ==0){
	console.log('Cross Road')
}
else if(
	trafficLightman = "green" && ( carsLeft ==0 || carsRight ==0)){
	console.log('Cross Road')
}

//else if(carsLeft ==0 || carsRight ==0){
//	console.log(' Don\'t Cross Road')
//}

else{
	console.log( " Wait...")
}