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
    datalogger.deleteLog(datalogger.DeleteType.Full)
    datalogger.setColumnTitles(
    "w",
    "x",
    "y",
    "z"
    )
})
input.onButtonPressed(Button.B, function () {
    logging = false
    basic.showNumber(steps)
    basic.showIcon(IconNames.No)
})
let zAccel = 0
let yAccel = 0
let xAccel = 0
let wAccel = 0
let logging = false
let steps = 0
steps = 0
logging = false
basic.showIcon(IconNames.No)
datalogger.setColumnTitles(
"w",
"x",
"y",
"z"
)
loops.everyInterval(500, function () {
    if (wAccel > 1800) {
        steps += 1
    }
})
loops.everyInterval(100, function () {
    wAccel = input.acceleration(Dimension.Strength)
    xAccel = input.acceleration(Dimension.X)
    yAccel = input.acceleration(Dimension.Y)
    zAccel = input.acceleration(Dimension.Z)
    if (logging) {
        datalogger.log(
        datalogger.createCV("w", wAccel),
        datalogger.createCV("x", xAccel),
        datalogger.createCV("y", yAccel),
        datalogger.createCV("z", zAccel)
        )
    }
})
