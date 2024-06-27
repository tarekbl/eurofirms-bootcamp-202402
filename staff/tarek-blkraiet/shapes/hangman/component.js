class Component {
    constructor(tagName) {
        this.container = document.createElement(tagName)
    }

    setId(id) {
        this.container.id = id
    }
    setText(text) {
        this.container.innerText = text
    }

    add(Component) {
        if (!(Component instanceof Component)) throw new TypeError('component is nit a component')

        this.container.appendChild(Component.container)
    }
    remove(component) {
        if (!(component instanceof Component)) throw new TypeError('component is not a component')

        this.container.removeChild(component.container)
    }
    setStyle(property, value) {
        this.container.style[property] = value
    }
}