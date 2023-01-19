// Første Teamoppgave: Inventory Filler!

// Dere skal ha en variabel som sparer på det dere klikker på
// - som et "inventory" i et spill.
// Man skal kunne se/skjule hva som er i inventoryen på en måte

// Hint til hva som brukes for å få dette til:
// Variabel
// Parameter
// Return
// */

// Variabler

// Funksjoner

const tacoContainer = document.getElementById("tacoContainer");
let chosenOrNot = false;
function selectImg(img) {
  let newDiv = document.createElement("img");
  newDiv.classList.add("newImg");
  newDiv.src = img.src;
  console.log(img.src);
  //   let newContent= document.createElement("img")
  tacoContainer.appendChild(newDiv);

  createElement = newDiv;
}
function showOrHideInv() {
  // document.getElementById("openTaco").src = "img/closedTaco.png";
  // openTaco.style.width = "60rem";

  // document.getElementById("openTaco").classList.add("rolledTaco");
  if (chosenOrNot === true) {
    chosenOrNot = false;
  } else if (chosenOrNot === false) {
    chosenOrNot = true;
  }
  console.log(chosenOrNot);
  rollUp(chosenOrNot);
}

function rollUp() {
  if (chosenOrNot === true) {
    document.getElementById("openTaco").src = "img/closedTaco.png";
  } else if (chosenOrNot === false) {
    document.getElementById("openTaco").src =
      "img/kisspng-roti-piadina-mexican-cuisine-corn-tortilla-stock-p-5ae39b03dcdd66.1788902215248657959047.png";
  }
}

// function selectImg(img) {
//   saveSpace += img.innerHTML;
// }

// let saveSpace = "";

// function show() {
//   document.getElementById("openTaco").innerHTML = saveSpace;
// }

// function rollUp() {
//   saveSpace = "";
//   document.getElementById("openTaco").innerHTML = saveSpace;
// }
