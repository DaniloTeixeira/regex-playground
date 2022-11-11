## Principais regras RgExp

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

### Meta Caracteres de Negação





%  ### CLASSES DE CARACTERES

% _._ - qualquer caracter exceto nova linha

% _\w \d \s_ - palavra, dígito, espaço em branco

% _\W \D \S_ - não palavra, não dígito, não espaço em branco

% _[]_ - será aceito o que for indicado dentro dos colchetes

% _[abc]_ - qualquer caractere minúsculo entre a, b ou c (letras minúsculas) 
% _[ABC]_ - mesma regra, só que para caractere maiúsculo

% _[^abc]_ - qualquer caractere minúsculo que não seja a, b ou c
% _[^ABC]_ - mesma regra, só que para caractere maiúsculo

% _[a-g]_ - caractere minúsculo entre a & g
% _[A-G]_ - mesma regra, só que para caractere maiúsculo

% _[0-9]_ - dígitos entre 0 & 9

% _{2}_ - duas ocorrências

% _{2,}_ - duas ou mais ocorrências

% > ### ÂNCORAS

% _^_ - indica o começo da linha

% _$_ - indica o final da linha

% _\b \B_ - limite de palavra, limite de não palavra 

% > ### CARACTERES DE ESCAPE
% _\. \* \\_ - escape de caracteres especiais
%  -->
