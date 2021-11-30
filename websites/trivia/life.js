var questions = [
	"Recreating conditions thought to have existed during the early Earth, Miller and Urey were able to produce which of the following",
	"Which of the following conserved quantities accounts for why protoplanetary disks are flat?",
	"Which exoplanet detection method uses spectral lines?",
	"Most known exoplanets were discovered using which method?", 
	"Which telescope has discovered the most exoplanets to date?",
	"Life on Earth is",
	"SETI looks for signals from alien civilizations in which wavelength band?",
	"A famous equation for calculating the number of advanced civilizations in the Milky Way is called the ________ equation",
	"Sunspots are caused by",
	"Which of the following increase with depth in the Sun?",
	"Which layer in the sun is directly below the convective zone?",
	"What do we call the layer of the Sun that corresponds to its visible surface?",
	"What are granules on the Sun caused by?",
	"What is responsible for generating the Sun's energy?",
	"Roughly how long does it take for photons generated in the Sun's core to reach the surface?",
	"Which of the following layers are part of the Sun's atmopshere?",
	"Protons normally repel one another due to their positive charge. What allows for nuclear fusion to take place in spite of this?",
	"The proton-proton chain ultimately converts four protons into",
	"What is the approximate temperature of the Sun's core?",
	"Using a cannon as an analogy for the Sun, the muzzle flash can be likened to a _______ and the projectile cannonball to a _________",
]; 

var choices = [
	["water", "amino acids", "organic molecules", "life forms", "silica"],
	["mass", "energy", "momentum", "angular momentum", "weak isospin"],
	["Astrometry", "Direct Imaging", "Gravitational Lensing", "Radial Velocity", "Transit"],
	["Astrometry", "Direct Imaging", "Gravitational Lensing", "Radial Velocity", "Transit"],
	["FAST", "HabEx", "Kepler", "Darwin", "Hubble"],
	["carbon based", "hydrogen based", "oxygen based", "nitrogen based", "silica based"],
	["Visible", "Infrared", "Radio", "X-rays", "Microwaves"], 
	["Tyson", "Nye", "Fermi", "Drake", "Einstein"], 
	["convection", "magnetic fields", "radiation pressure", "coronal mass ejections"],
	["Density", "Pressure", "Temperature"], 
	["Core", "Mantle", "Chromosphere", "Photosphere", "Radiative Zone"],
	["Base", "Photosphere", "Chromosphere", "Radiative Zone", "Corona"],
	["magnetic fields", "turbulence", "conduction", "convection"],
	["magnetic fields", "gravitational contraction", "nuclear fusion", "nuclear fission", "sunquakes"],
	["1000 years", "10,000 years", "100,000 years", "1 million years", "10 million years"],
	["Chromosphere", "Corona", "Radiative Zone", "Photosphere"],
	["Electro-Weak Force", "Strong Force", "Gravity", "Dark Energy"], 
	["Beryllium", "Carbon", "Deuterium", "Helium", "Lithium"],
	["6000 K", "1 million K", "5 million K", "15 million K", "25 million K"],
	["Coronal Mass Ejection, Solar Flare", "Solar Flare, Coronal Mass Ejection"]
];

var answers2questions = [
	["amino acids", "organic molecules"],
	["angular momentum"],
	["Radial Velocity"],
	["Transit"],
	["Kepler"],
	["carbon based"],
	["Radio"],
	["Drake"],
	["magnetic fields"],
	["Density", "Pressure", "Temperature"], 
	["Radiative Zone"],
	["Photosphere"],
	["convection"],
	["nuclear fusion"],
	["10 million years"],
	["Chromosphere", "Corona"],
	["Strong Force"],
	["Helium"],
	["15 million K"],
	["Solar Flare, Coronal Mass Ejection"],
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

