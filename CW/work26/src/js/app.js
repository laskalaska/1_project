import { createElement } from "./domHelpers.js";
import { botMessages } from "./messages.js";
import '../css/style.scss';

document.getElementById('send').addEventListener('click', sendMessage);

function sendMessage() {
    let myMessage = document.forms[0].elements.message.value;

    if (validateData()) {
        addMessage(myMessage, 'user');
        startBotThinking();
    }
}

// const testfc = (a,b) => console.log(a,b); // testing ESlint

function validateData() {
    let hasEmptyInput = true;
    let myMessage = document.forms[0].elements.message;
    if (!myMessage.value) {
        hasEmptyInput = false;
        document.getElementById('error').classList.remove('hidden');
    } else {
        hasEmptyInput = true;
        document.getElementById('error').classList.add('hidden');
    }
    return hasEmptyInput;
}

function addMessage(message, user) {
    //get chat element
    const messageRow = createElement('p', '#chat', user);
    createElement('br', messageRow, '')
    createElement('span', messageRow, message);
    //push message
}

async function startBotThinking() {
    document.querySelector('[id=send]').setAttribute('disabled', '');
    const amountOfTime = Math.floor(Math.random() * 10) + 1;
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('[id=send]').removeAttribute('disabled');
            botMessaging();
            resolve();
        }, amountOfTime * 1000)
    });
    // setTimeout(botMessaging, amountOfTime * 1000);
}

function botMessaging() {
    const messageIndex = Math.floor(Math.random() * botMessages.length);
    const botMessage = botMessages[messageIndex];

    let myMessage = document.forms[0].elements.message.value.toLowerCase();
    if (myMessage.includes("my watch has ended")) {
        addMessage(botMessages[botMessages.length - 1], 'bot');
        stopBot();
    } else if (botMessage === botMessages[botMessages.length - 1]) {
        addMessage('I am out of battery', 'bot');
        addMessage(botMessage, 'bot');
        stopBot();
    } else {
        addMessage(botMessage, 'bot');
    }
}

function stopBot() {
    document.querySelector('[name=message]').setAttribute('disabled', '');
    document.querySelector('[id=send]').setAttribute('disabled', '');
}