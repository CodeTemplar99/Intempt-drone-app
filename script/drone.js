let engineOn = false;
// add event listener to the DOM
window.addEventListener("keydown", (e) => {
	// start rotors when space key is pressed
	if (e.code == "Space") {
		document.querySelectorAll(".wings").forEach(function (wings) {
			wings.setAttribute("class", "started");
		});
		engineOn = true;
	}

	if (engineOn) {
		// upward control
		if (e.key == "ArrowUp" && drone.element.style.top > "0%") {
			moveDrone(0, -1);
		}

		// downward control
		if (e.key == "ArrowDown") {
			moveDrone(0, 1);
		}

		// right control
		if (e.key == "ArrowRight" && drone.element.style.left < "95%") {
			document.querySelectorAll(".wingboxes").forEach(function (wingbox) {
				wingbox.setAttribute("class", "tilt_rRotor");
				document.querySelector("#drone_box").setAttribute("class", "bankRight");
				moveDrone(1, 0);
			});
			setTimeout(() => {
				document.querySelectorAll(".tilt_rRotor").forEach(function (wingbox) {
					wingbox.setAttribute("class", "wingboxes");
				});

				document
					.querySelector("#drone_box")
					.removeAttribute("class", "bankRight");
			}, 1000);
		}

		// right control
		if (e.key == "ArrowLeft" && drone.element.style.left > "0%") {
			document.querySelectorAll(".wingboxes").forEach(function (wingbox) {
				wingbox.setAttribute("class", "tilt_lRotor");
				document.querySelector("#drone_box").setAttribute("class", "bankLeft");
				moveDrone(-1, 0);
			});
			setTimeout(() => {
				document.querySelectorAll(".tilt_lRotor").forEach(function (wingbox) {
					wingbox.setAttribute("class", "wingboxes");
				});
				document
					.querySelector("#drone_box")
					.removeAttribute("class", "bankLeft");
			}, 1000);
		}
	}
});

let droneCoord = document.getElementById("drone_box").getBoundingClientRect();

// drone object and properties
let drone = {
	y: droneCoord.y,
	x: droneCoord.x,
	speed: 20,
	element: document.getElementById("drone_box"),
};

// function to manipulate drone top and left positions
let moveDrone = function (dx, dy) {
	drone.y += (dy || 0) * drone.speed;
	drone.x += (dx || 0) * drone.speed;
	drone.element.style.top = drone.y + "px";
	drone.element.style.left = drone.x + "px";
};

// determine drone positoning at interval
setInterval(() => {
	moveDrone();
}, 1000 / 24);
