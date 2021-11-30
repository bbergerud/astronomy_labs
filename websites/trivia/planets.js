var questions = [
	"Which of the following sets of planets constitute the <em>terrestrial planets</em>",
	"The most massive planet in the solar system is",
	"What object most resembles Mercury",
	"Observations of Jupiter in a moderate amateur telescope reveal",
	"In comparison with Earth, Mars is",
	"Crater studies of Venus have revealed that",
	"Where are Jupiter and Saturn located in the Solar System?",
	"Which of the following sets constitute the Galilean Moons?",
	"What term unambiguously denotes the planets Jupiter, Saturn, Uranus, and Neptune?",
	"Where are comets thought to originate?",
	"Which planet rotates on its side?",
	"Which planet rotates clockwise (retrograde)?",
	"Where is the Asteroid Belt Located?",
	"Where is the Kuiper Belt Located?",
	"The Jovian planets are denser than the Terrestrial Planets",
	"Which planets constitute the Gas Giants?",
	"When did the solar system form?",
	"Which method has detected the most exoplanets to date?",
	"Which of the following planets don't have moons?",
	"Which of the following best describes Venus?",
	"Which object most resembles Earth in terms of its geology?",
	"Which object most resembles Earth in terms of its size and mass?", 
	"What is the hottest planet in the Solar System?",
	"Which planet is the second smallest in our solar system?",
	"What causes the Earth's magnetosphere?",
	"The Martian polar caps are composed of frozen",
	"Venus is perpetually covered in clouds. How have we been able to map its surface?",
	"Studies of Europa indicate that",
	"What is the atmosphere of Venus mostly made of?", 
	"The presence of free oxygen on Earth is primarily caused by",
	"Plate tectonics on Earth is caused by",
	"What type of rock indicates the presence of water in the past?",
	"What is particularly interesting about Saturn's moon Titan?",
	"What type of waves are able to travel through Earth's liquid outer core?",
	"Which of the following have been observed on Mars?",
	"Which planets are thought to have had water oceans in the past?",
	"What are Saturn and Jupiter mostly made out of?",
	"Does Venus have continents?",
	"Which planet is closest to the Sun?",
	"Which of the following planets are never visible at midnight?",
	"Which of the following moons have no impact craters?",
	"Which of the following statements about Earth's atmosphere are true?",
	"Which of the following objects possess no atmosphere?",
	"Why was Pluto demoted to a dwarf planet?",
	"If we look at the night sky, where will we find the planets?",
	"On the Moon the highlands are composed of silicate rocks, while the darker Maria are composed of a volcanic rock called",
	"The commonly accepted theory for the Moon's formation is the _______ theory",
	"Neap tides occur during which moon phases?",
	"What are the effects from tidal breaking between the Earth and the Moon?",
	"The Kepler spacecraft has discovered many planets with masses between Earth and Neptune that are most commonly called",
	"How are the terrestrial atmospheres thought to have formed?",
	"Which terrestrial planet is known for its enormous scarps (cliffs)?",
	"The largest moon of Neptune is",
	"The largest asteroid is called",
	"<em style='color:lightgreen'>Space Aliens</em> cleverly disguise themselves as your sorority sisters and put knock-out pills in your Mocha Latte. They carry you aboard their spaceship and blast off for outer space. You wake up an indeterminate time later, and look through the porthole of the spaceship. You are clearly in orbit around a planet. You see unbroken clouds below, some of which are brownish-red; others, higher, are bright white. You look outward and see at least three objects that look like the Moon as seen from Earth, except they have different appearances and colors. You immediately realize where the fiends have taken you. You are at",
]; 

