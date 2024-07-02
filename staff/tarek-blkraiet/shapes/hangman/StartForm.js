class startForm extends Form {
    constructor() {
        super()

        this.setStyle('display', 'flex')
        this.setStyle('gap', '10px')


        const wordLabel = new wordLabel
        wordLabel.setFor('words')
        wordLabel.setText('words')
        this.add(wordsLabel)

        const wordsInput = new Input
        wordsInput.setId('words')
        wordsInput.setType('password')
        this.add(wordsInput)

        this.wordsInput = wordsInput

        const startButton = new startButton
        startButton.setType('submit')
        startButton.setText('start')
        this.add(startButton)

    }

    onSubmit(callback) {
        super.onsubmit(event => {
            event.preventDefault()

            const words = this.wordsInput.getValue()

            this.reset()

            callback(words)


        })
    }
}