
/* 
    Brincando com RegExp

    Documentação:
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
*/



// Validar nome próprio
const validateName = new RegExp(/[A-Z][a-zá-ù]+/g);
// ou
const validateName2 = new RegExp(/[A-Z][a-z]{1,}/g);

// Valida nome completo
const validateFullname = new RegExp(/([A-Z]{1}[a-zá-ù]+)?([A-Z]{1}[a-zá-ù]+) ([a-z]{2,3})?(\s)?([A-Z]{1}[a-zá-ù]+)?(\s)?([a-z]{2,3})? ([A-Z]{1}[a-zá-ù]+)?/g);

// Validar e-mail
const validateEmail = new RegExp(/\w+\S\w+[@]\w+[.]\w{2,3}([.]\w{2})?/g);
//ou modelo genérico
const validateEmail2 = new RegExp(/\S+[@]\S+\.\S+/g);

// Validar CPF
const validateCPF = new RegExp();

// Validar CNPJ
const validateCNPJ = new RegExp();

// akfjhasdkfjahskfjahsdfkajsfh Danilo Rodrigues Teixeira aksdjhakdfjhakfadfasdjk Mariana Soares de Macedo kjadfkjadfhkajhdfkajdhfak Paulo dos Santos Silva asdflkajsdlfkasjdflaksdfjla João da Silva dos Santos asfasdlfkasjflkjasdlfkl Paulo Dias lkfalsfkjalfkjasldajslkfasdj