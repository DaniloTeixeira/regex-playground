## Principais regras RgExp

> #### Classes de Caracteres

. -> qualquer caracter exceto nova linha

\w \d \s -> palavra, dígito ou espaço em branco

\W \D \S -> não palavra, não dígito, não espaço em branco

[abc] -> qualquer caractere minúsculo entre a, b ou c (letras minúsculas) 
[ABC] -> mesma regra, só que para caractere maiúsculo

[^abc] -> qualquer caractere minúsculo que não seja a, b ou c
[^ABC] -> mesma regra, só que para caractere maiúsculo

[a-g] -> caractere minúsculo entre a & g
[A-G] -> mesma regra, só que para caractere maiúsculo

> #### Âncoras
