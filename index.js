/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timeString){
  let timeSplit = timeString.split(':');
  /*let newtime = (timeSplit[0]*1+(timeSplit[1]/60);
  let finalTime = parseInt(newTime);*/
  let getHour = parseInt(timeSplit[0]);
  alert(getHour)
  let getMinute = parseInt(timeSplit[1]);
  alert(getMinute)
  if (getHour<12){
    //displayMessage()
    return "Good Morning";
  } else if (getHour>17){
    return "Good Evening";
  }
  else return ("Good Afternoon")
}
/* Write your implementation of displayMessage() */
//function displayMessage(msg){
//document.getElementById("greeting").innerText =msg;
