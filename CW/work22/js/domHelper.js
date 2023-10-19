// class CreateAndRemoveHTMLElement {
//     /**
//      *
//      * @param {string} tagName
//      * @param {string|number} parentElement
//      * @param {string} content
//      * @param {object} attributes
//      */
//     constructor(tagName, parentElement, content = '', attributes = {}) {
//         this.element = document.createElement(tagName);
//
//         if (typeof parentElement === 'string') {
//             this.appendTo(document.querySelector(parentElement));
//         } else {
//             this.appendTo(parentElement);
//         }
//
//         if (content) {
//             this.element.textContent = content;
//         }
//
//         for (let attribute in attributes) {
//             if (attribute === 'className') {
//                 this.element.setAttribute('class', attributes[attribute]);
//             } else {
//                 this.element.setAttribute(attribute, attributes[attribute]);
//             }
//         }
//     }
//
//     appendTo(parent) {
//         parent.appendChild(this.element);
//     }
//
//     addEventListener(eventName, handlerFunction) {
//         this.element.addEventListener(eventName, handlerFunction);
//     }
//
//     cleanElement(element) {
//         if (typeof element === 'string') {
//             document.querySelector(element).innerHTML = '';
//         } else {
//             element.innerHTML = '';
//         }
//     }
//
//     removeElement(element) {
//         if (typeof element === 'string') {
//             document.querySelector(element).remove();
//         } else {
//             element.remove();
//         }
//     }
//
// }

function createElement(tagName, parentElement, content, attributes, handlers) {
    let parent;
    if (typeof parentElement === 'string') {
        parent = document.querySelector(parentElement);
    } else {
        parent = parentElement;
    }

    const element = document.createElement(tagName);

    if (content) {
        element.textContent = content;
    }

    for (let attribute in attributes) {
        if (attribute === 'className') {
            element.setAttribute('class', attributes[attribute]);
        } else {
            element.setAttribute(attribute, attributes[attribute]);
        }
    }

    for (let eventName in handlers) {
        element.addEventListener(eventName, handlers[eventName]);
    }

    parent.appendChild(element);

    return element;
}

function cleanElement(element) {
    if (typeof element === 'string') {
        document.querySelector(element).innerHTML = '';
    } else {
        element.innerHTML = '';
    }
}

function removeElement(element) {
    if (typeof element === 'string') {
        document.querySelector(element).remove();
    } else {
        element.remove();
    }
}