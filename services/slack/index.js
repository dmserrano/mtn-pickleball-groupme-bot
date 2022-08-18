const axios = require("axios");

const { parseMessageText } = require("../../utils/slack");
const { formatError, formatLog } = require("../../utils/logs");
const {
	SLACK_BOT_TOKEN,
	SLACK_CHANNEL,
	SLACK_WEB_API_BASE_URL,
} = require("../../constants/slack/index");

const axiosConfig = {
	headers: {
		Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
	},
};

const postMessageToChannel = async (client, mesage) => {
	try {
		const response = await client.chat.postMessage({
			channel: SLACK_CHANNEL,
			text: mesage,
		});

		formatLog(response);
	} catch (error) {
		formatError(error);
	}
};

const postMessageToChannelWithApi = async ({ name, text }) => {
	const payload = {
		channel: SLACK_CHANNEL,
		text: `${name}: ${text}`,
	};

	try {
		const response = await axios.post(
			`${SLACK_WEB_API_BASE_URL}/chat.postMessage`,
			payload,
			axiosConfig
		);

		formatLog(response);
	} catch (error) {
		formatError(error);
	}
};

const getSlackMessageTextWithUserName = async ({
	command,
	ack,
	say,
	client,
}) => {
	const userId = command?.user_id;
	const { members } = await client.users.list();

	await ack();

	const currentUser = members.find(({ id }) => id === userId);

	if (!currentUser) {
		const errorMessage = `User ${userId} doesn't exist`;
		formatError(null, errorMessage);
		postMessageToChannel(client, errorMessage);
		return;
	}

	const message = parseMessageText(currentUser, command);
	say(message);
	return message;
};

module.exports = {
	getSlackMessageTextWithUserName,
	postMessageToChannel,
	postMessageToChannelWithApi,
};
