let engineOn = false;
// add event listener to the DOM
window.addEventListener("keydown", (e) => {
  // start rotors when space key is pressed
  if (e.code == "Space")
  {
    document.querySelectorAll(".wings").forEach(function (wings) {
      wings.setAttribute("class", "started");
    });
    engineOn = true;
  }
});
