const usernameInput = document.querySelector('.form__input');
const userpicInput = document.querySelector('.userpic__input');
const textInput = document.querySelector('.text__input');
const button = document.querySelector('.button');
const chatHidden = document.querySelector('.block-hidden');
const image = document.querySelector('.image');

const fotoGroup = ['./images/foto1.jpg', './images/foto2.jpg', './images/foto3.jpg', './images/foto4.jpg', './images/foto5.jpg', './images/foto6.jpg'];
function randomFoto() {
    let random = Math.floor(Math.random() * fotoGroup.length);
    return fotoGroup[random];
}

function makeTime() {
    let time = new Date;
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
    return time.toLocaleDateString('ru', options);
}

const makeComment = () => {
    /*let message = document.createElement('div');
    message.className = 'message';
    chatHidden.append(message); */

    let messageTime = document.createElement('div');
    messageTime.className = 'message-time';
    messageTime.textContent = makeTime();
    chatHidden.prepend(messageTime);

    let messageName = document.createElement('div');
    messageName.className = 'message-name';
    if (usernameInput.value !== '') {
        messageName.textContent = checkName(usernameInput.value);
    } else {
        messageName.textContent = 'username';
    }
    chatHidden.prepend(messageName);

    let messageFoto = document.createElement('img');
    messageFoto.className = 'message-foto';
    if (userpicInput.value !== '') {
        messageFoto.src = userpicInput.value;
    } else {
        messageFoto.src = randomFoto();
    }
    chatHidden.prepend(messageFoto);

    let messageText = document.createElement('div');
    messageText.className = 'message-text';
    messageText.textContent = checkSpam(textInput.value);
    chatHidden.prepend(messageText);

};

const clearForm = () => {
    usernameInput.value = '';
    userpicInput.value = '';
    textInput.value = '';
};

const checkSpam = (string) => {
    let spam = string.replace(/viagra|негодяй|мерзавец/gi, '***');
    return spam;
};

const checkName = (name) => {
    let userName = name;
    userName = userName.trim().split(' ');

    let changedName = [];

    userName.forEach((element) => {
        newName = element[0].toUpperCase() + element.slice(1).toLowerCase();
        changedName.push(newName);
    });

    let perfectName = changedName.join(' ');
    return perfectName;
};

button.addEventListener('click', () => {
    makeComment();
    clearForm();
});