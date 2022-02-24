const T = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
var randomItemInArray = require("random-item-in-array");
//const randomItem = require("random-item");

T.v2.tweet('Iniciando teste com o random-item-in-array com frases de Joanna de Angelis a cada 30 minutos', {
    //poll: { duration_minutes: 120, options: ['Absolutely', 'For sure!'] }, - enquete
});
  //console.log('Tweet', createdTweet.id, ':', createdTweet.text); - esse console.log está dando erro

 var arr = [
    'Tudo é importante na vida. Os pequenos atos são preparatórios dos gestos grandiosos e das realizações vultosas. - Joanna de Ângelis', 
    'És livre para imprimir na tua existência o padrão de felicidade ou de aflição com o qual desejas conviver. - Joanna de Ângelis', 
    'A coincidência é a presença discreta de Deus propositadamente programada para dar certo na hora exata e nas circunstâncias ideais. - Joanna de Ângelis',
    'Ninguém se evade das consequências de seus atos, como planta alguma produz diferente fruto da sua própria estrutura fatalista. - Joanna de Ângelis',
    'O seu hoje representa as ações antes realizadas e o seu amanhã defluirá das suas atividades hoje desenvolvidas. - Joanna de Ângelis'
];

//Para colocar um novo post a cada tantos minutos
const job = new CronJob('0 */30 * * * *', function() {
    const d = new Date();
	console.log('Every 5 Minute:', d);
    T.v2.tweet(randomItemInArray(arr))
})
//Control + C para encerrar o teste no Visual Studio Code
job.start();