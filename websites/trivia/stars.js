

var questions = [
	"Which of the following is closest to the Sun's Core?",
	"The radius of a star increases as you move to the ______ of the H-R diagram.",
	"If you measure a star's brightness and know its luminosity (only), you can find its",
	"The Stefan-Boltzmann law relates a star's luminosity with its",
	"Wien's law relates an object's temperature with its",
	"A star's spectral absorption lines can be used to find its",
	"High mass stars live longer than low mass stars",
	"Elements heavier than iron (Fe) can't be created in the core of stars and must be created during supernova events.",
	"The Chandrasekhar limit forms the mass boundary between",
	"An F star is hotter than an A star",
	"A hot, diffuse gas, like you might find in a neon sign, produces light at only a few frequencies. This is called an",
	"Two stars have the same brightness, but one has 4 times the luminosity. How much farther away is the more luminous star?",
	"For a high-mass star, which phase comes first?",
	"What is the meaning of Einstein's equation E = mc^2?",
	"From the peak of its black-body spectrum, you can measure a star's",
	"From the absorption lines in its spectrum, you can measure a star's",
	"What physical principle causes a gas cloud to spin faster as it collapses?",
	"Which of the Sun's layers is directly above the convective zone?",
	"As one gets closer to the core of the Sun the",
	"Sunspots are lower in temperature because they are regions of",
	"Directly outside the core of the sun is the",
	"Which measured property of a star should depend on distance?",
	"The Stefan-Boltzmann law relates an object's _____ to its _____ and _____.",
	"Which type of star is hottest?",
	"In which part of the H-R diagram would you find the hottest and most luminous stars?",
	"High-mass stars live longer than low-mass stars because they have more hydrogen",
	"For a low-mass star, the yellow giant phase comes before the first red giant phase",
	"The period where stars stop fusing hydrogen in the core, but continue to fuse it on the core's outer edge is called",
	"Pulsars are neutron stars that",
	"If the Earth were compressed so that its radius was equal to the Schwarzschild radius, it would become",
	"Because of Hawking radiation, all black holes will",
	"What is the process that originally makes stars hot?",
	"Light bends when it enters glass at an angle because",
	"Which of the following does not affect the spectral lines we see from a star?",
	"If you see two stars in the sky and one is brighter and bluer, you know the brighter and bluer one",
	"Before a star starts fusing hydrogen, the heat it is losing to starlight is gradually making",
	"Stars like the Sun are mostly made of",
	"The fact that electrons in atoms obey the rules of waves is the reason that they",
	"The reason most stars are able to stay nearly unchanged for billions of years is because",
	"What is the main quantity that determines what will happen to stars as they age and evolve?",
	"What is the primary balance going on in almost any star?",
	"The way to tell the age of a star cluster is",
	"The time that stars spend as main sequence stars",
	"The quantity that is most similar among main-sequence stars is",
	"Which of the following is NOT a reason that it is convenient that nature tends to form stars in clusters:",
	"Which of the following is NOT usually part of the reasons for core collapse?",
	"We have tested our models of stellar evolution by",
	"Imagine two stars in a binary, where the more massive star is on the main sequence, while the less massive star has evolved into a red giant.  What is most likely here?",
	'what is meant by the "main sequence" is a sequence ordered by',
	"Which of the following is <strong><em>NOT</em></strong> due to angular momentum?",
	"When the Sun gets much older, its luminosity will vary dramatically, primarily because of changes in its",
	"During the life of a typical star, it spends most of its time",
	"The core of a massive star collapses when",
	"Place the phases of the evolution of a low-mass star in proper order:",
	"As a star like the Sun first forms, it first contracts at constant surface temperature, and later contracts at constant luminosity. What does that look like as movement in the H-R diagram?",
	"The size of the core of a red giant is determined by the competition of",
	"Why does a red giant puff up in size so greatly?",
	"If two twins, Alice and Bob, are born together, but Bob takes a long interstellar journey at a speed very close to light, when Bob returns",
	"Algol is a binary that joins a high-mass main-sequence star with a low-mass red giant, which can be explained by",
	"Which of the following stars is most likely to experience a supernova at some point in the future?",
	"If you could turn off all nuclear fusion in the Sun forever, the Sun would",
	"Which type of binary star can you detect with your naked eye?",
	"Which of the following type of binary must have a large distance between the two stars?",
	"We can infer that the Sun must be burning nuclear fuel, because if it was not, it",
	"Which of the following must be the same for both stars in a typical close binary?",
	"Which of the following statements is true?",
	"Making an H-R diagram for a star cluster is of particular value due to the fact that",
	"A main-sequence star with ten times the mass of the Sun will have",
	"The late evolution of a star can be thought of as a kind of race between the electrons",
	"The fact that our solar system contains angular momentum is important for",
	"Which of the following have we found to be true about time?",
	"The way we order the spectral types seems strange because it is the intermediate temperatures where",
	"Which of the following is true about gravity?",
	"Your social life has become a disaster! Recently, all of your so-called friends avoid you like a leper!  Despondent, you enter the Hillcrest dining room to eat by yourself when you notice a group of Space Aliens eating together at a table on the north wall, engaged in lively conversation. You join them. They say that from their home planet their star appears as a big, fuzzy red light rather than the sharp, unpleasantly bright disk of our Sun. Their home planet is at distance of 100 astronomical units from their star, but the surface of their planet is warm and comfortable, and there are lakes and oceans. As you hear them talk, you realize you know where they come from.  They are from a planet around<p>"
];

