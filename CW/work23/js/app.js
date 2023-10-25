document.getElementById('send').addEventListener('click', sendMessage);

function sendMessage() {
    let myMessage = document.forms[0].elements.message.value;
    //todo: validation
    addMessage(myMessage, 'user');
    startBotThinking();
}

function addMessage(message, user) {
    //get chat element
    const messageRow = createElement('p', '#chat', user);
    createElement('br', messageRow, '')
    createElement('span', messageRow, message);
    //push message
}

function startBotThinking() {
    const amountOfTime = Math.floor(Math.random() * 10) + 1;
    setTimeout(botMessaging, amountOfTime * 1000);
}

function botMessaging() {
    const messageIndex = Math.random();
    const botMessage = botMessages[messageIndex];
    addMessage(botMessage, 'bot');
}