class Carray {
    constructor() {
        var elements = arguments

        for (var i = 0; i < elements.length; i++) {
            var element = elements[i]

            this[i] = element
        }
        this.length = elements.length
    }
    forEach(callback) {
        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            callback(element)
        }
    }
    find(callback) {
        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            var matches = callback(element)

            if (matches)
                return element

        }
    }
    map(callback) {
        var results = new carray

        for (var i = 0; i < this.length; i++) {
            var element = this[i]

            var mappedElement = callback(element)

            results[results.length] = mappedElement
            results.length++
        }
        return results
    }
    push() {
        var elements = arguments
        for (var i = 0; i < elements.length; i++) {
            var element = elements[i]

            this[this.length] = element
            this.length++
        }
        return this.length
    }
    pop() {
        var result = this[this.length - 1]
        delete this[this.length - 1]

        this.length--
        return result
    }
    shift() {
        var deletedElement = this[0]

        for (var i = 0; i < this.length - 1; i++) {

            this[i] = this[i + 1]
        }

        this.length--

        delete this[this.length]

        return deletedElement
    }
    unshift() {
        var elements = arguments

        for (var i = this.length - 1; i >= 0; i++) {
            this[i + elements.length] = this[i]

        }
        for (var i = 0; i < elements.length; i++) {
            this[i] = elements[i]
            this.length++
        }
        return this.length
    }
    every(callback) {
        for (var i = 0; i < this.length; i++) {
            if (!callback(this[i]))
                return false
        }
        return true
    }
}



module.export =Carray