## Principais regras RgExp

## Playground RegEx - https://regexcrossword.com/

### Flags

ignore case (/expression/i) - transforma a expressão em case-insensitive

global search (/expression/g) - busca no conteúdo inteiro

multiline (/expression/g) - busca por múltiplas linhas, quando está habilitado, 
                            as âncoras de início e fim (^ e $), vão corresponder 
                            ao início e fim de uma linha, ao invés do texto inteiro

unicode (/expression/n) - corresponde a um unicode hexadecimal específico, sempre deve 
                          ser passado 4 dígitos hexadecimais  

sticky (/expression/y) -  

dotall - (/expression/s) - corresponde com qualquer caractere, incluindo nova linha

\ -  caractere de escape para busca de algum caracter especial específico específico

### Meta Caracteres

\d - dígitos de 0 a 9

\s - Corresponde a um espaço

\w - qualquer caracter maiúsculo ou minúsculo qualquer ou dígito 0-9

\D - corresponde a caractere que não é um dígito

\S - corresponde a um caractere que não é um espaço

\W - Corresponde a um caractere que não é uma palavra

\b - corresponde ao limite da palavra

\B - corresponde ao limite da não palavra

. - qualquer caractere

^ - marcação de início do parágrafo

$ - marcação de final do parágrafo

[] - corresponde a qualquer caracter que for informado dentro dos colchetes

[^] - corresponde a negação do(s) caractere(s) informados após ele

### Meta Caracteres Quantificadores

{} - corresponde a quantidade informada dentro dos colchetes

{2,} - corresponde no mínimo dois e o máximo indefinido

{2, 7} - corresponde no mínimo dois e o máximo de 7

? - corresponde a um caracter não obrigatório

* - corresponde a zero ou mais do caracter antecedente 

+ - corresponde a um ou mais do caracter ou meta caracter antecedente

*? ou +? - corresponde a uma seleção lazy

### Meta Caracteres Lógicos

| - (ou) corresponde um caractere/meta caractere ou outro

### Meta Caracteres Condicionais (lookaround)

Negação
^ - corresponde a negação de algum caractere colocado posteriormente

Se
?= (positive lookahead) - corresponde a seleção condicional

?! (negative lookahead) - corresponde a negação da condicional

### Meta Caracteres de grupos

(abc) - captura um grupo

\1 - faz referêcnaia a um grupo específico, neste caso, grupo 1

