# Twitter-V2-Bot

## O que ele faz

Esse bot é capaz de postar mensagens a cada X minutos a partir de um array de frases, dependendo da configuração dada.

## Motivação

Quando eu ativei o meu perfil do Twitter para permitir a funcionalidade Developer, os testes com a API v1.1 me davam o erro de que o meu perfil só permitia usar a API v2.
Então, eu reuni várias páginas e copiando o que dava certo em cada uma, consegui formalizar um Twitter Bot que posta mensagens de um array a cada X minutos.

## O que é preciso saber

Usei o Visual Studio Code e o Node.js mais atual no momento v17.5.0. Para saber a versão dentro do VSC, use o comando
```
 node -v
```
## O que aprendi

Aprendi que existe diferença entre import e require. Ou você usa tudo require, ou tudo import, não consegui misturar os 2:
```
const T = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
var randomItemInArray = require("random-item-in-array");
```

Procurei um pacote de random que fosse configurado com require.

Control + C para encerrar o teste no Visual Studio Code.

## O que precisa instalar

Caso você faça a cópia desse repositório, é necessário utilizar um comando para instalar todas as dependências descritas no package.json:
```
npm install
```
Os pacotes utilizados foram:
- "cron": "^1.8.2",
- "random-item-in-array": "^1.0.0",
- "twitter-api-v2": "^1.10.0"

Caso você queira tentar na mão, a sequencia seria:
```
npm init -y
npm install cron
npm install random-item-in-array
npm install twitter-api-v2
```


## Onde pesquisei:
[Twitter Develop](https://developer.twitter.com/en/portal/dashboard)

[Tutorial 1](https://dev.to/codesphere/using-the-twitter-api-with-nodejs-4p3c)

[Tutorial 2](https://www.dio.me/articles/como-construir-um-bot-para-twitter-nodejs)

[Tutorial 3](https://www.maistecnologia.com/twitter-bot-aprenda-a-criar-um-bot-para-a-rede-social/)

[Repositório 1 - esse é do bom!](https://github.com/dom-the-dev/doms-bot-youtube)

[Repositório 2 - ajudou demais](https://github.com/PLhery/node-twitter-api-v2/blob/master/doc/v2.md)
