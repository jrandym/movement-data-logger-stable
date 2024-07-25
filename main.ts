datalogger.onLogFull(function () {
    logging = false
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    logging = true
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.AB, function () {
    logging = false
    basic.showIcon(IconNames.Skull)
    datalogger.deleteLog()
    datalogger.setColumnTitles(
    "x",
    "y",
    "z"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showIcon(IconNames.No)
    basic.showNumber(shakes)
})
input.onGesture(Gesture.Shake, function () {
    shakes += 1
})
let logging = false
let shakes = 0
shakes = 0
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"x",
"y",
"z"
)
loops.everyInterval(100, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("x", input.acceleration(Dimension.X)),
        datalogger.createCV("y", input.acceleration(Dimension.Y)),
        datalogger.createCV("z", input.acceleration(Dimension.Z))
        )
    }
})
