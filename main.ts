function API (method: string, degree: number) {
    if (method == "GET") {
        radio.sendValue("GET", degree)
    } else {
        radio.sendValue("POST", degree)
    }
}
input.onButtonPressed(Button.A, function () {
    API("GET", 0)
})
input.onButtonPressed(Button.B, function () {
    API("POST", randint(0, 25))
})
radio.onReceivedValue(function (name, value) {
    if (name == "Temp") {
        Temp = value
        basic.showNumber(Temp)
    }
})
let Temp = 0
radio.setGroup(5)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
Temp = 0
basic.showString("Ready")
