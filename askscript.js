const wrapper = document.getElementById("wrapper");
const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 14th of Feb!";
  gif.src = "images/ty.jpg";

  yesBtn.style.display = "none";   
  noBtn.style.display = "none"; 

  setTimeout(() => {
    gif.src = "images/yippee-cat.gif";   
  }, 3000); 
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();

  // Get screen width/height
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Limit so button stays fully visible
  const maxX = screenWidth - noBtnRect.width;
  const maxY = screenHeight - noBtnRect.height;

  // Random position anywhere on the screen
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Apply it
  noBtn.style.position = "fixed"; // important! so it moves relative to viewport
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});





