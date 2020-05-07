const input = document.querySelector("input");
const div = document.querySelector('div');
const passwords = ['oNe', 'TwO'];
const messages = ["super", "great!"]

passwords.forEach((password, i) => {
    passwords[i] = password.toLowerCase();
})


const showMessage = (e) => {
    div.textContent = '';
    const text = e.target.value.toLowerCase();
    passwords.forEach((password, index) => {
        if (password === text) {
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