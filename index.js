require('dotenv').config();
const { App } = require('@slack/bolt');

const { commands } = require('./constants/slack/index');
const { messageHandler } = require('./handlers/message');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true,
    appToken: process.env.SLACK_APP_TOKEN
  });

(async () => {
  await app.start(process.env.PORT || 3000);

  console.log('MT Pickleball GroupMe Bot is running!');
})();

app.command(commands.SEND, messageHandler);