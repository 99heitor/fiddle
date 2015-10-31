// Create a rectangle shaped path with its top left point at
// {x: 75, y: 75} and a size of {width: 75, height: 75}

var path = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'black',
	strokeWidth: 40
});

function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	path.rotate(3);
}

function onResize(event) {
    // Whenever the view is resized, move the path to its center:
    path.position = view.center;
}