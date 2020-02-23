document.getElementById("nav-history").addEventListener("click", showHistory);
document
  .getElementById("nav-inspiration")
  .addEventListener("click", showInspiration);
document.getElementById("nav-home").addEventListener("click", returnHome);
document.getElementById("home-logo").addEventListener("click", returnHome);
document
  .getElementById("nav-aspiration")
  .addEventListener("click", showAspiration);
document
  .getElementById("nav-core-values")
  .addEventListener("click", showCoreValues);
document
  .getElementById("nav-honor-code")
  .addEventListener("click", showHonorCode);

document.getElementById("nav-location").addEventListener("click", showLocation);
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *

function returnHome() {
  showEveryElement();
  hideElement(document.getElementById("history"));
  hideElement(document.getElementById("inspiration"));
  hideElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("core-values"));
  hideElement(document.getElementById("honor-code"));
  hideElement(document.getElementById("location"));
}
function showLocation() {
  hideEveryElement();
  hideElement(document.getElementById("history"));
  hideElement(document.getElementById("inspiration"));
  showElement(document.getElementById("location"));
  hideElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("core-values"));
  hideElement(document.getElementById("honor-code"));
}

function showHonorCode() {
  hideEveryElement();
  hideElement(document.getElementById("history"));
  hideElement(document.getElementById("inspiration"));
  showElement(document.getElementById("honor-code"));
  hideElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("core-values"));
  hideElement(document.getElementById("location"));
}
function showCoreValues() {
  hideEveryElement();
  hideElement(document.getElementById("history"));
  hideElement(document.getElementById("inspiration"));
  showElement(document.getElementById("core-values"));
  hideElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("honor-code"));
  hideElement(document.getElementById("location"));
}

function showAspiration() {
  hideEveryElement();
  hideElement(document.getElementById("history"));
  hideElement(document.getElementById("inspiration"));
  showElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("core-values"));
  hideElement(document.getElementById("honor-code"));
  hideElement(document.getElementById("location"));
}

function showInspiration() {
  hideEveryElement();
  hideElement(document.getElementById("history"));
  showElement(document.getElementById("inspiration"));
  hideElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("core-values"));
  hideElement(document.getElementById("honor-code"));
  hideElement(document.getElementById("location"));
}

function showHistory() {
  hideEveryElement();
  showElement(document.getElementById("history"));
  hideElement(document.getElementById("inspiration"));
  hideElement(document.getElementById("aspiration"));
  hideElement(document.getElementById("core-values"));
  hideElement(document.getElementById("honor-code"));
  hideElement(document.getElementById("location"));
}

// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *
// *

function showEveryElement() {
  showElement(document.getElementById("clg-name"));
  showElement(document.getElementById("carousel-part"));
  showElement(document.getElementById("intro-notice"));
  showElement(document.getElementById("vision-mission"));
}

function hideEveryElement() {
  hideElement(document.getElementById("clg-name"));
  hideElement(document.getElementById("carousel-part"));
  hideElement(document.getElementById("intro-notice"));
  hideElement(document.getElementById("vision-mission"));
}


function hideElement(element) {
  element.classList.add("remove");
}
function showElement(element) {
  element.classList.remove("remove");
}
