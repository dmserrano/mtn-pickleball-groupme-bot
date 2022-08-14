const parseMessageText = (user, payload) => {
    const userName = user.real_name;
    const messageText = payload.text;

    return `${userName}: ${messageText}`;
};

module.exports = {
    parseMessageText
};