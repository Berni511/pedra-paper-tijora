radio.onReceivedNumber(function (receivedNumber) {
    recibido = true
    tu_mano = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    cuento = mi_mano + 1
    mi_mano = cuento % 3
    if (mi_mano == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mi_mano == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (mi_mano == 0) {
        basic.showIcon(IconNames.Scissors)
    }
})
input.onButtonPressed(Button.B, function () {
    escogido = true
    radio.sendNumber(mi_mano)
})
let escogido = false
let tu_mano = 0
let recibido = false
let cuento = 0
let mi_mano = 0
radio.setGroup(1)
mi_mano = 0
cuento = 0
basic.forever(function () {
    if (escogido == true && recibido == true) {
        if (mi_mano == tu_mano) {
            basic.showIcon(IconNames.Asleep)
        } else {
            if (mi_mano == 1 && tu_mano == 2) {
                basic.showIcon(IconNames.No)
            } else {
                if (mi_mano == 1 && tu_mano == 3) {
                    basic.showIcon(IconNames.Yes)
                } else {
                    if (mi_mano == 2 && tu_mano == 1) {
                        basic.showIcon(IconNames.Yes)
                    } else {
                        if (mi_mano == 2 && tu_mano == 3) {
                            basic.showIcon(IconNames.No)
                        } else {
                            if (mi_mano == 3 && tu_mano == 1) {
                                basic.showIcon(IconNames.No)
                            } else {
                                if (mi_mano == 3 && tu_mano == 2) {
                                    basic.showIcon(IconNames.Yes)
                                }
                            }
                        }
                    }
                }
            }
        }
        basic.pause(1000)
        basic.clearScreen()
    }
})
