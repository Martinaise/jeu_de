
// pour faire le regex ici (on utilise html,css,js)

// Récupérer les valeurs saisies dans les champs du formulaire
const inputs = document.querySelectorAll('input');


const patterns = {
    lastname: /^[a-zéèêàîïä\d ]{5,15}$/i,
    firstname: /^[a-z\d ]{5,15}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
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


