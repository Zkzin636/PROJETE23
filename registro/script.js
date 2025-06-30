

const form = document.getElementById('registro-form');
const usename = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    sucessesForm();
})
usename.addEventListener('blur', () => {
    validateusername();
})
email.addEventListener('blur', () => {
    validateEmail();
})
password.addEventListener('blur', () => {
    validatePassword();
})
confirmPassword.addEventListener('blur', () => {
    validateConfirmPassword();
}) 


function validateusername() {
    const usernameValue = usename.value;
    
    if (usernameValue === '') {
        errorInput(usename, 'Usuário obrigatório');
    } else {
        const formItem = usename.parentElement;
        formItem.className = 'input-box';
    }
}

function validateEmail() {
    const emailValue = email.value;

    if (emailValue === '') {
        errorInput(email, 'Email obriagatório');
    } else {
        const formItem = email.parentElement;
        formItem.className = 'input-box';
    }
}

function validatePassword() {
    const passwordValue = password.value;

    if (passwordValue === '') {
        errorInput(password, 'Senha obrigatória');
    } else if (passwordValue.length < 8) {
        errorInput(password, 'Senha deve ter no mínimo 8 caracteres');
    } else {
        const formItem = password.parentElement;
        formItem.className = 'input-box';
    }
}

function validateConfirmPassword() {
    const confirmPasswordValue = confirmPassword.value;
    const passwordValue = password.value;

    if (confirmPasswordValue === '') {
        errorInput(confirmPassword, 'Confirmação de senha obrigatória');
    } else if (confirmPasswordValue !== passwordValue) {
        errorInput(confirmPassword, 'As senhas não conferem');
    } else {
        const formItem = confirmPassword.parentElement;
        formItem.className = 'input-box';
    }
}

function sucessesForm() {

    validateusername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    
    const formItem = form.querySelectorAll('.input-box');

    const isValid = [...formItem].every((Item) => {
        return Item.className === 'input-box'
    });

    if (isValid) {
       alert('Registro realizado com sucesso!');
    } }




function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMenssage= formItem.querySelector('a');

    textMenssage.innerText = message;
    formItem.className = 'input-box error';
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        sucessesForm();

        const isValid = [...form.querySelectorAll('.input-box')].every(item => item.className === 'input-box');

        if (isValid) {
            const usuario = usename.value;
            const userEmail = email.value;
            const userSenha = password.value;

            // Obter usuários existentes
            const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

            // Verificar se o e-mail já foi cadastrado
            const existe = usuarios.find(user => user.email === userEmail);

            if (existe) {
                alert('Email já cadastrado!');
                return;
            }

            // Salvar novo usuário
            usuarios.push({
                usuario,
                email: userEmail,
                senha: userSenha
            });

            localStorage.setItem('usuarios', JSON.stringify(usuarios));
            alert('Registro realizado com sucesso!');
            window.location.href = 'login.html';
        }
    });
}


// Salvar no localStorage como JSON
localStorage.setItem("usuarioRegistrado", JSON.stringify(novoUsuario));


