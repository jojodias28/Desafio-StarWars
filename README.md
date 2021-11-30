# Desafio-StarWars



## Objetivo do Projeto

A proposta foi desenvolver uma interface que recebe dados de uma API, as telas devem exibir cartões contendo informações dos pilotos e das naves.
Para  realização deste projeto foram utilizados:

* Requisições de API's,
* Componentes funcionais,
* hooks 
* Global states
* Styled-components e 
* material MUI

## O projeto foi criado em 4 grandes partes:

### Header

-Componente com um nav , onde permita vc acessar qualquer página, e deve aparecer em todas as páginas.ㅤ

### Pagina Home

-Componente com um dois botões, um para ir para página starships e outro para ir para páginas de pilots.

### Página Starships

-Componente que imprime todos os cards com os nomes das espaçonaves.
ㅤ
### Página Pilots

-Componente que imprime todos os cards com os nomes dos pilotos.


## [Acesse o site aqui](https://guttural-agreement.surge.sh/)


### Autoavaliação

- Tive um pouco de dificuldade com a API, pois no edpoint starships eu não consegui acessar os nomes dos pilotos, somente o array com  o link das urls onde ficam os nomes, tentei resolver salvando esses link em um estado e fazendo um map para acessar as informações dentro da urls, tbm tive que fazer um flat pra transformar o array de arrays em um único array, porém dessa forma ficou dando erro o tempo todo. 
- Então a outra idéia que eu tive foi acessar o edpoint de people e filtrar somente os nomes de pessoas que já pilotaram uma espaçonave dessa forma deu certo, não acho que tenha sido a melhor forma, porque dessa forma em uma página que deveria retornar 10 pilotos, acaba retornando menos, porque nem todos os dez já pilotaram alguma nave, também não gostei porque dessa forma iria ficar uma páginação muito grande, fora do padrão da página de espaçonaves, porém infelizmente foi a forma que deu certo para mim. 
- Também tive problema com a quantidade de de cards que retornava na API , tentei mudar o limit no edpoint mas não tive sucesso, tendo então que fazer uma paginação, devido a isso eu só consigo retornar 10 cards por página. 
- Não consegui achar imagens na API devido a isso eu coloquei somente uma imagem para todos os cards.
- Tive um pouco de dificuldade na estilização com o hover, pois eu não consegui achar uma formar de colocar tudo da mesma cor somente passando por cima da imagem, só fica tudo da mesma cor quando eu passo por cima do nome da imagem. 


