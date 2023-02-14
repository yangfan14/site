const mottos = ["Keep your own pace towards success, and do not be overly anxious about external environment.", 
"Be yourself! Everyone is unique. Keep doing what you think is valuable.",
 "Frameworks are higher order functions based on programming basics. They are similar to the various tools we human make along history. We can better realize what else we are able to acheive and how far we can go with the '0's and '1's. Maybe eventually we will find that the answer is everything.", 
"Business is not just in markets. Seeking a job is pretty much a \"business\": The employer is in the condition to choose from a number of candidates, and you are in the condition to try your best to \"sell\" yourself.", 
"Just like computer science, we humans also consist data and algorithms. Data are stored in our memories, and algorithms are our abilities and skills. Maybe this is why computers are initially called \"electric brains\" in China.",
 "All is data! The problem is how to pick userful data and organize data for better use.",
"Entry level engineers are expected to have the ability to perform basic tasks, produce small components, or write basic functions, and it is the responsibility of managers / senior engineers to decide and teach them how to put / organize things together.",
"Always make good use of trouble shooting / bugs fixing experience! I usually learn twice deeper than normal learning."
]

$(document).ready(function(){
  var e = document.getElementById("thinkings");

  counter = 0;
  e.textContent = mottos[counter++];
  e.addEventListener("click", changeText);
  function changeText() {
    e.textContent = mottos[counter];
    counter = (counter + 1) % 8;
  }

  e.addEventListener("mouseover", showHover);
  function showHover() {
    var box = document.getElementById("show_hover");
    box.style.opacity = 1;
  }
  
  e.addEventListener("mouseout", hideHover);
  function hideHover() {
    var box = document.getElementById("show_hover");
    box.style.opacity = 0;
  }
});