var choices = [
	["The corona", "The chromosphere", "The radiation zone", "The convection zone", "The photosphere"],
	["upper left", "lower right", "upper right", "lower left", "none of the above, it's random"],
	["temperature", "distance", "radius", "peak of the black-body spectrum", "diameter"],
	["temperature and radius", "distance and composition", "mass", "distance and brightness", "all of the above"],
	["radius", "peak of its black-body spectrum", "distance", "luminosity", "composition"],
	["chemical composition", "radial velocity (doppler shift)", "distance"],
	["True", "False"],
	["True", "False"],
	["brown dwarfs and main sequence stars", "main sequence stars and red giants", "white dwarfs and neutron stars", "neutron stars and black holes", "neutron stars and pulsars"],
	["True", "False"],
	["absorption spectrum", "continuous spectrum", "emission-line spectrum", "doppler spectrum", "none of the above"],
	["2 times", "4 times", "8 times", "16 times", "it's not possible to tell without knowing the temperature"],
	["red giant", "yellow giant", "white dwarf", "neutron star", "supernova"],
	["Time gets contracted when you are moving close to the speed of light", "Time goes faster as you approach a heavy object", "The ellipticity (E) of a planet's orbit is related to the mass (m) of the Sun", "Energy and mass are related and can change from one to the other", "Energy and mass will warp space and time"],
	["diameter", "temperature", "distance", "recession velocity", "chemical composition"],
	["diameter", "luminosity", "distance", "age", "chemical composition"],
	["Conservation of angular momentum", "Conservation of linear momentum", "Conservation of mass", "Conservation of energy", "none of the above"],
	["chromosphere", "radiative zone", "core", "photosphere", "corona"],
	["pressure decreases", "temperature decreases", "pressure increases", "density decreases", "all of the above"],
	["increased magnetic field", "decreased magnetic field", "increased heavy elements", "decreased heavy elements", "increased reddening due to dust"],
	["convection zone", "radiative zone", "photosphere", "chromosphere", "corona"],
	["temperature", "luminosity", "brightness", "color", "none of the above are distance dependent"],
	["luminosity, temperature, size", "brightness, luminosity, size", "luminosity, temperature, distance", "luminosity, brightness, distance", "brightness, mass, distance"],
	["F", "B", "O", "M", "G"],
	["lower right", "lower left", "upper right", "upper left", "they can be found anywhere"],
	["True", "False"],
	["True", "False"],
	["shell burning", "ordinary supernova", "core collapse supernova", "the instability strip", "the CNO cycle"],
	["emit synchrotron radiation from their axis of rotation", "lose enough mass to enter the instability strip", "gain enough mass to start collapsing into a black hole", "still have shell burning of helium", "lose enough mass to periodically shift into the white dwarf phase"],
	["a white dwarf", "a neutron star", "a pulsar", "a black hole", "a worm hole"],
	["continue to grow by absorbing radiation", "continue to shrink by emitting radiation", "eventually become a neutron star", "eventually become a worm hole", "eventually become a white dwarf"],
	["oxidation of hydrogen", "fusion of hydrogen", "gravitational contraction", "they form from hot gas"],
	["photons speed up in glass", "light waves slow down in glass", "glass pulls light together", "it is just an optical illusion"],
	["the density of the star", "the size of the star", "the surface temperature of the star", "the distance to the star"],
	["is hotter", "has a higher luminosity", "is closer", "is closer and hotter"],
	["its radius rise and its temperature drop", "its radius rise and its temperature rise", "its radius drop and its temperature drop", "its radius drop and its temperature rise"],
	["helium", "hydrogen", "rock", "fire"],
	["have a negative charge", "have a tiny mass", "all move at the same speed", "absorb and emit light of only certain colors"],
	["hydrogen can undergo fusion", "the rate they lose heat is pretty slow", "gravity is fairly weak for a star", "everything in space happens in slow motion"],
	["their initial core temperature", "their initial surface temperature", "their initial radius", "their initial mass"],
	["gravity and pressure", "gravity and fusion rate", "pressure and fusion rate", "radiation escape and fusion rate"],
	["how large is the cluster", "where in the H-R diagram is its main-sequence turnoff", "how far along the main sequence have the stars moved", "which galaxy the cluster is in"],
	["is longer for higher-mass stars", "is shorter for higher-mass stars", "is about the same for all stars", "is dependent mostly on how fast the star is spinning"],
	["their surface temperature", "their core temperature", "their radius", "their mass"],
	["stars in clusters have similar masses", "stars in clusters have similar ages", "stars in clusters have similar distances", "stars in clusters provide a large number to study"],
	["the presence of nuclei that can release fusion energy", "gravity exceeding pressure", "the Pauli exclusion principle", "electrons moving near the speed of light"],
	["observing particular stars age in real time", "observing a class of stars age in real time", "comparing stars of similar ages and masses", "comparing stars of different ages and similar masses"],
	["mass transfer has occurred between the stars", "the binary is much older than our Sun", "the two stars were formed at different times", "the one star is made of different elements than the other"],
	["age", "distance from earth", "most common elements", "mass"],
	["the Earth orbits the Sun without falling in", "disks form around black holes", "pressure holds a star up against gravity", "the Milky Way galaxy is mostly in the same plane"],
	["size", "mass", "rotation", "distance from earth"],
	["on the hydrogen-burning main sequence", "on the helium-burning main sequence", "as a Red Giant", "as a supernova remnant"],
	['its electrons reach close to the speed of light', 'its electrons become "degenerate"', 'ions like helium or carbon undergo runaway fusion', 'ions like helium or carbon become "degenerate"'],
	['red giant, main sequence, white dwarf, planetary nebula', 'planetary nebula, white dwarf, red giant, main sequence', 'white dwarf, planetary nebula, main sequence, red giant', 'main sequence, red giant, planetary nebula, white dwarf'],
	['first downward, then to the left', 'first to the left, then downward', 'always diagonally toward the upper left', 'always diagonally toward the lower right'],
	['degeneracy pressure and gravity', 'degeneracy pressure and ideal-gas pressure', 'ideal-gas pressure and gravity', 'centrifugal force and gravity'],
	['heat is added to its outer layers by a fusing shell', 'heat is added to its outer layers by an expanding core', 'heat is removed from its outer layers by magnetic fields', 'heat is removed from its outer layers by convection'],
	['he will be much older than Alice', 'he will be much younger than Alice', 'both Alice and Bob will perceive themselves to be the younger', 'both Alice and Bob will perceive themselves to be the older'],
	["normal stellar evolution", "mass transfer", "capture of a young star in the gravity of an old star", "the two stars were initially made of different elements"],
	["the Sun", "a supergiant", "an isolated white dwarf", "a red giant"],
	["stay the same size but get suddenly dark", "stay the same size but gradually get dimmer and dimmer", "quickly collapse into a neutron star or black hole", "slowly shrink to a final Earthlike size"],
	["spectroscopic binary", "visual binary", "mass-transfer binary", "eclipsing binary"],
	["spectroscopic binary", "visual binary", "young binary", "any non-eclipsing binary"],
 	["would have to be much larger", "could not have maintained its brightness for billions of years", "could never have gotten hot in the first place", "would not exhibit solar flares"],
	["their evolutionary stage", "their mass", "their distance from Earth", "all of the above"],
	["gravity supplies the energy for high-mass star supernovae", "fusion supplies the energy for high-mass star supernovae", "a star born with a low mass can under no cirumstances go supernova", "a star born with a high mass can under no circumstances go supernova"],
	["higher mass stars evolve off the main sequence more rapidly",
"we can see higher mass stars to greater distances", "it allows you to sort the different ages of the stars in the cluster", "star clusters are easy to pick out in the night sky"],
	["about ten times the luminosity of the Sun", "over a thousand times the luminosity of the Sun", "the same surface temperature as the Sun", "about ten times the surface temperature of the Sun"],
	["reaching their ground state or approaching the speed of light", 
"being pulled in by gravity or flung out by magnetic fields", 
"becoming bound up in atoms or zooming around free", 
"joining with protons or breaking down into other particles"],
	["having planets", "having gravity", "the fact that the Sun undergoes fusion", "the fact that the Sun will one day be a red giant"],
	["it marches along the same way for everything in the universe", 
"it can elapse a little differently for moving objects", 
"moving clocks fail to properly measure how time passes", 
"it ticks faster when you are having fun"],
	["hydrogen atoms are most often in the lowest energy state", "hydrogen atoms are most often excited but not ionized", "lines are at their broadest", "lines are at their most narrow"],
	["it is known to be a force between any two objects with mass", 
"it is known to be an effect on space and time",
"Newton modeled it as a force, Einstein as a spacetime effect", 
"Newton modeled it a spacetime effect, Einstein as a force"],
	["18 Scorpii, the solar twin", "Epsilon Eridani, a main sequence star that is cooler than the Sun", "Vega, a main sequence star that is hotter than the Sun", "Antares, a red supergiant", "UV Ceti, a red dwarf, or spectral class M main sequence star"]


];

