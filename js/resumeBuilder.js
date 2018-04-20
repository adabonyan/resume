//All inputs
var bio = {
	"name" : "oL@#$U aDAb@on(Y)<a>n",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "3152786755",
		"email" : "olu.adabonyan@gmail.com",
		"location" : "GA USA"
	},
	"skills" : ["Languages: HTML5, CSS3, JavaScript, Python", "Frameworks/Libraries: Bootstrap, jQuery, Backbonejs, Knockoutjs, Jasmine", "Others/Task runner: Git/GitHub, Grunt, Gulp"],
	"biopic" : "images/profileFoto.jpg"
};

var work = {
	"jobs" : [
		{
			"employer" : "Freelance",
			"title" : "Web Developer",
			"location" : "Georgia USA",
			"dates" : "04/2015 to Date",
			"description" : "Developed free apps hosted on github and website for schools"
		}
	]
};

var projects = {
	"projects" : [
		{
			"title" : "Udacity Front-End Web Developer course projects",
			"dates" : "11/2016 to 11/2017",
			"description" : "Developed apps using Backbonejs, Knockoutjs, Jasmine, Javascript etc",
			"images" : ""
		},

		{
			"title" : "School Management Modules",
			"dates" : "04/2015 to date",
			"description" : "Developed following modules: a) Payroll, b) Fees & " +
			"bills payment, c) Exams & Reports",
			"images" : ""
		}		
	]
};

var education = {
	"schools" : [
		{
			"name" : "Udacity",
			"location" : "California USA",
			"degree" : "Nanodegree",
			"dates" : "Nov 2016 - Nov 2017",
			"majors" : ["Front-End Web Developer"],
			"url" : "https://www.udacity.com/"
		}]
};

//remove special xters in name & write name properly
function inName(name) {
	name = name.replace(/[^a-zA-Z ]/g, "");

	var finalName;
	//trim() removes white spaces before & after names Not in between names
	name = name.trim();
    name = name.toLowerCase();
    var n = name.indexOf(" ");
 
    name = name.charAt(0).toUpperCase() + name.slice(1);
    var firstname = name.slice(0, n);
    var lastname = name.slice(n+1);
    lastname = lastname.toUpperCase();
    finalName = firstname + " " + lastname;
    	//don't use replaceWith() as this will change the class to default.
	$('#name').text(finalName);

}

var data = "%data%";

//functions to display all inputs
/*
NOTE: Never use for-in ex: for (work in works).
Always iterate using the object.length index
ex if works.length = x, use for (i = 0; i < x i++)
Or use works.forEach see MDN
*/

bio.display = function() {
	var formattedName = HTMLheaderName.replace(data, bio.name);
	var formattedRole = HTMLheaderRole.replace(data, bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
	$("#topContacts").append(formattedLocation);

	var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
	$("#topContacts").append(formattedEmail);	

	var formattedbioPic = HTMLbioPic.replace(data, bio.biopic);
	$("#header").append(formattedbioPic);

	var n, formattedSkill, mySkills;
	var length = bio.skills.length;

	if (length > 0) {
		$("#header").append(HTMLskillsStart);
		for (n = 0; n < length; n++) {
			formattedSkill = HTMLskills.replace(data, bio.skills[n]);
			$("#skills").append(formattedSkill);
		}
	}

	inName(bio.name);
};

work.display = function() {
	var length = work.jobs.length;
	var n;

	for (n = 0; n < length; n++) {
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace(data, work.jobs[n].employer);
		var title = HTMLworkTitle.replace(data, work.jobs[n].title);
		var formattedEmployerTitle = employer + title;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace(data, work.jobs[n].dates);
		$(".work-entry:last").append(formattedDates);

		var location = HTMLworkLocation.replace(data, work.jobs[n].location);
		$(".work-entry:last").append(location);

		var describe = HTMLworkDescription.replace(data, work.jobs[n].description);
		$(".work-entry:last").append(describe);
	}
};

projects.display = function() {
	var length = projects.projects.length;
	var n;

	for (n = 0; n < length; n++) {
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace(data, projects.projects[n].title);
		$(".project-entry:last").append(title);

		var dates = HTMLprojectDates.replace(data, projects.projects[n].dates);
		$(".project-entry:last").append(dates);

		var describe = HTMLprojectDescription.replace(data, projects.projects[n].
			description);
		$(".project-entry:last").append(describe);

		var len = projects.projects[n].images.length;
		var i;
		for (i = 0; i < len; i++) {
			image = HTMLprojectImage.replace(data, projects.projects[n].images[i]);
			$(".project-entry:last").append(image);
		}
	}
};

education.display = function() {
	var length = education.schools.length;
	var n;

	for (n = 0; n < length; n++) {
		$("#education").append(HTMLschoolStart);

		var schoolName = HTMLschoolName.replace(data, education.schools[n].name);
		$(".education-entry:last").append(schoolName);

		var local = HTMLschoolLocation.replace(data, education.schools[n].location);
		$(".education-entry:last").append(local);

		var degree = HTMLschoolDegree.replace(data, education.schools[n].degree);
		var dates = HTMLschoolDates.replace(data, education.schools[n].dates);
		var datesdegree = dates + "&nbsp" + degree;
		$(".education-entry:last").append(datesdegree);

		var majors = education.schools[n].majors[0];
		var len = education.schools[n].majors.length;
		var i;
		if (len > 0) {
			for (i = 1; i < len; i++) {
				majors = majors + "," + "&nbsp &nbsp" + education.schools[n].majors[i];
			}
		}
		var schoolMajor = HTMLschoolMajor.replace(data, majors);
		$(".education-entry:last").append(schoolMajor);
	}	
};

//display resume page
$("#main").append(bio.display);
$("#main").append(work.display);
$("#main").append(projects.display);
$("#main").append(education.display);

//add google map
var googleMap = googleMap;
$("#mapDiv").append(googleMap);
