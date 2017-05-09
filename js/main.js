var calendarMonths = [
	{//January
		month: 0,
		cutoff: 20,
		totalDays: 31,
		z1: "Capricorn",
		z2: "Aquarius"
	},
	{//February
		month: 1,
		cutoff: 18,
		totalDays: 28,
		z1: "Aquarius",
		z2: "Pisces"
	},
	{//March
		month: 2,
		cutoff: 20,
		totalDays: 31,
		z1: "Pisces",
		z2: "Aries"
	},
	{//April
		month: 3,
		cutoff: 20,
		totalDays: 30,
		z1: "Aries",
		z2: "Taurus"
	},
	{//May
		month: 4,
		cutoff: 20,
		totalDays: 31,
		z1: "Taurus",
		z2: "Gemini"
	},
	{//June
		month: 5,
		cutoff: 21,
		totalDays: 30,
		z1: "Geminin",
		z2: "Cancer"
	},
	{//July
		month: 6,
		cutoff: 22,
		totalDays: 31,
		z1: "Cancer",
		z2: "Leo"
	},
	{//August
		month: 7,
		cutoff: 23,
		totalDays: 31,
		z1: "Leo",
		z2: "Virgo"
	},
	{//September
		month: 8,
		cutoff: 23,
		totalDays: 30,
		z1: "Virgo",
		z2: "Libra"
	},
	{//October
		month: 9,
		cutoff: 23,
		totalDays: 31,
		z1: "Libra",
		z2: "Scorpio"
	},
	{//November
		month: 10,
		cutoff: 22,
		totalDays: 30,
		z1: "Scorpio",
		z2: "Sagittarius"
	},
	{//December
		month: 11,
		cutoff: 21,
		totalDays: 31,
		z1: "Sagittarius",
		z2: "Capricorn"
	}
]

//KEEP IN MIND ARRAYS START AT INDEX VALUES OF 0


// Populate days drop-down, make sure correct days for correct month
function populateDays() {
	var userMonth = document.getElementById("months").options.selectedIndex - 1;

	for(var i = 1; i <= calendarMonths[userMonth].totalDays; i++) {
		var dayArray = [];
		
		dayArray.push(i);

		var newOption = document.createElement('option')

		newOption.innerHTML = i;

		// newOption.id = i;
		newOption.value = i;

		var days = document.getElementById('days').appendChild(newOption)
	}
}
//assigning option values ended up being unneccessary


//TEST USER INPUT
// function submit() {
// 	var userMonth = document.getElementById("months").options.selectedIndex;
// 	var	userDay = document.getElementById("days").options.selectedIndex + 1;

// 	console.log(userMonth);
// 	console.log(userDay);
// }


//The function
function submit() {
	var userMonth = document.getElementById("months").options.selectedIndex - 1;
	var	userDay = document.getElementById("days").options.selectedIndex + 1;

	console.log(userMonth);
	console.log(userDay);

	for(var k = 0; k < calendarMonths.length; k++) {
		if(userMonth === calendarMonths[k].month && userDay > calendarMonths[k].cutoff) {
			document.getElementById("horoscope").textContent = calendarMonths[userMonth].z2;
			console.log(calendarMonths[userMonth].z2);
			return;
		}
		else if(userMonth === calendarMonths[k].month && userDay <= calendarMonths[k].cutoff){
			document.getElementById("horoscope").textContent = calendarMonths[userMonth].z1;
			console.log(calendarMonths[userMonth].z1);
			return;
		}
	}
	// for(var n = 0; n < calendarMonths.length; n++) {
	// 	if(userDay <= cutoff) {}
	// 	if(userDay > cutoff) {}
	// }
}









