# TesteAngularWebApi
Teste para vaga de emprego, utilizando Angular e ASP.NET Web API.

Gostaria de trabalhar conosco? Clone esse repositório, siga as instruções abaixo para ter o seu projeto funcionando e construa as funcionalidades requeridas no teste.

Não necessarimanete todas as funcionalidades precisam ser construídas, caso você chegue no seu limite e não consiga prosseguir, traga o que conseguiu fazer para ser avaliado. Mas caso consiga construir todas as funcionalidades requeridas, meus parabéns, isso mostra que você tem pleno domínio das tecnologias envolvidas e logicamente isso conta muito na avaliação.

Faça o teste e mostre até onde consegue chegar. Ficaremos felizes em tê-lo em nossa equipe!


### Você vai precisar ter instalado:

- IDE do Visual Studio e Visual Studio Code www.visualstudio.microsoft.com
- .NET Developer Pack 4.7.1 https://www.microsoft.com/en-us/download/details.aspx?id=56119
- Node www.nodejs.org


### Tecnologias e linguagens que são utilizadas nesse projeto:

#### Back-end
- ASP.NET Web API (linguagem c#) https://www.asp.net/web-api
- Banco de dados SQL Server Compact https://technet.microsoft.com/en-us/library/ms173994(v=sql.110).aspx
- Entity Framework https://docs.microsoft.com/pt-br/ef/#pivot=ef6x&panel=ef6x1

#### Front-end
- Angular https://www.angular.io/
- Angular Material https://www.material.angular.io/


### Instruções:

1. Faça o clone do repositório, abra um terminal de comando e entre na pasta do projeto do Angular (../TesteAngularWebApi/FrontEnd/Angular), execute comando "npm install" (sem as aspas) para que as dependências sejam instaladas.

2. Utilizando o Visual Studio Code, abra a pasta do projeto do Angular (../TesteAngularWebApi/FrontEnd/Angular). É com o Visual Studio Code que você construirá o Front-end da aplicação.

3. Utilizando a IDE Visual Studio, vá em File > Open > Project/Solution e selecione o arquivo conhecido como a solution do projeto (../TesteAngularWebApi/BackEnd/AspNetWebApi/AspNetWebApi.sln). Isso vai abrir o projeto ASP.NET Web API. É com essa IDE que você construirá o seu Back-end.

4. Já existe um exemplo em pleno funcionamento dentro desses projetos, é algo bem simples, onde você pode cadastrar um Contato e cada Contato pode ter várias Mensagens cadastradas. Apesar de simples, o exemplo é suficiente para demonstrar como as coisas funcionam, então talvez você deva investigar os códigos existentes antes de tentar construir alguma coisa.

5. Boa sorte! Estamos na torcida para que você conclua o teste e mostre todo seu potencial. Caso, tenha alguma dificuldade fique a vontade para nos contatar, mas lembre-se, a internet é um mar de conhecimento :D


### Teste:

#### Cenário
Um cliente chega à loja para fazer uma compra. Nessa compra um ou vários produtos estão envolvidos. Você como atendente deve cadastrar esse cliente e registrar a venda dos produtos escolhidos, comunicando o cliente o valor total da compra.

#### Entidades envolvidas (modelos)
Analisando o cenário à cima, facilmente identifican-se as entidades com as quais se deve trabalhar, são elas:
- Cliente
- Produto
- Pedido

Os nomes não precisam ser esses, isso é só para que você entenda o que estamos querendo que seja construído. Pode utilizar os nomes de sua preferência.

#### Funcionalidades esperadas
- Cadastro de clientes, com os campos: Nome (obrigatório) e E-mail (obrigatório e único, pois não pode existir mais de um cadastro com o mesmo e-mail).
  -asd

- Cadastro de produtos, com os campos: Descrição (obrigatório), Valor (obrigatório e maior que zero, pois não faz sentido existir um produto com valor zero ou negativo) e Foto.

- Cadastro do pedidos, com os campos: Número (obrigatório e sequêncial), Data (obrigatório), Produtos (obrigatório), Cliente (obrigatório), Valor (obrigatório), Desconto e ValorTotal (obrigatório).

