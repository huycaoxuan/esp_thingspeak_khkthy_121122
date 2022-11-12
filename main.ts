basic.showIcon(IconNames.Happy)
while (!(ESP8266ThingSpeak.isWifiConnected())) {
    ESP8266ThingSpeak.connectWifi(
    SerialPin.P13,
    SerialPin.P14,
    BaudRate.BaudRate115200,
    "haanh",
    "Haminh101"
    )
    basic.pause(2000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Chessboard)
}
if (ESP8266ThingSpeak.isWifiConnected()) {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
    ESP8266ThingSpeak.connectThingSpeak(
    "api.thingspeak.com",
    "RYS3R5YH9P27PRWN",
    input.temperature(),
    input.lightLevel(),
    0,
    0,
    0,
    0,
    0,
    0
    )
    basic.pause(2000)
    if (ESP8266ThingSpeak.isThingSpeakConnected()) {
        basic.showIcon(IconNames.Triangle)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
