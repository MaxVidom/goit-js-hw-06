const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені");
    }
    
    const user = {
        email: email.value,
        password: password.value,
    }
    console.log(user);
    event.currentTarget.reset();
})
