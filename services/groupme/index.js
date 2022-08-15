const axios = require("axios");

const {
	BOT_ID,
	BOT_NAME,
	GROUP_ME_BASE_URL,
	GROUP_ID,
	GROUP_ME_ACCESS_TOKEN,
} = require("../../constants/groupMe/index");
const { formatError, formatLog } = require("../../utils/logs");
const { postMessageToBotChannel } = require("../../services/slack/index");

// TODO: add command to register bot for a specific groupme group
// it will also need persistence
const registerGroupMeBot = async () => {
	const payload = {
		bot: {
			name: BOT_NAME,
			group_id: GROUP_ID,
		},
	};

	try {
		const response = await axios.post(
			`${GROUP_ME_BASE_URL}/bots?token=${GROUP_ME_ACCESS_TOKEN}`,
			payload
		);

		formatLog(response);
	} catch (error) {
		formatError(error);
	}
};

const postGroupMeMessage = async (command, text) => {
	const payload = {
		bot_id: BOT_ID,
		text,
	};

	try {
		const response = await axios.post(
			`${GROUP_ME_BASE_URL}/bots/post`,
			payload
		);

		formatLog(response);
	} catch (error) {
		const errorMessage = formatError(error);
		postMessageToBotChannel(command.client, errorMessage);
	}
};

module.exports = {
	postGroupMeMessage,
	registerGroupMeBot,
};
