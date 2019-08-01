var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 18; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var updateClock = function ()
{
  // Grab the tags with id timeEvent
  var timeEventJS = document.getElementById("timeEvent");
  // Grab the HTML image with id lolcal
  var lolCatImage = document.getElementById("lolcat");
  // set default image
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

  if (time == partyTime) {
    messageText = "IZ PARTEE TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  }
  else if (time == napTime) {
    messageText = "IZ NAP TIME...";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
  }
  else if (time == lunchTime) {
    messageText = "IZ NOM NOM NOM TIME!!";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
  }
  else if (time == wakeupTime) {
      messageText = "IZ TIME TO GETTUP.";
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  }
  else if (time < noon) {
      messageText = "Good morning!";
  }
  else if (time > evening) {
      messageText = "Good Evening!";
  }
  else {
      messageText = "Good afternoon!";
  }

  timeEventJS.innerText = messageText;
  lolCatImage.src = image;
  showCurrentTime();
};


var showCurrentTime = function() {
  // display the string on the webpage
  var clock = document.getElementById('clock');
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
  if (hours >= noon) {
        meridian = "PM";
  }
  if (hours > noon) {
      hours = hours - 12;
  }
  // Set Minutes
  if (minutes < 10)
  {
      minutes = "0" + minutes;
  }
  // Set Seconds
  if (seconds < 10)
  {
      seconds = "0" + seconds;
  }
  // put together the string that displays the time
  var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
  clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var  partyTimeButtonJS = document.getElementById("partyTimeButton");

var partyEvent = function()
{
	if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
		partyTimeButtonJS.innerText = "Party Over!";
    //document.getElementById("partyTimeButton").style.background = "#0A8DAB";
    partyTimeButtonJS.style.backgroundColor = "#0A8DAB";
	}
	else {
		isPartyTime = false;
		time = new Date().getHours();
		partyTimeButtonJS.innerText = "PARTY TIME!";
    //document.getElementById("partyTimeButton").style.background = "#222";
    partyTimeButton.style.backgroundColor = "#222";
	}
};

partyTimeButtonJS.addEventListener("click", partyEvent);

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var setWakeUpTime = function()
{
	wakeupTime = wakeUpTimeSelector.value;
};
var setLunchTime = function()
{
  lunchTime = lunchTimeSelector.value;
}
var setNapTime = function()
{
  napTime = napTimeSelector.value;
}

wakeUpTimeSelector.addEventListener('change', setWakeUpTime);
lunchTimeSelector.addEventListener('change', setLunchTime);
napTimeSelector.addEventListener('change', setNapTime);
