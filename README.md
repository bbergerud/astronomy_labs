# Astronomy Labs

Astronomy 101..., well, more like ASTR:1070 (Stars, Galaxies, and the Universe; SGU) and ASTR:1080 (Exploring the Solar System; ESS) to be more precise. This repository contains some of the work I did as a "Professor TA" (to use a phrase some of my students came up with) during my graduate studies at the University of Iowa.

A summary of some of the changes I made can be found in the [table](#lab-worksheets) below where I mostly focused on describing some of the major "themes" rather than detailed descriptions of the content changes, which can be found by comparing the provided worksheets. My teaching experiences are also discussed in my [Pedagogical Content Knowledge](./EPLS_7385.pdf) paper that I wrote as part of the course *Teaching and Learning in Higher Education* (EPLS:7385).


## Lab Worksheets

These labs are meant to be completed in groups of 2-3 students while I find that when groups work together 4-5 students tends to work best. For the night labs, I often add an additional page at the end for going up to the roof for constellation identification, which is mentioned in the last table entry. The earlier entries in the table are generally more descriptive given the similar nature of the changes in the remaining labs.

For those interested in these labs, one thing to note is that some classes may be rather resistent to the idea of collaborative work and will often turn to the TA for guidance as soon as they hit a snag without really discussing it amongst themselves. You'll want to push the onus back to them, especially early in the semester. Once they really buy into it, you might be left wondering "what do you need me for?" as you watch groups having some illuminating discussions amongst themselves as they tackle problems and try to come to a consensus when there are differing opinions.

The worksheets are styled using the Modern Computer font that is the default font of LaTeX, so it will likely need to be installed to keep the same format when opening the .odt files (Libre Office).

| Lab | Worksheet | Comments |
| --- | --- |  --- |
| Active Learning | [updated](./new_worksheets/WS_Active_Learning.pdf) [original](old_worksheets/intro_active_learning.pdf) | <ul><li>**Overview**: Our original introductory lab involved working with galaxies, but was quite heavy on the math and students really struggled with it. This planet-based one was much better at getting students engaged, but most students in our non-major labs haven't had a math class in years and stuggled with the math problems (sometimes students would approach me afterwards expressing their fear about the lab portion because of this). Part 3 was later added while incorporating a couple parts of the former version, but TAs always ended up skipping it due to time constraints so it was later removed.</li><li>**Public Speaking**: One of the highlighted aspects of teaching is the importance of improving public speaking skills. I rearranged Part 1 to give groups a minute to discuss which questions interested them, then assigned a unique question to each group, followed by a ~10 minute period to explore the question. Groups would then take turns coming up to the front of the room, introduce themselves, their question, and share with the class what they learned. I would include a [powerpoint](./powerpoints/PP_Active_Learning_Part1.pptx) with a visual for each question as well.</li><li>**Revisiting Math**: if the math is too hard, how can we make this part easier and more engaging for the students? I changed it to start off with a conceptual question based on the rather popular representation of the [planets as fruits](https://flowingdata.com/wp-content/uploads/2014/11/Fruit-planets-620x439.jpg) to get students thinking about the problem followed by a group-based effort at calculating the actual value, which we would then go over as a class on a whiteboard. For the conceptual question I found that if groups are left on their own then most guess ~10 Earths because that's the radius of Jupiter relative to Earth and something like an apple/orange for Earth if Jupiter is a watermelon. Having groups discuss it with another group tends to push the estimates to ~100 Earths and something like a grape/blueberry, so they are thinking more critically about the question. Astronomers tend to like ballpark estimates, so approximating the radius of Jupiter as 10 Earth radii allows one to calculate an estimate (~1000 Earths) without having to use a calculator.</li><li>**Programming**: Is there any educational value in doing a bunch of calculations on a phone? Probably not, so this activity was put together to give students a brief foray into the use of coding with python (a major part of astronomy nowadays). One thing students tend to appreciate about activities like this is that they start to get an idea about what their friends in the Computer Science department are doing. It's helpful if the TA guides students through this activity as most students haven't done any coding before.</li><li>**Group Collaboration**: Groups work together to calculate the number of Earths that would fit inside Jupiter as well as calculating how how far away alpha Centauri would be in our 1:100 billion scale model of the Universe, with the later taking place on a whiteboard where they go over their work with the TA.</li><li>**Possible Revisions**: The table activity at the beginning of part 2 is a bit time consuming with little educational value, so it is something work looking into revamping. Perhaps having students explore something like this [visualization](http://homepage.divms.uiowa.edu/~bergerud/ASTR/Plots/planets.html) I made while providing a table with the radii and distances already filled-in would provide a better educational experience. It might be worth having students work out the volume problem on a white board as well. I largely refrained from this as I wanted to go over it and emphasis the use of rounding to make the calculation easier.</li></ul>|
|Angular Size|[updated](./new_worksheets/WS_Angular_Size.pdf) [original](./old_worksheets/angular_size.pdf)|<ul><li>**Overview**: This lab is meant to be an introduction to the small angle formula for calculating sizes of objects. It is rather math heavy and students struggle with it, particularly Part 1 where most groups tend to get only ~50% of the problems right (a few questions were added in later versions). One neat thing about this lab is that students get some hands-on experience using a measuring device. While the lab mentions giving students time to think about making a measuring device, in my experience we always provided them with a homemade device using a meter stick and ruler along with some tape and paper clips (I think the task is a bit too deep for students at their level).</li><li>**Group Collaboration**: If a task tends to be too difficult for a group, having groups work together tends to work wonders. To that end groups work together in Parts 1 and 3 to tackle a couple problems while being encouraged to collaborate in Part 2 as well.</li><li>**Revisiting Math**: For Part 1 groups work together at a whiteboard where they calculate the angular sizes of various things then go around and look at the work from other groups. Since they are comparing the small angle approximation with the true value they also gain some experience in judging for themselves when the approximation is valid. This format also makes it easier for the TA to check that students are calculating the correct quantities. </li><li>**Programming**: When is the small angle approximation valid? Well, why don't we further explore the question using a visualization. Here students apply the same equations that they used in the previous part but utilize some basic python programming for calculating and plotting data.</li><li>**Possible Revisions**: The parallax question in Part 3 is a bit tricky, so perhaps doing an example in the Pre-Lab quiz would help student understanding.</li></ul>|
|Exoplanets|[updated](./new_worksheets/WS_Exoplanet.pdf) [original](./old_worksheets/exoplanet_ws.pdf)|<ul><li>**Overview**: This lab explores the use of the transit method for detecting exoplanets and estimating their sizes. It is a more recent lab and is in pretty good shape in terms of active learning. While not explicity mentioned, Parts 1 and 2 are expected to feature a class discussion.</li><li>**Group Collaboration + Whiteboards**: Groups now work out math problems on a whiteboard  then go over their work with the TA.</li><li>**Formula Derivation**: The transit method makes use of a formula for calculating the relative size of a transiting exoplanet, but where does the formula come from? I added a question that goes through this derivation one step at a time. It takes a while for students to work through it and generally no student will know or understand how to do everything, but discussions amongst themselves and occasionally feedback from the TA really helps them tackle the problem.</li><li>**Possible Revisions**: I'm not sold on the educational value of Part 1, so perhaps finding a way to kind of merge Parts 1 and 2 with a more hands-on activity relating to the transit method might improve educational outcomes. Perhaps groups could work together and do a version of the transit demo at their workstations.</li></ul>|
|HR Diagram|[updated](./new_worksheets/WS_HR_Diagram.pdf) [original](./old_worksheet/ages_of_clusters.pdf)|<ul><li>**Overview**: This lab was originally a [photometry lab](./old_worksheets/photometry_of_a_globular_cluster.pdf) that was simplified to make things easier for students by focusing on estimating the ages of star clusters. The newer version, however, is too simple and results in some erroneous conclusions in Part 2 since no correction is made for dust extinction.</li><li>**Conceptual Questions**: I added some questions focused on exploring some of the nuances of using the turnoff point for estimating the age. Students then have to come to realize that they can use their knowledge of stellar evolution to order the star clusters by age.</li><li>**Group Collaboration**: Groups work together to tackle the conceptual questions at the end.</li><li>**Possible Revisions**: For question 4 of Part 1 there are likely better ways of exploring the HR diagram than filling out a table. It might be neat to have an interactive visualization of the HR data, one where students can adjust a distance scale to see that the brightest stars are biased towards being at larger distances.</li></ul>|
|Image Analysis 1|[updated](./new_worksheets/WS_Image_Analysis_1.pdf) [original (SGU)](./old_worksheets/image_analysis.pdf) [original (ESS)](./old_worksheets/image_analysis_solar.pdf)|<ul><li>**Overview**: This lab provides an introduction to analyzing astronomical images by estimating the sizes of various objects. It was later split into two labs that are rather short. Students tend to struggle at the math and often get confused in associating the size of the object in pixels with the actual height in the small angle formula.</li><li>**Group Collaboration + Whiteboards**: Groups work together to tackle the math in the first two parts, but are then left to tackle the last one on their own. Work is done on a whiteboard and groups must go over their work with the TA.<li>**Metacognition**: What happens when groups do some basic data analysis to get some quantity (e.g. the height of the Danforth chapel in pixels) and then come together to work out a more involved calculation? Well, there is often a lot of angst in the beginning as groups have different answers and wonder which one is correct, but you'll see their thinking start to shift as they realize there is always some imprecision involved with our measurements. Comparing answers also serves as a great way for groups to compare what they did when their answers are very different from one another.</li><li>**Imaging Techniques**: The beautiful pictures of nebulae often involve imaging specific emission lines. I added a part that explores the use of such images along with image transformations to bring our the fainter regions where more of the interesting features tend to take place.</li></ul>|
|Image Analysis 2| [updated](./new_worksheets/WS_Image_Analysis_2.pdf)|<ul><li>**Overview**: The SGU labs began implementing a final project designed to be a small research project involving calculating the size of some object, the distance an asteroid traveled, or photometry of a variable star. One semester I decided to implement a peer review process, so I combined the asteroid animation and comet tracking problems into a single part while adding one on photometry to help groups better understand the work of others during their peer review process.</li><li>**Group Collaboration + Whiteboards**: Groups work together to solve problems on a whiteboard and then go over their work with the TA.</li><li>**Formula Derivation**: Groups derive the expression relating the magnitude change to the change in brightness. It takes a while for students to work through it, but group discussions and occasional feedback from the TA really helps them tackle the problem.</li></ul> |
|Measuring the Earth|[updated](./new_worksheets/WS_Earth.pdf) [original](./old_worksheets/mass_of_the_earth.pdf)|<ul><li>**Overview**: This lab focused on measuring the mass of the Earth. I personally never taught the lab, but it was designed for a 3-hour majors course (ASTR:1771/1772) and I heard it was rather difficult for them. My revision is aimed at a 2 hour lab and might even be appropriate for non-majors who have taken the angular size lab.</li><li>**Hands-on-Activity**: What's the diameter of the Earth? Rather than look at an image of Earth and use the small angle formula, why don't we take a hands-on approach and use the same method Eratosthenes used 2000 years ago? I introduced this activity in Part 1 where one can use either the Sun or Moon to estimate the radius.</li><li>**Programming**: Groups use python to find the period of a pendulumn rather than Excel, which better prepares them for their future studies.</li><li>**Group Collaboration + Whiteboard**: Students work in groups to calculate the mass of the Earth. They also split up the task of measuring the period of the pendulum at different lengths and then share their data with the class.</li><li>**Possible Revisions**: It might be nice to add a calculation on the mass uncertainty. One could do some ballpark estimates for the uncertainty on the radius.</li></ul>|
|Measuring the Sky|[updated](./new_worksheets/WS_Measuring_Sky.pdf) [original (day)](./old_worksheets/measuring_the_sky_day.pdf) [original (night)](./old_worksheets/measuring_the_sky_night.pdf)|<ul><li>**Overview**: This lab is meant to introduce students to the celestial sphere and acquaint them with estimating positions [(azimuth, altitude)](https://astronomy.swin.edu.au/cosmos/h/Horizontal+Coordinate+System) and [angular sizes](https://astronomy.swin.edu.au/cosmos/A/Angular+Diameter). While the hand measurements are a good aspect, the technique isn't utilized again in the original worksheets. Some of the celestial sphere questions are difficult for students and parallax doesn't connect in that well with the rest of the lab.</li><li>**Group Collaboration + Whiteboards**: Groups work together at a whiteboard to label the celestial sphere and then go over their diagram with the TA.</li><li>**Stellarium**: Students use stellarium to help them visualize the celestial sphere model.</li><li>**Class Discussion**: A class discussion on tracing out several aspects of the celestial sphere was added, which are helpful for the *Navigating the Sky* lab.</li><li>**Notes**: Generally I wind up skipping section 3 of Part 1 due to time constraints, but it might be nice to keep it there for groups that get done early to look at.</li><li>**Memorable Moments**: One of my more memorable teaching experiences was watching a group where one of the students had some differing thoughts on how to label the celestial sphere and the group did a really good job listening to one another, explaining their thoughts, and ultimately came to a consensus.</ul>|
|Observing the Sky|[updated](./new_worksheets/WS_Observing_Sky.pdf) [original (day)](./old_worksheets/exploring_night_sky_day.pdf) [original (night)](./old_worksheets/exploring_night_sky_night.pdf)|<ul><li>**Overview**: This lab is meant to give students a basic introduction to observing the night sky. It covers the use of star wheels, star walk, and constellation charts, but really fails to do any proper night sky observing. The little observing that is included for night labs isn't all that relevant to the rest of the lab and some parts of it can only be done if the Moon is visible. In essence, the observing part sacrifices the experience for abstract concepts that students will forget the moment they leave the door. The Star Walk portion also fails to engage students in a meaningful manner.</li><li>**Night Sky Observing + Magnitude Estimation**: the amount of night-sky observing was greatly increased while focusing on identifying constellations using star wheels and estimating stellar magnitudes. Additionally, a question utilizing our hand measurement skills from the *Measuring the Sky* lab was added to aid in locating constellations.</li><li>**Stellarium**: Stellarium is used to help students visualize how the night sky changes depending on where you are located in the world.</li><li>**Cultural Connections**: Questions were added that explore the relationship between constellations and mythology, including those of non-Western cultures such as Maui's Hook (Polynesian).</li><li>**Possible Revisions**: While exploring starlore from different cultures is a nice feature, the fact that it is oriented as a set of short answer questions leaves room for improvement. Finding ways to make these activities more engaging would be desireable.</li><li>**Memorable Moments**: If stellar magnitudes are discussed at a point later in the semester, students often point to the magnitude activity for why they associate brighter stars with lower magnitudes.</li></ul>|
|Navigating the Sky | [updated](./new_worksheets/WS_Navigating_Sky.pdf) [original (part 1)](./old_worksheets/exploring_night_sky_day.pdf) | <ul><li>**Overview**: When it comes to celestial coordinates, what astronomy lab doesn't just give students a long list of coordinates and send students off to find what object is located at each? Well, after a few goes at it I can't really think of any lasting educational value to the activity, so I took a stab at taking a different approach by focusing on concepts and applications. This lab was also put together to allow for more observing activities given the lack of dedicated night sky observing labs.</li><li>**Night Sky Observing**: I introduced an activity where students estimate the right ascension and declination of various objects using their hands, similar to how [Moana uses her hands to navigate](https://theconversation.com/how-far-theyll-go-moana-shows-the-power-of-polynesian-celestial-navigation-72375) in the Disney movie (which inspired renaming the lab). TAs should walk students through this activity as it usually takes two trips for students to really start grasping what we are doing.</li><li>**Critical Thinking**: Given the right ascension of an object, when is it visible? I added a question to this effect that nicely ties in everything that we have discussed and requires students to think deeply about the material. I added a couple questions to the pre-lab quiz relating to this to help them start thinking about it.</li><li>**Memorable Moments**: During the [telescope lab](./new_worksheets/WS_Telescopes.pdf), I watched a group of students recalling this activity and generalizing the technique to estimating the rise, set, and meridian transit time of the Moon.</li></ul> |
|Redshift|[updated](./new_worksheets/WS_Redshift.pdf) [original](./old_worksheets/astronomical_redshift)|<ul><li>**Overview**: The goal of this lab is illustrate how astronomers use redshift to measure the distances to objects. One of the problems is that students don't quite make the connection to why Part 1 is relevant and the use of LoggerPro for performing a linear regression leaves something to be desired. Students sometimes misidentify the emission lines in their quasar spectrum as well.</li><li>**Why Question**: Added a question to the end of Part 1 connecting the task with today's lab while making it a class discussion to help make the connection clearer.</li><li>**Interactive Visualization**: The lab featured a change in units between nanometers in Part 1 and Angstroms in Part 2, so I made an [interactive D3 visualization](http://homepage.divms.uiowa.edu/~bergerud/ASTR/Plots/Quasar/quasar.html) for viewing the spectra that also converts the units to nanometers for consistency while also adding a feature for aligning the emission lines.</li><li>**Programming**: Rather than have students do a bunch of calculations on their phone, Julia is used to show how to calculate the quantities using some basic programming. Additionally, rather than rely on LoggerPro to perform the linear fit, groups use Julia to install a couple packages, perform a linear regression, and create a visualization, making the process similar to real astronomical research. Students tend to like the visualization they make at the end.</li><li>**Note**: The last question in the original worksheet was quite nice for dimensional analysis, but I removed it due to time constraints. It is quite challenging for groups, so either having them work in groups on a whiteboard or going over the problem with the class would be recommended. The question has been modified, however, in the more recent versions so that students are just told to do the calculation 978/H<sub>0</sub> which takes away any real learning outcomes (the fact that the calculation gives you the age of the Universe is also a bit of happenstance).</li><li>**Possible Revisions**: The linear fit may be a bit too advanced for students to really understand. Perhaps having groups partner up to graph the data on a whiteboard and come up with some simple approximation for the slope would be a better educational outcome. This would also likely leave time for students to do the last question in the original worksheet.</li></ul>|
| Spectroscopy | [updated](./new_worksheets/WS_Telescopes.pdf) [original](./old_worksheets/intro_to_spectroscopy.pdf) | <ul><li>**Overview**: This lab is one of the more popular ones and students tend to enjoy using the spectroscopic glasses, although the glasses aren't used for any activity. Two great questions that the lab features are "why doesn't bulb 6 appear to light up?" (infrared) and "why is argon purple" (mostly infrared emission; we see the small amount of blue and red which makes purple), the later of which is often answered wrong by students and has since been removed in a later revision. Recording the spectrum of air has generally posed a lot of problems, and therefore the question tends to be skipped by TAs.</li><li>**Spectroscopic Glasses**: Several questions were added that explore the use of spectroscopic glasses to better understand the relationship between a spectrum and the emitted light.</li><li>**Solar Spectrum**: Rather than look up the temperature of the Sun online, students now take a spectrum of the Sun and estimate the temperature using Wein's law. For night labs, a saved copy of the spectrum can be provided, or one could try taking a spectrum of the Moon.</li><li>**Group Collaboration + Whiteboard**: Groups partner up to discuss why Neon is orange and Argon is purple as well as working out Wein's law on a whiteboard. Groups go over their answers with the TA to ensure proper understanding.</li><li>**Class Discussion**: A few class discussion problems were added.</li></ul>
| Telescopes | [updated](./new_worksheets/WS_Telescopes.pdf) [original (part 3)](./old_worksheets/intro_to_telescopes_night.pdf) | <ul><li>**Overview**: When the educational experience of students using a telescope involves little more than "look through the eyepiece and draw the Moon", something seems wrong. I put this lab together with the idea of giving students a nice introduction to the use of telescopes, where we spend most of the lab period on the roof using telescopes to look at various objects like the Moon, planets, and double stars such as the spectacular blue-yellow pairing known as [Alberio](https://earthsky.org/brightest-stars/albireo-finest-double-star/). I think by far this ends up being most students favorite lab, although it can be a bit taxing on newer TAs.</li><li>**Telescope Experience**: Students are trained to use a telescope and progress from the easiest objects (Moon, bright planets) to the more challenging ones like Alberio.</li><li>**Critical Thinking**: When does the moon rise, set, and pass through the Meridian? Students use their knowledge of estimating angles to estimate these quantities, but first must make the connection between the two.</li><li>**Possible Revisions**: Perhaps it would be better to have students estimate the rise and set times in Part 3 rather than the azimuth and altitude.</li><li>**Note 1**: I would go over how to use a telescope twice, once down in the lab room with a small telescope we had and then again on the roof. Students were quite known for breaking telescopes, but this approach seemed to make things go along fairly smoothly with mostly some occasional adjustments to the finderscope being needed.</li><li>**Note 2**: It's probably a good idea to have some help on hand for setting up the telescopes beforehand and assisting during the lab, especially for less experienced TAs.</li><li>**Note 3**: For the double star Mizar-Alcor, I generally set up some of the smaller telescope we have and students first use a wide field eyepiece (25+ mm) to find it, then we swap over to one with a higher magnification (~12 mm) to see that Mizar then appears as a pair of stars.</li><li>**Note 4**: When I had another TA on hand, I often had them take a couple groups at a time and give them a hands-on introduction to using the Van Allen Observatory telescope, where students would open the dome, start-up the telescope and point at an object, take pictures, and then shut down the observatory. Students enjoyed the experience and it made the lab a bit easier to manage.</li><li>**Memorable Moments**: "I love this lab" -many students</li></ul>|.
|Constellation Identification||<ul><li>**Overview**: While this isn't a lab in itself, for the night labs I would often bring my students up to the roof for the last 30 minutes of class and have them use a star wheel to find a list of asterisms/constellations like we did in Part 3 of [Observing the Night Sky](./new_worksheets/WS_Observing_Sky.pdf). Groups would then be given a laser pointer when they are ready to point out the objects on their checklist. This activity is more about the experience than grading whether they identified all the objects.</li><li>**Memorable Moments**: During a new/returning TA session at the beginning of the Fall semester one year, a former TA highlighted this as one of their favorite teaching experiences. Students sometimes mentioned that they were going to miss these activities at the end of the semester as well.</li></ul> 

### Measuring the Sun Lab

For those interested in adding a Solar lab, [Harvard](https://astrolab.fas.harvard.edu/labs/) has some neat project-based labs that I would recommend looking into. 

One of my ideas for an introductory level lab was to measure the angular diameter of the Sun as well as the Sun's luminosity and temperature. This would involve three different activites:

- [Diameter: Pinhole Technique](https://astrolab.fas.harvard.edu/labs/measurement-of-the-suns-diameter-using-the-pinhole/)
- [Diameter: Timing Technique](https://astrolab.fas.harvard.edu/labs/measurement-of-the-suns-diameter-by-timing-its-motion/)
- [Luminosity & Temperature: Lightbulb Comparison](https://astrolab.fas.harvard.edu/labs/luminosity-and-temperature-of-the-sun/)

It would likely be a good idea to encourage groups to collaborate on performing the experiments, but have them take their own measurements (so in essence discuss with each other how to perform a task and then simultaneous take their measurements using their own set of tools). If constained by time, then the temperature calculation could be dropped. For day labs it might be useful to have a couple solar labs that are hands-on as well.

### Climate Change Lab ##
For one of our labs we once had a student working on a masters thesis in education stop by and run through a climate change lab with the students where they explored the topic using heat lamps, thermometers, and bottles filled with different things (e.g. air, water, CO2). It seemed like it could make for a good lab.

### Example Schedule
For night labs, here's a general schedule of labs that I would recommend:

|Week|Lab|Comments|
|---|---|---|
|1|Active Learning|
|2|Measuring the Sky|
|3|Observing the Sky|
|4|Navigating the Sky|
|5|Telescopes|May need to be shuffled around due to observing conditions and if the moon is visible.|
|6|Angular Size|For the remaining labs, consider adding a night observing activity for the last ~30 minutes of lab|

The first lab has a lot of material to cover in regards to the course, so doing anything other than the active learning lab is not really practical as material is going to have to be cut. The measuring, observing and navigating labs are designed to be a three-part sequence that gives students a basic understanding of night sky observing. The remaining labs are largely up to what the professor wants to emphasize.

## Websites
Below are some links to content that I developed with an explanation of each.

### [Planetary Data](http://homepage.divms.uiowa.edu/~bergerud/ASTR/Plots/planets.html)
An interactive Chart.js application showing properties of the planets in our solar system. Used in the Active Learning lab.

### [Quasar Data](http://homepage.divms.uiowa.edu/~bergerud/ASTR/Plots/Quasar/quasar.html)
An interactive D3 application showing the quasar spectra for the Redshift lab. Wavelengths have been converted to nanometers.

### Trivia Questions
These are some questions pulled or based on questions from previous exams.

- [Basic Astronomy](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Trivia/astro.html)
- [Stars](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Trivia/stars.html)
- [Galaxies](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Trivia/galaxies.html)
- [Planets](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Trivia/planets.html)
- [Life / Exoplanets](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Trivia/life.html)

### Old Labs
These are some websites I put together. They haven't been used or updated in a while and reflect my prior focus on astronomical content rather than active learning principles. Some of the links may be broken as content was taken down by others.

- [Galaxies](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Galaxies/galaxies.html)
- [Exoplanets](https://homepage.divms.uiowa.edu/~bergerud/ASTR/Exoplanets/exoplanets.html)