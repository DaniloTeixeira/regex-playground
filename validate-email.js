
// Valida e-mail

function validateEmail(email) {
    const regex = new RegExp(/\w+\S\w+[@]\w+[.]\w{2,3}([.]\w{2})?/g);

    return email.match(regex);
}

const email = 'danilo@email.com';

console.log(validateEmail(email))

