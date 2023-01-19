/*
Første Teamoppgave: Inventory Filler!

Dere skal ha en variabel som sparer på det dere klikker på 
- som et "inventory" i et spill.
Man skal kunne se/skjule hva som er i inventoryen på en måte

Hint til hva som brukes for å få dette til:
Variabel
Parameter
Return 
*/

// Variabler

// Funksjoner
const tacoContainer = document.getElementById("tacoContainer");
function selectImg(img) {
  let newDiv = document.createElement("img");
  newDiv.classList.add("newImg");
  newDiv.src = img.src;
  console.log(img.src);
  //   let newContent= document.createElement("img")
  tacoContainer.appendChild(newDiv);

  createElement = newDiv;

  console.log(createElement);
}
function showOrHideInv() {}

/* // Create a new div element
var newDiv = document.createElement("div");

// Add some content to the div
var newContent = document.createTextNode("Hello World!");
newDiv.appendChild(newContent);

// Add the new div to the document
document.body.appendChild(newDiv); */
