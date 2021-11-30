

var questions = [
	// ----------------------------------------------------------------------------
	// 		History of Astronomy
	// ----------------------------------------------------------------------------
	"The fact that the Earth was spherical was known as far back as",
	"Who first discovered the large moons of Jupiter?",
	"Who first proposed the use of epicycles to explain retrograde motion?",
	"The ancient Greeks argued that the Earth must be standing still because they could not observe:",
	"Which of the following astronomers used a telescope?",
	"Who first proposed the Heliocentric model of the solar system?",
	"Isaac Newton pioneered which important aspect of astronomical discovery?",
	"Using the angle between the zenith and the Sun from both Alexandria and the town of Syene in Egypt, Eratosthenes was able to measure",
	"Who first discovered the phases of Venus?",
	"Who first recognized that planets move in elliptical orbits?",



	// ----------------------------------------------------------------------------
	// 		Moon Phases, Seasons, Basic Observations
	// ----------------------------------------------------------------------------
	"Which unit is most natural for describing distances between the planets?",
	"Which unit is most natural for describing distances between the stars?",
	"The Sun crossing the celestial equator marks the beginning of what season?",
	"An observer at the equator looking at the zenith is viewing",
	"An observer at the north pole looking at the zenith is viewing",
	"Seasons are caused by",
	"<em>Diurnal</em> (or daily) motion of stars across the sky is due to",
	"When the moon passes through the shadow of the Earth there is a",
	"When Earth passes through the shadow of the Moon there is a",
	"The Orion constellation is currently visible during the night. What is responsible for it not being visible during June?",
	"What is the angular size of the full Moon hanging over a building?",
	"The latitude in Iowa City is 42 degrees North. What is the elevation of Polaris here?",
	"Which of the following is <u><b><em>NOT</em></b></u> something that the tilt of Earth's axis is doing to make it hot in summer?",
	"If the Moon suddenly stopped dead in its orbit, it could fall and hit Earth. Roughly how long would it take to hit us?",
	"The stars appear to move in circles around the North star. This motion is related most closely to:",
	"The Moon gradually moves from west to east relative to the stars. Why?",
	"If the full Moon is on the Western horizon, what time of day is it?",
	"Which of the following is true about the Moon?",
	"The Moon in its nearly circular orbit around Earth",
	"If at a beach at night the tide is very strong, but the Moon is not visible in the clear night sky, what is the phase of the Moon?",
	"It is 9 pm and the Moon is on the meridian. What is its phase?",
	"The orbit of the Moon about the Earth is",
	"You look up in the sky and see the Moon. Its phase is waning gibbous. In 8 days, what will be the phase?",
	"You see the first quarter moon rising in the east. What time is it?",
	"The point on the sky where the right ascension is 0 hours and the declination 0 degrees is called the",
	"The sun has just risen. You look up in the sky and see that the Moon is on the meridian. What phase is it?",
	"In what part of the sky will we <em>always</em> see the planet Mars?",
	"Why are lunar and solar eclipses rare events?",
	"Which of the following best describes how stars move during the night in Iowa City?",
	"What is the right ascension of the sun on the Winter Solstice?",

	// ----------------------------------------------------------------------------
	// 		Physics
	// ----------------------------------------------------------------------------
	"According to Newton's second law, the force on an object is proportional to",
	"The fact that <em>planets move in elliptical orbits with the Sun at one focus</em> is a statement of",
	"A satellite in orbit around the Earth, traveling at constant speed, has no net force acting on it.",
	"What happens to an object when a force is applied?",
	"How do we know the mass of the Sun?",
	"In order for an object's speed and direction of motion to remain constant, it must have a net force acting on it.",
	"If you push an object of mass <em>m</em> with a force <em>F</em>, it will have an acceleration <em>a</em>. What acceleration will an object with mass <em>2m</em> have if you push it with a force <em>F/2</em>?",
	"According to Einstein, what is gravity?",
	"If an astronaut pushes against a massive satellite in space, what will happen?",
	"Resolving power describes the ability of a telescope to",
	"According to modern cosmology, how old is the universe?",
	"The reason orbits in the solar system sweep out equal area in equal time is most analogous to the reason",
	"Which of the following is true about faraway Uranus, relative to Earth?",

	// Light
	"A hot, diffuse gas, like you might find in a neon sign, produces light at only a few frequencies. This is called an",
	"Which list below is in order of increasing wavelength (small to large)?",
	"Which of the following forms of light has the highest frequency?",
	"Which travels faster in a vacuum?",
	"You can find the speed of a wave by",
	"The reason an isolated atom can only emit or absorb photons of particular energies is most analogous to the reason",
];

