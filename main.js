const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['oNe', 'TwO'];
const messages = ["super", "great!"]

const LCPasswords = passwords.map(password => password.toLowerCase());

const showMessage = (e) => {
    const textInput = e.target.value.toLowerCase();
    div.textContent = "";
    for (let i = 0; i < LCPasswords.length; i++) {
        if (textInput === LCPasswords[i]) {
            div.textContent = messages[i];
            e.target.value = '';
        }
    }

}

input.addEventListener("input", showMessage)

input.addEventListener('focus', (e) => {
    e.target.classList.add("active");
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove("active");
})