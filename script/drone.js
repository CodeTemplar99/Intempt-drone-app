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
	}
});

// get the initial position of the drone
let droneCoord = document.getElementById("drone_box").getBoundingClientRect();

// drone object and properties
let drone = {
	y: droneCoord.y,
	speed: 20,
	element: document.getElementById("drone_box"),
};

//
let moveDrone = function (dy) {
	drone.y += (dy || 0) * drone.speed;
	drone.element.style.top = drone.y + "px";
};

// determine drone positoning at intervals
setInterval(() => {
	moveDrone();
}, 1000 / 24);
