// Set the date we're counting down to
var countDownDate = new Date("Jul 13, 2019 16:00:00").getTime();

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
  document.getElementById("time-left").innerHTML = "KEDY: 13.07.2019 <br>...zostáva " + days + daysString + hours + hoursString + minutes + minutesString + "a " + seconds + secondsString
	

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);