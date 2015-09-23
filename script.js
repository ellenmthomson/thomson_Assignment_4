//Ellen Thomson Week 4 assignment Web Dev 2

var author1 = {
    'name': "Churchhill",
    'year': 1940,
    'bce': false
};

var author2 = {
    'name': "Ghandi",
    'year': 1942,
    'bce': false
};

var author3 = {
    'name': "Demosthenes",
    'year': 342,
    'bce': true
};


var arraySpeeches = [
	"Author1",
	"Author2",
	"Author3"
];

var yearsApart = author2.year - author1.year;


console.log("Ghandi's speech and Churchill's speech are " + yearsApart + " years apart.");



document.getElementById('BtnDonate').addEventListener('click', function(){
  	console.log ("There are" + arraySpeeches.length + "speeches on this page");
});	


document.getElementById('BtnChurchill').addEventListener('click', function() {
	console.log("This speech was written by " + author1.name + " in " + author1.year + ". It is " + author1.bce + " that this year is B.C.E.");
});	
	
	
document.getElementById('BtnGhandi').addEventListener('click', function() {
	console.log("This speech was written by " + author2.name + " in " + author2.year + ". It is " + author2.bce + " that this year is B.C.E.");
});	
	
document.getElementById('BtnDemosthenes').addEventListener('click', function() {
	console.log("This speech was written by " + author3.name + " in " + author3.year + ". It is " + author3.bce + " that this year is B.C.E.");
});	
	