var choices = [
	// ----------------------------------------------------------------------------
	// 		History, Basic Astronomy
	// ----------------------------------------------------------------------------
	["the ancient Greeks", "the Romans", "the Middle Ages", "the Renaissance", "the Industrial Revolution"],
	["Kepler", "Newton", "Ptolemy", "Copernicus", "Galileo"],
	["Kepler", "Newton", "Ptolemy", "Copernicus", "Galileo"],
	["stellar parallax", "lunar eclipses", "moons around Jupiter", "the size of the Earth"],
	["Kepler", "Tycho Brahe", "Galileo", "All of the above"],
	["Kepler", "Copernicus", "Ptolemy", "Aristarchus", "Galileo"],
	["building correct models of the geometry of the solar system", "replacing divine revelation of truth with human observation", "deriving mathematical laws that explain observed motions", "employing telescopes and astronomical equipment"],
	["the distance to the Moon", "the size of the Sun", "the size of the Moon", "the ratio of distances to the Sun and Moon", "the circumference of the Earth"],
	["Kepler", "Newton", "Ptolemy", "Copernicus", "Galileo"],
	["Kepler", "Newton", "Ptolemy", "Copernicus", "Galileo"],

	// ----------------------------------------------------------------------------
	// 		Moon Phases, Seasons, Basic Observations
	// ----------------------------------------------------------------------------
	["parsec", "light year", "astronomical unit", "kilometer", "Angstrom"],
	["parsec", "light year", "astronomical unit", "kilometer", "Angstrom"],
	["Winter", "Spring", "Summer", "Autumn"],
	["the South Celestial Pole", "a Point on the Celestial Equator", "the North Celestial Pole", "the Big Dipper", "Polaris"],
	["the South Celestial Pole", "a Point on the Celestial Equator", "the North Celestial Pole", "the Big Dipper", "Polaris"],
	["the frequency of solar eclipses", "the frequency of lunar eclipses", "the dramatic changes in distance between the Earth and the Sun", "the tilt of Earth's axis with respect to the ecliptic plane", "excess CO<sub>2</sub> in the atmosphere"],
	["the inherent rotation of the Universe", "motion of Earth's upper atmosphere", "the yearly motion of the Earth around the Sun", "the rotation of the Earth on its axis", "the motion of the Moon as it orbits the Earth"],
	["solar eclipse", "lunar eclipse", "new moon", "third quarter moon", "solstice"],
	["solar eclipse", "lunar eclipse", "new moon", "third quarter moon", "solstice"],
	["the rotation of the Earth on its axis", "the rotation of the Sun on its axis", "the motion of the solar system through the Milky Way galaxy", "the changing distance between the Earth and the Sun", "the orbit of the Earth around the Sun"],
	["about half the width of your finger at arm's length", "about the width of your fist at arm's length", "it depends a lot on the building", "it depends a lot on how high above the horizon the Moon is"],
	["42 degrees", "48 degrees", "23.5 degrees", "90 degrees"],
	["causing the days to be long", "causing the sunlight to be more direct and more intense", "causing the Sun to rise higher in the Iowa sky", "causing us to be closer to the Sun"],
	["it would be instantaneous", "a few seconds", "a few hours", "a few days"],
	["sunrises and sunsets", "the phases of the Moon", "the seasons", "retrograde motion of planets"],
	["the inherent rotation of the Universe", "motion of Earth's upper atmosphere", "the yearly motion of the Earth around the Sun", "the rotation of the Earth on its axis", "the motion of the Moon as it orbits the Earth"],
	["6 am", "noon", "6 pm", "midnight"],
	["one side of it never sees sunlight", "we never see one side of it from Earth", "it does not rotate relative to the stars", "it orbits exactly within the ecliptic plane"],
	["is not subjected to gravity", "experiences a balance of Earth's gravity and the gravity of other planets", "is kept from falling towards us because its own gravity cancels Earth's", "falls freely, but never gets closer to Earth due to its sideways speed"],
	["new", "first quarter", "full", "third quarter"],
	["waning crescent", "waxing crescent", "waxing gibbous", "waning gibbous"],
	["in the plane of the ecliptic", "perpendicular to the plane of the ecliptic", "in the plane defined by the Celestial Equator", "inclined by 5 degrees to the plane of the ecliptic", "inclined by 23.5 degrees to the plane of the celestial equator"],
	["waxing crescent", "first quarter", "waxing gibbous", "waning crescent", "new moon"],
	["3 am", "9 am", "noon", "6 pm", "midnight"],
	["summer solstice", "winter solstice", "autumnal equinox", "vernal equinox", "galactic center"],
	["new", "waxing crescent", "first quarter", "full", "third quarter"],
	["along the ecliptic", "along the celestial equator", "close to the zenith", "near the north celestial pole", "along the meridian"],
	["The Moon has an eccentric orbit", "The Moon is rarely close enough to Earth", "The Earth only casts a shadow during special planetary alignments", "The Moon's orbit is inclined relative to the ecliptic", "The Earth rarely passes through the ecliptic"],
	["the stars move on diurnal circles centered on the zenith", "the right ascension and declination of the stars changes during the night", "the stars move on diurnal circles centered on the North Celestial Pole", "the azimuth angle of the stars changes, but not their altitude."],
	["12 hours", "23.5 degrees", "42 degrees", "18 hours", "6 hours"],
	

	// Physics
	["its velocity", "its momentum", "its acceleration", "its inverse momentum", "its mass"],
	["Kepler's first law", "Kepler's second law", "Kepler's third law", "Newton's first law", "Newton's second law"],
	["True", "False"],
	["it will begin to move at a constant speed", "it will remain stationary", "it will begin to emit electromagnetic radiation", "it will accelerate", "it will begin to change in mass"],
	["Observing the light it emits", "Measuring its diameter", "Its gravitational influence on the planets", "Its rate of nuclear burning"],
	["True", "False"],
	["<em>a</em>", "<em>2a</em>", "<em>4a</em>", "<em>a/2</em>", "<em>a/4</em>"], 
	["instantaneous force of attraction between two objects with mass", "an electromagnetic force between two objects with mass", "the warping of space-time in the presence of a massive object", "the length contraction of an object as it approaches the speed of light", "the slowing of a clock as it approaches the speed of light"],
	["She moves away faster than the satellite", "She moves away slower than the satellite", "She moves away at the same speed as the satellite", "She and the satellite are not able to move at all due to the lack of gravity", "She does not move but the satellite does move"],
	["see smaller details", "gather more light", "move quickly across the sky", "work during the day", "change the frequency of light that it observes"],
	["less than 10,000 years old", "about 13 million years old", "about 300 million years old", "about 3 billion years old", "about 13 billion years old"],
	["heavier objects fall faster than lighter ones", "runners in the outside lane of a track take longest to get around", "cars have to slow down in tight turns", "ice skaters spin faster when they pull their arms in"],
	["its orbital speed is higher", "its orbital period of revolution is larger", "both its orbital period and speed are larger", "neither its orbital speed nor its period are larger"],

	// Light
	["absorption spectrum", "continuous spectrum", "emission-line spectrum", "doppler spectrum", "none of the above"],
	["radio, microwave, visible, x-ray, gamma-ray", "gamma-ray, visible, radio, infrared", "gamma-ray, visible, microwave, radio", "radio, visible, microwave, x-ray, infrared", "x-ray, visible, gamma-ray, radio"],
	["radio", "microwave", "visible", "infrared", "ultraviolet"],
	["radio waves", "visible light", "gamma rays", "microwaves", "they all travel at the same speed"],
	["looking at its frequency", "looking at its wavelength", "dividing its frequency by its wavelength", "multiplying its frequency times its wavelength"],
	["a guitar can only play certain notes", "a key only fits in certain locks", "a gun can only shoot a bullet of a given size", "the planets in the solar system can only follow given orbits"],
];




