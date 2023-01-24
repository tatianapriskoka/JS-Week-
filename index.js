const usernameInput = document.querySelector('.form__input');
const userpicInput = document.querySelector('.userpic__input');
const textInput = document.querySelector('.text__input');
const button = document.querySelector('.button');
const chatHidden = document.querySelector('.block-hidden');
const username = document.querySelector('.block-hidden__username');
const comment = document.querySelector('.block-hidden__comment');
const image = document.querySelector('.image');

button.addEventListener('click', showComment);
function showComment() {
    image.src = userpicInput.value;
    let usernameWords = usernameInput.value;
    let usernameLower = usernameWords.toLowerCase();
    let usernameChanged = usernameLower.trim();
    username.textContent = capitalizeWords(usernameChanged);
    chatHidden.style.display = 'block';
    let commentWords = textInput.value;
    let spam = commentWords.replace(/viagra/ig, "***");
    comment.textContent = spam;

    button.addEventListener('click', function (event) {
        event.preventDefault();
    });
}
function capitalizeWords(usernameChanged) {
    return usernameChanged.replace(/(^|\s)\S/g, function (upperCase) { return upperCase.toUpperCase() })
}