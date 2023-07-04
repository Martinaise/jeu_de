
// pour faire le regex

const inputs = document.querySelectorAll('input');


const patterns = {
    fistname: /^[a-z\d]{5,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    telephone: /^\d{10}$/,
};

const validate = (field, regex) => {
    const valide = regex.test(field.value);
    if (valide) {
        field.className = 'valide';
    } else {
        field.className = 'invalide';
    }
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});