var answers2questions = [
	// ----------------------------------------------------------------------------
	// 		History, Basic Astronomy
	// ----------------------------------------------------------------------------
	["the ancient Greeks"],
	["Galileo"],
	["Ptolemy"],
	["stellar parallax"],
	["Galileo"],
	["Aristarchus"],
	["deriving mathematical laws that explain observed motions"],
	["the circumference of the Earth"],
	["Galileo"],
	["Kepler"],

	// ----------------------------------------------------------------------------
	// 		Moon Phases, Seasons, Basic Observations
	// ----------------------------------------------------------------------------
	["astronomical unit"],
	["parsec", "light year"],
	["Spring", "Autumn"],
	["a Point on the Celestial Equator"],
	["the North Celestial Pole", "Polaris"],
	["the tilt of Earth's axis with respect to the ecliptic plane"],
	["the rotation of the Earth on its axis"],
	["lunar eclipse"],
	["new moon", "solar eclipse"],
	["the orbit of the Earth around the Sun"],
	["about half the width of your finger at arm's length"],
	["42 degrees"],
	["causing us to be closer to the Sun"],
	["a few days"],
	["sunrises and sunsets"],
	["the motion of the Moon as it orbits the Earth"],
	["6 am"],
	["we never see one side of it from Earth"],
	["falls freely, but never gets closer to Earth due to its sideways speed"],
	["new"],
	["waxing gibbous"],
	["inclined by 5 degrees to the plane of the ecliptic"],
	["waning crescent"],
	["noon"],
	["vernal equinox"],
	["third quarter"],
	["along the ecliptic"],
	["The Moon's orbit is inclined relative to the ecliptic"],
	["the stars move on diurnal circles centered on the North Celestial Pole"],
	["18 hours"],


	// Physics
	["its acceleration", "its mass"],
	["Kepler's first law"],
	["False"],
	["it will accelerate"],
	["Its gravitational influence on the planets"],
	["False"],
	["<em>a/4</em>"],
	["the warping of space-time in the presence of a massive object"],
	["She moves away faster than the satellite"],
	["see smaller details"],
	["about 13 billion years old"],
	["ice skaters spin faster when they pull their arms in"],
	["its orbital period of revolution is larger"],

	// Light
	["emission-line spectrum"],
	["gamma-ray, visible, microwave, radio"],
	["ultraviolet"],
	["they all travel at the same speed"],
	["multiplying its frequency times its wavelength"],
	["a guitar can only play certain notes"],
	
];

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

