"use strict";

function createElement(tagName, parentElement, content, attributes, handlers) {
  var parent;
  if (typeof parentElement === 'string') {
    parent = document.querySelector(parentElement);
  } else {
    parent = parentElement;
  }
  var element = document.createElement(tagName);
  if (content) {
    element.textContent = content;
  }
  for (var attribute in attributes) {
    if (attribute === 'className') {
      element.setAttribute('class', attributes[attribute]);
    } else {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }
  for (var eventName in handlers) {
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

/*

attributes = {
  type: '',
  value: '',
  id: '',
  ....
  .....
};


handlers = {
  click: () => {},
  focus: () => {}
  ...
};

*/