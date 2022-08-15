const { channelIdMap, disabledMessageTypes } = require("../constants/slack");
const { getSlackMessageTextWithUserName } = require("../services/slack/index");
const { postGroupMeMessage } = require("../services/groupme/index");

const commandHandler = async (command) => {
	const text = await getSlackMessageTextWithUserName(command);
	postGroupMeMessage(command, text);
};

const commandMiddleware = async ({ event, message, next }) => {
	const channelId = message?.channel;
	const approvedChannelKeys = Object.values(channelIdMap);

	if (disabledMessageTypes.includes(event?.subtype)) {
		return;
	}

	if (approvedChannelKeys.includes(channelId)) {
		await next();
	}
};

module.exports = {
	commandHandler,
	commandMiddleware,
};
