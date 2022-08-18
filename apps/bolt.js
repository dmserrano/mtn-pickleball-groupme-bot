const { App } = require("@slack/bolt");

const { commands } = require("../constants/slack/index");
const { commandHandler } = require("../handlers/command");

const boltApp = new App({
	token: process.env.SLACK_BOT_TOKEN,
	signingSecret: process.env.SLACK_SIGNING_SECRET,
	socketMode: true,
	appToken: process.env.SLACK_APP_TOKEN,
});

(async () => {
	await boltApp.start(process.env.PORT || 3000);

	console.log("MT Pickleball GroupMe Bot is running!");
})();

boltApp.command(commands.SEND, commandHandler);
