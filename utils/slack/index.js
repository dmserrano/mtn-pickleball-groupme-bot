const parseMessageText = (user, command) => {
    const userName = user.real_name;
    const messageText = command.text;

    return `${userName}: ${messageText}`;
};

module.exports = {
    parseMessageText
};