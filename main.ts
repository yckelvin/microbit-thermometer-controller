function API (method: string, degree: number) {
    if (method.compare("GET") == 0) {
        radio.sendString("GET")
        basic.showString("G")
    } else if (method.compare("POST") == 0) {
        radio.sendValue("POST", degree)
        basic.showString("P")
    }
}
input.onButtonPressed(Button.A, function () {
    API("GET", 0)
})
input.onButtonPressed(Button.B, function () {
    API("POST", randint(0, 25))
})
radio.onReceivedValue(function (name, value) {
    if ("returnTemp".compare(name) == 0) {
        Temp = value
        basic.showNumber(Temp)
    }
})
let Temp = 0
radio.setGroup(120)
radio.setTransmitSerialNumber(true)
radio.setTransmitPower(7)
Temp = 0