var choices = [
	[	'Mercury, Venus, Jupiter, Saturn',
		'Venus, Earth, Jupiter, Uranus', 
		'Mercury, Mars, Jupiter, Neptune', 
		'Mercury, Venus, Mars, Earth', 
		'Venus, the Moon, Jupiter, Saturn'],
	["Venus", "Earth", "Mars", "Saturn", "Jupiter"],
	["Mars", "Venus", "Earth", "The Moon", "Europa"],	
	["A ring surrounding the planet", "Parallel lines running across the planet", "Moons orbiting the planet", "A point of light, like a star"],
	["Warmer", "Smaller in Mass", "Smaller in Diameter", "Larger in Mass", "About the same size"],
	["The surface is essentially unchanged since the 'Age of Bombardment'", "The craters were formed by comets, not asteroids", "The surface was once covered by an ocean", "The surface was completely 'repaved' about 500 mya", "Craters have been modified by recent water flows"],
	["Inside the orbit of Mercury", "Between Mars and Uranus", "Beyond Neptune and Uranus", "Between Earth and Mars", "Between Venus and Mars"],
	["Adrastea, Europa, Io, Metis", "Callisto, Europa, Ganymede, Io", "Europa, Enceladus, Io, Titan", "Dione, Mimas, Titan, Triton"],
	["Jovian Planets", "Gas Giants", "Terrestrial Planets", "Ice Giants"],
	["Asteroid Belt", "Comet Belt", "Kuiper Belt", "Oort Cloud"],
	["Mercury", "Venus", "Jupiter", "Uranus", "Neptune"],
	["Mercury", "Venus", "Jupiter", "Uranus", "Neptune"],
	["Between Venus and Earth", "Between Earth and Mars", "Between Mars and Jupiter", "Between Jupiter and Saturn", "Beyond Neptune"],
	["Between Venus and Earth", "Between Earth and Mars", "Between Mars and Jupiter", "Between Jupiter and Saturn", "Beyond Neptune"],
	["True", "False"],
	["Jupiter", "Saturn", "Uranus", "Neptune", "Venus"],
	["4.5 million years ago", "13.6 billion years ago", "9 billion years ago", "4.6 billion years ago", "100 trillion years ago"],
	["Doppler Shift", "Gravitational Lensing", "Transit"],
	["Mars", "Mercury", "Venus", "Neptune", "Uranus"],
	["Bare, no atmosphere, gray, and cratered", "Thick atmosphere, desolate plains, volcanic peaks, sulfuric acid clouds", "Polar caps of Ice and CO<sub>2</sub>, red deserts and dunes, dry river beds, thin atmosphere", "Ice covered surface, no atmosphere, subsurface ocean heated by volcanic activity"],
	["Venus", "Mars", "Europa", "Neptune", "Uranus"],
	["Venus", "Mars", "Europa", "Neptune", "Uranus"],
	["Mercury", "Venus", "Jupiter", "Saturn", "Planet X"],
	["Ceres", "Mercury", "Venus", "Mars", "Pluto"],
	["Plate tectonics", "Convection of molten iron in the outer core", "Nuclear fusion in the core", "Magnetic fields imbedded in the crust, like a magnet"],
	["Oxygen", "Water", "Carbon dioxide", "Methane", "Nitrogen"],
	["Using rovers on the Venusian surface", "Using lasers on spacecrafts (LIDAR)", "Using radar imaging of the planet", "Using orbiting spacecrafts to measure gravitational distortions", "Releasing balloons from orbiting spacecrafts"],
	["Europa has the strongest magnetic field in the solar system", "Europa is made mostly of Uranium", "Europa has a thick atmosphere", "Europa's composition is similar to the Moon and Earth", "There may be a liquid ocean below the surface"],
	["Carbon Dioxide", "Hydrogen", "Oxygen", "Nitrogen", "Water Vapor"],
	["Plant life generating oxygen through photosynthesis", "Volcanic activity", "The burning of fossil fuels", "Organic carbon burial in the oceans"],
	["Major impact events", "Convection of molten iron in the outer core", "Tidal forces from the Moon", "Magma convection in the upper Mantle"],
	["Igneous", "Metamorphic", "Sedimentary"],
	['It is more massive than Earth', 'It is the most distant moon in the solar system', 'It has a thick atmosphere', 'It is the only moon of Saturn', 'It has liquid on its surface'],
	["R waves", "S waves", "P waves", "Q waves"], 
	["small bodies of water", "a low-lying atmosphere with a high oxygen content", "dry water channels", "regions where the iron-nickel core protudes onto the surface", "mummified <a href='https://youtu.be/M0RY0Z9z-MM' target='_blank'>aliens</a> lying in ruins of ancient, fortified cities"],
	["Earth", "Mercury", "Mars", "Titan", "Venus"],
	["Hydrogen and Helium", "Helium and Argon", "Carbon and Oxygen", "Iron and Silicon", "Hydrogen and Nitrogen"],
	["No -- there are no oceans on Venus", "No -- Venus is covered in Magma", "Yes -- there is and extensive network of elevated landmasses that resemble continents", "Yes -- There are two regions that have mountain ranges and rift valleys"],
	["Earth", "Io", "Venus", "Mercury", "Mars"],
	["Neptune", "Mars", "Venus", "Uranus", "Mercury"],
	["Europa", "Enceladus", "Io", "Callisto", "Titan"],
	["There is no CO<sub>2</sub> present", "The main component is molecular oxygen, O<sub>2</sub>", "Carbon dioxide is the dominant greenhouse gas", "Water vapor is the dominant greenhouse gas", "Carbon dioxide is a minor component that has been increasing in recent decades"],
	["Pluto", "Mercury", "Mars", "Jupiter", "The Moon"],
	["Pluto is smaller than Earth's Moon", "Pluto was found to be a distant satellite of Neptune", "It is similar to the Kuiper Belt objects", "Pluto isn't rounded by its own gravity", "Pluto doesn't dominate its neighborhood"],
	["close to the zenith", "along the celestial equator", "near the NCP", "along the ecliptic"],
	["Anorthosite", "Basalt", "Gneiss", "Obsidian", "Granite"],
	["capture", "fission", "large impact", "twin formation"],
	["New", "1<sup>st</sup> Quarter", "Full", "3<sup>rd</sup> Quarter"],
	["The Earth's rotation period increases", "The Moon slowly drifts inward towards Earth", "The Moon's rotation period equals its orbital period", "The Moon will eventually break up and form a ring"],
	["Sub-Giants", "Super-Earths", "Mega-Earths", "Mini-Neptunes"],
	["Impact events", "Gravitational capture during formation", "Volcanism", "Solar Flares"],
	["Mercury", "Venus", "Earth", "Mars"],
	["Titan", "Triton", "Rhea", "Mimas", "Miranda"],
	['3 Juno', 'Ceres', '4 Vesta', '16 Psyche', 'Mimas'],

	["Saturn", "Jupiter", "Venus", "Neptune", "Mars"],
];

