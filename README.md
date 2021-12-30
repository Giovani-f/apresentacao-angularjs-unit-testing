# AngularJS - Testes unitários Controller & Service

## Indrodução a Controller

- Controllers são os responsáveis pelo controle de fluxo de nossa aplicação.
- É onde gerenciamos o fluxo de dados apresentados na view

### Boas Práticas:

- Controllers Thin

_Use o Controller apenas para disponibilizar dados específicos para o escopo que está sendo usado na view. Regra de negócios e outras lógicas deve ser colocadas em Services. Ao fazer isso, essa lógica pode ser usada em vários controladores e pode ser facilmente testada._

- Deve conter funções pequenas e puras

_Funções puras são as que retornam a saída dependendo de alguma entrada. Essas funções não alteram a entrada de forma alguma e a única tarefa é produzir uma saída._

- Módulos e responsabilidade única

_Divida seu código em módulos separados e cada módulo deve ser responsável por uma única funcionalidade. Isso aumenta a usabilidade. Por exemplo, você está construindo um aplicativo de correio como o Gmail. Você divide a funcionalidade em três partes filtros, barra de pesquisa e listagem de e-mail. Ao desenvolver módulos com base em responsabilidade única, você pode gerenciar e testar facilmente seu código._

- use a sintaxe controllerAs

_Ao usar o controlador em qualquer lugar em seu aplicativo angularJs, tente usar o controlador como sintaxe._

- ### Não é recomendado para:

  * **Manipular DOM**, para manipulação do DOM é aconselhável usar diretivas, com o intúito de encapsular esse comportamento. Com essa prática o código fica mais manutenível e testável.

  * **Formatar inputs**, para isso use os controladores de formulários.

  * **Filtrar Dados**, o AngularJS dispõe de filtros padrão, além da opção de escrever filtros customizados.

  * **Compartilhar código**, para compartilhar estados ou dados com outros controladores devemos utilizar as factories/services.

## Indrodução a Service

- Service é o objeto usado para organizar e/ou compartilhar estados de objetos e as regras de negócio da aplicação.
- Ele é singleton, ou seja, há apenas uma instância disponível durante a vida útil da aplicação.
- Outra característica importante é a inicialização tardia (lazily instantiated), que só é efetuada quando o AngularJS identifica que tem algum componente dependente.

### Não é o Controller que deve possuir as regra de negócio?

- O Controller de fato controla a view, mas não é nele que armazenamos as regras que são compartilhadas na aplicação.
- O Controller gerencia apenas as regras associadas a view que está associado.

### Por que usar Service?
- Quando queremos que o estado do objeto tenha o ciclo de vida independente da camada de visão.
- Através da injeção de dependência do AngularJS, o service pode ser utilizado por toda a aplicação.
- O AngularJS dispõe de uma vasta opção de services, por exemplo o $http.
- É muito fácil criar o nosso próprio serviço.
- A centralização das regras em um service facilita na manutenção e testabilidade do código.

## Testes Unitários

### O que são testes unitários?

O teste de unidade é um tipo de teste em que se separa o código nas menores unidades testáveis que podem ser logicamente isoladas do programa. Essas unidades são testadas individualmente para verificar se cada uma funciona conforme o esperado. As unidades pequenas tornam mais fácil projetar testes, executar, registrar e analisar resultados do que pedaços maiores de código. Ele permite que você localize os erros rapidamente e os corrija no início do ciclo de desenvolvimento. Os testes de unidade são tipos de testes funcionais escritos e executados por desenvolvedores de software.

### Por que testar seu código?

- Os testes são a melhor maneira de prevenir erros em um software.
- Maior qualidade de código.
- Verificar se está tudo funcionando como esperado.
- Mais confiavel do que testar manualmente.
- Ajuda na manutenção.
- Confiabilidade na hora de mergear o código.
- Serve como documentação para novos devs.

