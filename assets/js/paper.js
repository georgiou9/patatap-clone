
var circles = []

function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height)
    var randomPoint = Point.random()
    var point = maxPoint * randomPoint
    var newCircle = new Path.Circle(point, 150)
    newCircle.fillColor = "#40e0d0"
    circles.push(newCircle)
    
}

function onFrame(event) {
    for (var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1
        circles[i].scale(0.93)
    }
}
