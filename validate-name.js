// Valida primeiro nome e nome completo

function validateFirstName(str) {
    const regex = new RegExp(/^[A-Z][a-zá-ù]+/g);

    return str.match(regex);
}

function validateFullname(name) {
    const regex = new RegExp(/([A-Z][a-zá-ù]+)\s([a-z]{2,3}\s)?/g);

    return name.match(regex);
}


const name = 'João Aparecido da Silva';

console.log(validateFirstName(name));
console.log(validateFullname(name));
;
