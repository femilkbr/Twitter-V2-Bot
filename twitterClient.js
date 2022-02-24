const {TwitterApi} = require("twitter-api-v2");

//Pegue suas credenciais depois de realizar o cadastro no Twitter Develop

const client = new TwitterApi({
    appKey: "xxx",
    appSecret: "xxx",
    accessToken: "xxx",
    accessSecret: "xxx"
})

const rwClient = client.readWrite

module.exports = rwClient
