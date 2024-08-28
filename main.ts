input.onPinPressed(TouchPin.P0, function () {
	
})
let botaonaopressionado = true
basic.forever(function () {
    while (botaonaopressionado) {
        if (input.pinIsPressed(TouchPin.P0)) {
            basic.showString("\"A\"")
            music.ringTone(0)
            botaonaopressionado = false
        } else {
        	
        }
    }
})
