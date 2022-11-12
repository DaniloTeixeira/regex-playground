// Valida número de telefone
const regex = new RegExp(/\d{2}[-]?[ ]?\d{4,5}[-]?[ ]?\d{4}/g);

function validatePhoneNumber(str) {
    // Verifica se há correspondência e retorna um booleano
    // return regex.test(str);

    // Retorna array de string com as correspondências
    return str.match(regex);
}

const testStr = 'askfjahksdfjaskdfjahskdfjashkj askfaskfjhaskfjahskdfjashkdfjash 11999999999 asdfasdfjahksfjhaksfdja 11-9999-9999 asdfasdkfjahskdfjahskdfja 11-99999-9999 asfkjhaksfjhaskfjahskf 11 99999 9999';

console.log(validatePhoneNumber(testStr));