// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  var rand=Math.floor((Math.random()*10)+1);
  return rand
}

// Function to check the user's guess
function checkGuess() {

  // Local variable
  let userGuess = document.getElementById("userGuess").value;
  let resultElement = document.getElementById("result");
  
  // If the answer is correct, then output "Congratulations! You guessed the correct number!" with picture2 and music2.
  if(userGuess==secretNumber){
    
    showImageAndPlaySound("picture2.jpeg", "music2.mp3")
    resultElement.appendChild(document.createElement("br"));
    resultElement.appendChild(document.createTextNode("Congratulations! You guessed the correct number!"));

  // If the answer is wrong, then output "Sorry, try again!" with picture1 and music1.
  }else{
    
    showImageAndPlaySound("picture1.jpeg", "music1.mp3")
    resultElement.appendChild(document.createElement("br"));
    resultElement.appendChild(document.createTextNode("Sorry, try again!"));
    
  }

  

  

  // P.S. Generate a new random number for the next round after getting the correct answer.

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(document.createTextNode("助教你把innerHTML 清空了 上面的output 要怎麼產生 上課時好像也沒有產生誒"));
  resultContainer.appendChild(document.createElement("br"));
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
