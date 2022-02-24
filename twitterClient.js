const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: "XXeUSPywKt2MmvVzhA0k1PvXO",
    appSecret: "BJMDYPk3hhgTGhbZp1MpJcKx5qpxeCbWgdAutuIpGkSZ6L5vTK",
    accessToken: "1262145293270867971-F7QGZHgxVgsk6cQ1TPo7QNMArDBQiB",
    accessSecret: "X8uCfX8QFyaM7W2RmmZBTUGeNPe65w8UePNrlxVxipr4F"
})

const rwClient = client.readWrite

module.exports = rwClient