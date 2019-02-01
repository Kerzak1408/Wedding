// Set the date we're counting down to
var countDownDate = new Date("Jul 13, 2019 15:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var secondsString = " sekúnd"
  if (seconds == 1 ) {
	  secondsString = " sekunda"
  }
  if (seconds > 1 && seconds < 5) {
	  secondsString = " sekundy"
  } 
  
  var minutesString = " minút "
  if (minutes == 1 ) {
	  minutesString = " minúta "
  }
  if (minutes > 1 && minutes < 5) {
	  minutesString = " minúty "
  } 
  
  var hoursString = " hodín "
  if (hours == 1 ) {
	  hoursString = " hodina "
  }
  if (hours > 1 && hours < 5) {
	  hoursString = " hodiny "
  } 
  
  var daysString = " dní "
  if (days == 1 ) {
	  daysString = " deň "
  }
  if (days > 1 && days < 5) {
	  daysString = " dni"
  } 
  document.getElementById("time-left").innerHTML = "KEDY: 13.07.2019 o 15:00 <br>...zostáva " + days + daysString + hours + hoursString + minutes + minutesString + "a " + seconds + secondsString
	

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function w3_open(content) {
  document.getElementById("main").style.marginLeft = "25%";
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("sideContent").innerHTML = content;
  document.getElementById("openNav1").style.display = 'none';
  document.getElementById("openNav2").style.display = 'none';
  document.getElementById("openNav3").style.display = 'none';  
  document.getElementById("closeNav").style.display = 'inline-block';
}

function w3_close() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("openNav1").style.display = "inline-block";
  document.getElementById("openNav2").style.display = "inline-block";
  document.getElementById("openNav3").style.display = "inline-block";
  document.getElementById("closeNav").style.display = 'none';
}