var answers2questions = [
	['Mercury, Venus, Mars, Earth'],
	["Jupiter"],
	["The Moon"],
	["Parallel lines running across the planet", "Moons orbiting the planet"],
	["Smaller in Mass", "Smaller in Diameter"],
	["The surface was completely 'repaved' about 500 mya"],
	["Between Mars and Uranus"],
	["Callisto, Europa, Ganymede, Io"],
	["Jovian Planets"],
	["Oort Cloud"],
	["Uranus"],
	['Venus'],
	["Between Mars and Jupiter"],
	["Beyond Neptune"],
	["False"],
	["Jupiter", "Saturn"],
	["4.6 billion years ago"],
	["Transit"],
	["Mercury", "Venus"],
	["Thick atmosphere, desolate plains, volcanic peaks, sulfuric acid clouds"],
	["Mars"],
	["Venus"],
	["Venus"],
	["Mars"],
	["Convection of molten iron in the outer core"],
	["Water", "Carbon dioxide"],
	["Using radar imaging of the planet"],
	["There may be a liquid ocean below the surface"],
	["Carbon Dioxide"],
	["Organic carbon burial in the oceans", "Plant life generating oxygen through photosynthesis"],
	["Magma convection in the upper Mantle"],
	["Sedimentary"],
	['It has a thick atmosphere', 'It has liquid on its surface'],
	["P waves"],
	["dry water channels"],
	["Earth", "Mars", "Venus"],
	["Hydrogen and Helium"],
	["Yes -- There are two regions that have mountain ranges and rift valleys"],
	["Mercury"],
	["Venus", "Mercury"],
	["Io"],
	["Water vapor is the dominant greenhouse gas", "Carbon dioxide is a minor component that has been increasing in recent decades"],
	["Mercury", "The Moon"],
	["Pluto doesn't dominate its neighborhood"],
	["along the ecliptic"],
	["Basalt"],
	["large impact"],
	["1<sup>st</sup> Quarter", "3<sup>rd</sup> Quarter"],
	["The Earth's rotation period increases", "The Moon's rotation period equals its orbital period"],
	["Super-Earths"],
	["Impact events", "Volcanism"],
	["Mercury"],
	["Triton"],
	['Ceres'],
	["Jupiter"],

];
/*
var questions = [
	// Basic
	"The most massive planet in the solar system is",
	"Which of the following sets of planets constitute the <em>terrestrial planets</em>",
	"Why do smaller bodies cool much faster than larger bodies?",

	// Giant planets
	"Jupiter and Saturn are almost completely composed of two elements. Which are they?",



	// Terrestrial Planets
	"Which of the following statements is true about Earth and Venus?",
	"Does Venus have continents?",
	"Which of the following has been observed on Mars?",
	"Venus is perpetually covered in clouds. How have we been able to map its surface?",
	"Craters have been discovered on the surface of Venus. From counting them and studying their sizes, what have we learned?",
	"As a result of studies from spacecraft orbiting the surface of Mars, as well as spacecraft that have landed on the surface, it now appears that",
	"Which of the statements below about the Earth's atmophere are true?",
	"Which of the following possess no atmosphere?",
	"Which of the following is a correct description of the atmosphere of Mars?",
	"What aspect of the rotation of the planet Mercury is unusual?",
	"Which of the following solar system objects does Mercury most closely resemble?",
	"Which terrestrial planet has the greatest atmospheric pressure at its surface?",
	"Which planets are thought to have had water oceans in the past?",
	"The presence of free oxygen on Earth is primarily caused by",
	"What rock type found on Mars provides evidence that liquid water existed in the past?",
	"What was the primary method for removing CO<sub>2</sub> from Earth's early atmosphere?",
	"What is the atmosphere of Venus mostly made of?", 
	"What is the second largest terrestrial planet?",
	"What type of waves are able to travel through Earth's liquid outer core?",

	// Moons
	"Studies of the surface of Europa indicate that",
	"What is particularly interesting about Saturn's moon Titan?",
	"Why are the lunar highlands more cratered than the maria?",

];

var choices = [
	["Venus", "Earth", "Mars", "Saturn", "Jupiter"],
	['Mercury, Venus, Jupiter, Saturn', 'Venus, Earth, Jupiter, Uranus', 'Mercury, Mars, Jupiter, Neptune', 'Mercury, Venus, Mars, Earth', 'Venus, the Moon, Jupiter, Saturn'],
	["They have less gravity to retain the heat", "The surface area is larger relative to its volume", "A smaller body has less radioactive elements to provide heating", "Smaller bodies absorb less light from the Sun"],

	// Giant Planets
	["hydrogen and helium", "helium and argon", "carbon and oxygen", "iron and oxygen", "silicon and oxygen"],


	// Terrestrial Planets
	["They are dominated by the same geological processes", "Their diameters and masses are much different", "They have similar surface temperatures", "Their orbital planes are both inclined by about 50 degrees", "They are very similar in mass and diameter"],
	["Yes, there appear to be over 23 continents", "No, it is too hot for water, so there are no continents", "Yes, there appear to be 9 continents", "Yes, there appear to be 2 continents", "No, the surface of Venus is molten"],
	["small bodies of water", "a low-lying atmosphere with a high oxygen content", "dry water channels", "regions where the iron-nickel core protudes onto the surface", "mummified <a href='https://youtu.be/M0RY0Z9z-MM'>aliens</a> lying in ruins of ancient, fortified cities"],
	["Using an extensive system of rovers on the Venusian surface", "The atmosphere is transparent to ultraviolet light", "The atmosphere is transparent to radio waves", "Using orbiting spacecrafts to measure gravitational distortions", "Releasing ballons from orbiting spacecrafts to map the surface"],
	['The surface of Venus, like the Moon, is essentially unchanged since the "Age of Bombardment"', 'Craters on Venus were formed by impacting comets, not asteriods', 'The surface of Venus was completely "repaved" about 500 million years ago.', 'The craters have been modified by recent water flows.', 'Inexplicably, the craters are larger than would be necessary to fragment the entire planet'],
	['the thin, cold atmosphere of Mars has been there since the formation of the planet', 'the atmosphere of Mars was once heavier and warmer than now, with bodies of liquid water on the surface', 'Mars once had a mass comparable to that of the Earth', '3 to 4 billion years ago, Mars was closer to the Sun than the Earth', 'the atmosphere of Mars changed from hydrogen to carbon dioxide approximately 150 million years ago'],
	['There is no measureable amount of CO<sub>2</sub> in the atmosphere', 'The main component is atomic oxygen', 'CO<sub>2</sub> is the dominant gas', 'Water vapor is the dominant greenhouse gas', 'CO<sub>2</sub> is a minor component, but has been increasing in recent decades'],
	['Saturn', 'Mercury', 'Mars', 'the Moon', 'Pluto'],
	['Mars has no detectable atmosphere over what is present in the solar wind', 'Mars has a very thin atmosphere of nitrogen and oxygen', 'Mars has a carbon dioxide atmosphere', 'Mars has a atmosphere made of hydrogen and helium', 'Mars has a very dense atmsophere made up of carbon dioxide and hydrogen'],
	["Its rotation and revolution periods are in proportion to the ratio 2 to 3", "Mercury is non-rotating in a reference frame with respect to the stars", "Mercury rotates in a sense opposite to its revolution", "It has a rotation period which is nearly identical to that of the Earth", "It has the fastest rotation period of any planet in the solar system"],
	['Venus', 'Earth', 'Sun', 'Jupiter', 'the Moon'],
	['Mercury', 'Mars', 'Earth', 'Jupiter', 'Venus'],
	["Earth", "Mercury", "Mars", "Saturn", "Venus"],
	["Plant life generating oxygen through photosynthesis", "volcanic activity", "the burning of fossil fuels", "organic carbon burial in the oceans"],
	["Cambrian", "CO<sub>2</sub> ice", "Igneous", "Metamorphic", "Sedimentary"],
	["It was absorbed by plants", "It was frozen into glaciers and permafrost", "It dissolved in the oceans and formed rocks", "It escaped from the upper atmosphere"],
	["Carbon Dioxide", "Hydrogen", "Oxygen", "Nitrogen", "Water Vapor"],
	["Venus", "Mars", "Earth", "Mercury"],
	["R waves", "S waves", "P waves", "Q waves"], 

	// Moons
	["Europa has the strongest magnetic field in the solar system", "Europa is made mostly of Uranium", "Europa has a heavy atmosphere that hides the surface", "Europa's composition is strangely similar to the Moon and Earth", "There may be a liquid ocean below the surface"],
	['It is more massive than the planet it orbits', 'It is the most distant (from its planet) moon in the solar system', 'It has a thick atmosphere', 'It is the only moon of Saturn', 'It is has liquid on its surface'],
	["Being higher in elevation, they are more likely to be impacted", "The maria are younger than the highlands", "The maria are made of denser rock", "The maria are older than the highlands"]

];




var answers2questions = [
	["Jupiter"],
	['Mercury, Venus, Mars, Earth'],
	["The surface area is larger relative to its volume"],

	// Giant planets
	["hydrogen and helium"],

	// Terrestrial
	["They are very similar in mass and diameter"],
	["Yes, there appear to be 2 continents"],
	["dry water channels"],
	["The atmosphere is transparent to radio waves"],
	['The surface of Venus was completely "repaved" about 500 million years ago.'],
	['the atmosphere of Mars was once heavier and warmer than now, with bodies of liquid water on the surface'],
	['Water vapor is the dominant greenhouse gas', 'CO<sub>2</sub> is a minor component, but has been increasing in recent decades'],
	['Mercury', 'the Moon'],
	['Mars has a carbon dioxide atmosphere'],
	["Its rotation and revolution periods are in proportion to the ratio 2 to 3"],
	['the Moon'],
	['Venus'],
	["Venus", "Earth", "Mars"],
	["organic carbon burial in the oceans", "Plant life generating oxygen through photosynthesis"],
	["Sedimentary"],
	["It dissolved in the oceans and formed rocks"], 
	["Carbon Dioxide"],
	["Venus"],
	["P waves"],

	// Moons
	["There may be a liquid ocean below the surface"],
	['It is has liquid on its surface', 'It has a thick atmosphere'],
	["The maria are younger than the highlands"],
];
*/

var n = 0;
var nMax = questions.length;

function newQuestion() {
	var questionHTML = document.getElementById("question");
	var choicesHTML = document.getElementById("choices");

	var options = "";


	for (i=0; i<choices[n].length; i++) 
	{
		var answer=false;

		for (j=0; j<answers2questions[n].length; j++) 
		{
			if(choices[n][i] === answers2questions[n][j]) 
			{
				answer = true;
			}		
		}

		if(answer) 
		{
			options += "<p class='answer'>" + choices[n][i] + "</p>";
		}
		else 
		{
			options += "<p>" + choices[n][i] + "</p>";
		}
	}

	questionHTML.innerHTML = "<p>" + questions[n] + "</p>";
	choicesHTML.innerHTML = options;

	n = n + 1;
	if (n === nMax) {
		n = 0;
	}
};

function showAnswer() {
	var answerHTML = document.getElementsByClassName("answer");
	for (i=0; i<answerHTML.length; i++)
	{
		answerHTML[i].classList.add("correct");
	}
};

function goBack() {
	if (n < 2) {
		n = nMax - (2 - n);
	} else {
		n = n - 2;
	}
	newQuestion();
};

window.onload = function() {
	newQuestion();
};

