const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('msg');
const count = document.getElementById('char-count');
const errorMsg = document.querySelector(".error-msg");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

msg.addEventListener('input', () => {
    count.textContent = `(${msg.value.length}/200)`;
})

function showError(input, message) {
    const errorEle = input.nextElementSibling;
    errorEle.textContent = message;

}
function showSuccess(input) {
    const errorEle = input.nextElementSibling;
    errorEle.textContent = "";
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (username.value.trim() === "") {
        showError(username, "Username Required!!");
        isValid = false;
    } else if (username.value.trim().length < 3) {
        showError(username, "* Name cannot have less than 3 characters!!");
        isValid = false;
    } 

    if (email.value.trim() === "") {
        showError(email, "Email Required!!");
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        showError(email, "* Invalid Email Format!!");
        isValid = false;
    }
    if (msg.value.trim() === "") {
        showError(msg, "* Message Required!!");
        isValid = false;
    } else if (msg.value.trim().length < 10) {
        showError(msg, "* Message cannot have less than 10 characters!!");
        isValid = false;
    }

    if (isValid) {
        const popup = window.open("", "Form Data", "width=400,height=400");

        const popupStyle = document.getElementById('popup-style').innerHTML;
        popup.document.write(popupStyle);

        popup.document.write(`
            <h2>Form Submitted Successfully</h2>
            <p><strong>Name:</strong> ${username.value}</p>
            <p><strong>Email:</strong> ${email.value}</p>
            <p><strong>Message:</strong> ${msg.value}</p>
        `);
        popup.document.close();

        form.reset();
        count.textContent = "(0/200)";
    }
});

[username, email, msg].forEach(input => {
    input.addEventListener("input", () => {
        showSuccess(input);
    });
});