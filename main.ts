input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("retroceder")
    basic.showArrow(ArrowNames.South)
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("izquierda")
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("stop")
    basic.showIcon(IconNames.SmallSquare)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("derecha")
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("avanzar")
    basic.showArrow(ArrowNames.North)
})
radio.setGroup(160)
basic.forever(function () {
	
})
