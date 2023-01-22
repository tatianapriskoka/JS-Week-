let usernameInput = document.querySelector('.username__input');
let userpicInput = document.querySelector('.userpic__input');
let textInput = document.querySelector('.text__input');
let button = document.querySelector('.button');
let chatHidden = document.querySelector('.block-hidden');
let username = document.querySelector('.block-hidden__username');
let comment = document.querySelector('.block-hidden__comment');
let image = document.querySelector('.image');

button.addEventListener('click', showComment);
function showComment() {
    image.src = userpicInput.value;
    let usernameWords = usernameInput.value;
    let usernameLower = usernameWords.toLowerCase();
    let usernameChanged = usernameLower.trim();
    function capitalizeWords(usernameChanged) {
        return usernameChanged.replace(/(^|\s)\S/g, function (upperCase) { return upperCase.toUpperCase() })
    }
    username.textContent = capitalizeWords(usernameChanged);
    chatHidden.style.display = 'block';
    let commentWords = textInput.value;
    let spam = commentWords.replace(/viagra/ig, "***");
    comment.textContent = spam;

    button.addEventListener('click', function (event) {
        event.preventDefault();
    });
}