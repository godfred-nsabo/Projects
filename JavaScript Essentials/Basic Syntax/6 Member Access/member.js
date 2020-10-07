// Member Access rep by ...

// Objects

var car = {
	make: "Toyota RAV4 SUV 2wd",
	model: 2021,
	release_date: "19-09-2020",
	emission: {
		CO2 : 132 + " g/km",
		standardEuro: "EURO6"},
	speed: 350 + " km/h",
	fuel_Consumption:{ 
		Economy_comb: 47.9 + "mpg"},
	engine: {
		size: 2487 + " cc",
		valves: 16,
		transmission: "CVT",
		gears: 1,
		make: "Toyata",
		fuel: "Petrol/Elect Hybrid",
		pistons: [ { maker: " Toyota"}, { horsepower: 203} ] },
	vehicle_dimension: { 
		dimension: [ { length: 4600 + " mm" },
		{ wheelbase: 2690 + " mm" },
		{ width: 1855 + " mm"},
		{ height: 1685 + " mm"}
	] },
	performance :{
		kph: 0 + " to" + 100 + " within" + 8.4 + " secs",
		top_speed: 111 + " mph",
		engine_power :[
			{ BHP : 218 + " bhp"},
			{ KW : 160 + " kw"},
			{ RPM : 5700 + " rpm"},
		], 
		engine_torque: [ { LBSFT: 163 + " lbs.ft"}, { RPM: 3600 + " rpm"} ] },
	
	// Method 
	driver: function(){ return "to drive" ;}
};

// Array

var array = [
	"string", 
	1000, 
	[ "embedd", 200],
	{ car: " Nissan"},
	function(){ return "drive" ;}
];

console.log ( car.performance );









