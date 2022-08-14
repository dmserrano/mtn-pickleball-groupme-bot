const { parseMessageText } = require('../../utils/slack');

const getSlackMessageTextWithUserName = async ({ payload, client }) => {
    const userId = payload.user;
    const { members } = await client?.users.list();
    const currentUser = members.find(({ id }) => id === userId);

    if (!currentUser) {
        return;
    }

    return parseMessageText(currentUser, payload);
};

module.exports = {
    getSlackMessageTextWithUserName
};