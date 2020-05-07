const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['oNe', 'TwO'];
const messages = ["super", "great!"]

const showMessage = (e) => {
    div.textContent = '';
    const text = e.target.value;
    passwords.forEach((password, index) => {
        if (password.toUpperCase() === text.toUpperCase()) {
            div.textContent = messages[index];
            e.target.value = '';
        }
    })

}

input.addEventListener("input", showMessage)

input.addEventListener('focus', (e) => {
    e.target.classList.add("active");
})
input.addEventListener('blur', (e) => {
    e.target.classList.remove("active");
})