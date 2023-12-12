class ValidateForm {
    constructor() {
        this.form = document.querySelector('.form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const validFields = this.checkFields();
        const validPassword = this.checkPassword();

        if(validFields && validPassword) {
            alert('Formulário enviado!');
            this.form.submit();
        }
    }

    checkPassword() {
        let valid = true;

        const password = this.form.querySelector('.password');
        const repeatPassword = this.form.querySelector('.repeat-password');

        if(password.value !== repeatPassword.value) {
            valid = false;
            this.createError(password, 'Campos de senha precisam serem iguais!');
            this.createError(repeatPassword, 'Campos de senha precisam serem iguais!');
        }

        if(password.value.length < 6 || password.value.length > 12) {
            valid = false;
            this.createError(password, 'Senha precisa ter entre 6 e 12 caracteres!');
        }

        return valid;
    }

    checkFields() {
        let valid = true;

        for(let errorText of this.form.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for(let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;

            if(!field.value) {
                this.createError(field, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if(field.classList.contains('cpf')) {
                if(!this.validateCPF(field)) valid = false;
            }

            if(field.classList.contains('user')) {
                if(!this.validateUser(field)) valid = false;
            }
        }

        return valid;
    }

    validateCPF(field) {
        const cpf = new ValidaCPF(field.value);

        if(!cpf.valida()) {
            this.createError(field, 'CPF inválido!');
            return false;
        }

        return true;
    }

    validateUser(field) {
        const user = field.value;
        let valid = true

        if(user.length < 3 || user.length > 12) {
            this.createError(field, 'Usuário precisa ter entre 3 e 12 caracteres!');
            valid = false;
        }

        if(!user.match(/[a-zA-Z0-9]+$/g)) {
            this.createError(field, 'Nome de usuário precisar conter apenas letras e/ou números!')
            valid = false;
        }

        return valid;
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend', div);
    }
}

const valid = new ValidateForm();