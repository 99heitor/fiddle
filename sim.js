// Create a rectangle shaped path with its top left point at
// {x: 75, y: 75} and a size of {width: 75, height: 75}

var path = new Path.Rectangle({
	size: [75, 75],
	strokeColor: 'black',
	strokeWidth: 40
});

var rec = new Rectangle([10,10],[125,125]);

var path2 = new Path.RoundRectangle(rec, [50,50]);
path2.strokeColor = 'black';
path2.strokeWidth = 10;

function onFrame(event) {
	// Each frame, rotate the path by 3 degrees:
	path.rotate(3);
}

function onResize(event) {
    // Whenever the view is resized, move the path to its center:
    path.position = view.center;
    path2.position = view.center
}