/* 
    Praticando RegExp

    Documentação:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
*/

// Valida número de telefone
function validatePhoneNumber(str) {
    const phoneRegex = new RegExp(/\d{2}[-]?[ ]?\d{4,5}[-]?[ ]?\d{4}/g);

    // Retorna array de string com as correspondências
    return phoneRegex.test(str);

    // Verifica se há correspondência e retorna um booleano
    return str.match(phoneRegex);
}

const testStr = 'askfjahksdfjaskdfjahskdfjashkj askfaskfjhaskfjahskdfjashkdfjash 11999999999 asdfasdfjahksfjhaksfdja 11-9999-9999 asdfasdkfjahskdfjahskdfja 11-99999-9999 asfkjhaksfjhaskfjahskf 11 99999 9999';

console.log(validatePhoneNumber(testStr));