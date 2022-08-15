const { parseMessageText } = require('../../utils/slack');

const getSlackMessageTextWithUserName = async ({ command, ack, say, client }) => {
    const userId = command?.user_id;
    const { members } = await client?.users.list();

    await ack();

    const currentUser = members.find(({ id }) => id === userId);

    if (!currentUser) {
        return;
    }

    const message = parseMessageText(currentUser, command);
    say(message);
    return message;
};

module.exports = {
    getSlackMessageTextWithUserName
};