### Melhores práticas para testes unitários

- Os testes devem ser rápidos
  * Tornando-os mais simles possível.
  * Não dependendo de outros testes.
  * Simulando dependências externas.

_Se forem lentos, os desenvolvedores não os executarão com a frequência necessária. Isso anula todo o propósito de ter um conjunto de testes de unidade em primeiro lugar, que é aumentar a confiança dos desenvolvedores para fazer alterações no código._

- Os testes devem ser simples

_Existem várias técnicas que podemos aplicar para ter um alto grau de confiança na correção de nossos testes. Uma delas é manter seus testes com baixa complexidade ciclomática. A complexidade ciclomática é uma métrica de código que indica o número de caminhos de execução possíveis que um determinado método pode seguir. Um trecho de código com menor complexidade é mais fácil de entender e manter, o que significa que os desenvolvedores têm menos probabilidade de introduzir bugs ao trabalhar nele._

- O teste não deve duplicar a lógica de implementação

_Resista à tentação de fazer seus testes sofisticados . Mantenha-os extremamente simples e seu conjunto de testes será o melhor para isso._

- Os testes devem ser legíveis
  * Use o padrão [AAA (Arrange, Act, Assert)](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80), para definir as fases do seu código.
  * Como alternativa, adote casos de teste estilo [BDD](https://www.testim.io/blog/cucumber-js-for-bdd-an-introductory-tutorial-with-examples/)
  * Uma afirmação lógica por método.
  * Não use números mágicos ou strings em seus casos de teste. Em vez disso, empregue variáveis ou constantes para documentar os valores que você está usando.

_Os casos de teste funcionam também como forma de documentação. E eles são o melhor tipo de documentação, pois são executáveis e não ficam fora de sincronia com o que estão documentando. Mas para que a equipe possa colher os benefícios dessas especificações executáveis, elas obviamente precisam ser legíveis._

- Os testes devem ser determinísticos

_Torne seus testes determinísticos, significando que o teste deve sempre apresentar o mesmo comportamento se nenhuma alteração for feita no código em teste._

_Suponha que você tenha uma função “a ()”. Então você escreve um teste para ele, e o teste está passando. Se você não alterar a (), o teste deve continuar a passar, não importa quantas vezes você o execute. O oposto também é verdadeiro: imagine que você vai e muda a função, e isso faz com que o teste falhe. Não importa se você executa o teste uma, dez ou mil vezes, ele deve continuar falhando até que você ou outra pessoa corrija a função._

- _Para que um teste seja determinístico, ele deve ser completamente isolado. Você não pode ter seus testes dependendo de:_

  * outros casos de teste.
  * valores ambientais, como a hora atual ou as configurações de idioma do computador em que está sendo executado.
  * dependências externas, como sistema de arquivos, rede, APIs, etc.

### Ferramentas utlizadas para testes unitários no AngularJS

- Karma
- Jasmine

### O que é Karma?

Karma  é um executor de teste de JavaScript que funciona iniciando diferentes navegadores e executando testes em cada um deles. Ele registra o status de cada teste para que você saiba quais testes falharam em determinados navegadores, tornando o teste de compatibilidade entre navegadores incrivelmente fácil.

### Por que Karma?

- Por ser um pacote direto da equipe do AngularJS, desenvolvido para testar seus própiros recursos de estrutura.
- Lida bem com o Angular
- Oferece a possibilidade de substituir jasmine por outras ferramentas como Mocha.
- É recomendado na doc do AngularJS

### O que é Jasmine?

Jasmine é uma estrutura de desenvolvimento orientada por comportamento para testar código JavaScript que funciona muito bem com Karma.

### Por que Jasmine?

- Funciona muito bem com Karma
- Também é recomendado na doc do AngularJS

## Bibliografia

- https://www.testim.io/blog/unit-testing-best-practices/
- https://www.simform.com/blog/unit-testing-best-practices/