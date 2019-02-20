//thay hinh
var myImage = document.querySelector('img');
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'image.jpg') {
		myImage.setAttribute('src','images.jpg')
	} else {
		myImage.setAttribute('src','image.jpg');
	}
}
//hien ten
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Good morning ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Good evening ' + storedName;
}
 myButton.onclick = function(){
 	setUserName();
 }