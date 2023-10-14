class CreateAndRemoveHTMLElement {
    /**
     *
     * @param {string} tagName
     * @param {string|number} parentElement
     * @param {string} content
     * @param {object} attributes
     */
    constructor(tagName, parentElement, content = '', attributes = {}) {
        this.element = document.createElement(tagName);

        if (typeof parentElement === 'string') {
            this.appendTo(document.querySelector(parentElement));
        } else {
            this.appendTo(parentElement);
        }

        if (content) {
            this.element.textContent = content;
        }

        for (let attribute in attributes) {
            if (attribute === 'className') {
                this.element.setAttribute('class', attributes[attribute]);
            } else {
                this.element.setAttribute(attribute, attributes[attribute]);
            }
        }
    }

    appendTo(parent) {
        parent.appendChild(this.element);
    }

    addEventListener(eventName, handlerFunction) {
        this.element.addEventListener(eventName, handlerFunction);
    }

    cleanElement(element) {
        if (typeof element === 'string') {
            document.querySelector(element).innerHTML = '';
        } else {
            element.innerHTML = '';
        }
    }

    removeElement(element) {
        if (typeof element === 'string') {
            document.querySelector(element).remove();
        } else {
            element.remove();
        }
    }

}