var answers2questions = [
	["The radiation zone"],
	["upper left", "upper right"],
	["distance"],
	["temperature and radius"],
	["peak of its black-body spectrum"],
	["chemical composition", "radial velocity (doppler shift)"],
	["False"],
	["True"],
	["white dwarfs and neutron stars"],
	["False"],
	["emission-line spectrum"],
	["2 times"],
	["yellow giant"],
	["Energy and mass are related and can change from one to the other"],
	["temperature"],
	["chemical composition"],
	["Conservation of angular momentum"],
	["photosphere"],
	["pressure increases"],
	["increased magnetic field"],
	["radiative zone"],
	["brightness"],
	["luminosity, temperature, size"],
	["O"],
	["upper left"],
	["False"],
	["False"],
	["shell burning"],
	["emit synchrotron radiation from their axis of rotation"],
	["a black hole"],
	["continue to shrink by emitting radiation"],
	["gravitational contraction"],
	["light waves slow down in glass"],
	["the distance to the star"],
	["is hotter"],
	["its radius drop and its temperature rise"],
	["hydrogen"],
	["absorb and emit light of only certain colors"],
	["hydrogen can undergo fusion"],
	["their initial mass"],
	["gravity and pressure"],
	["where in the H-R diagram is its main-sequence turnoff"],
	["is shorter for higher-mass stars"],
	["their core temperature"],
	["stars in clusters have similar masses"],
	["the presence of nuclei that can release fusion energy"],
	["comparing stars of different ages and similar masses"],
	["mass transfer has occurred between the stars"],
	["mass"],
	["pressure holds a star up against gravity"],
	["size"],
	["on the hydrogen-burning main sequence"],
	['its electrons reach close to the speed of light'],
	['main sequence, red giant, planetary nebula, white dwarf'],
	['first downward, then to the left'],
	['degeneracy pressure and gravity'],
	['heat is added to its outer layers by a fusing shell'],
	['he will be much younger than Alice'],
	["mass transfer"],
	["a supergiant"],
	["slowly shrink to a final Earthlike size"],
	["eclipsing binary"],
	["visual binary"],
	["could not have maintained its brightness for billions of years"],
	["their distance from Earth"],
	["gravity supplies the energy for high-mass star supernovae"],
	["higher mass stars evolve off the main sequence more rapidly"],
	["over a thousand times the luminosity of the Sun"],
	["reaching their ground state or approaching the speed of light"],
	["having planets"],
	["it can elapse a little differently for moving objects"],
	["hydrogen atoms are most often excited but not ionized"],
	["Newton modeled it as a force, Einstein as a spacetime effect"],
	["Antares, a red supergiant"]
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

