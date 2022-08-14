const { channelIdMap, disabledMessageTypes } = require('../constants/slack');
const { getSlackMessageTextWithUserName } = require('../services/slack/index');
const { postGroupMeMessage } = require('../services/groupme/index');

const messageHandler = async message => {
    try {
        const text = await getSlackMessageTextWithUserName(message);
        postGroupMeMessage(text);        
    } catch (error) {
        console.error(error);
    }
};

const messageMiddleware = async ({ event, message, next }) => {
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
    messageHandler,
    messageMiddleware,
};