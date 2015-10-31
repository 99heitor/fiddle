// Create a rectangle shaped path with its top left point at
// {x: 75, y: 75} and a size of {width: 75, height: 75}


var path = new Path.Rectangle({
	point: new Point({ angle: 30, length: 400}),
	size: [400, 400],
	strokeColor: 'black',
	strokeWidth : 10
});

function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	path.rotate(5);
}