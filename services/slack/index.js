const { parseMessageText } = require("../../utils/slack");
const { formatError, formatLog } = require("../../utils/logs");
const { channelIdMap } = require("../../constants/slack/index");

const postMessageToBotChannel = async (client, mesage) => {
	try {
		const response = await client.chat.postMessage({
			channel: channelIdMap.mtGroupmeBot,
			text: mesage,
		});

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
	const { members } = await client?.users.list();

	await ack();

	const currentUser = members.find(({ id }) => id === userId);

	if (!currentUser) {
		const errorMessage = `User ${userId} doesn't exist`;
		formatError(null, errorMessage);
		postMessageToBotChannel(client, errorMessage);
		return;
	}

	const message = parseMessageText(currentUser, command);
	say(message);
	return message;
};

module.exports = {
	getSlackMessageTextWithUserName,
	postMessageToBotChannel,
};
