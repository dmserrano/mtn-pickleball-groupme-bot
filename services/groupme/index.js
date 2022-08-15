const axios = require('axios');

const { BOT_ID,
    BOT_NAME,
    GROUP_ME_BASE_URL,
    GROUP_ID,
    GROUP_ME_ACCESS_TOKEN
} = require('../../constants/groupMe/index');

// TODO: add command to register bot for a specific groupme group
// it will also need persistence
const registerGroupMeBot = async () => {
    const payload = {
        bot : {
          name : BOT_NAME,
          group_id : GROUP_ID
        }
    };
    
    try {
        const response = await axios.post(
            `${GROUP_ME_BASE_URL}/bots?token=${GROUP_ME_ACCESS_TOKEN}`,
            payload
        );
            
        console.log('GroupMe Bot created!');
    } catch (error) {
        console.error(error);
    }
};

const postGroupMeMessage = async (message) => {
    const payload = {
        bot_id: BOT_ID,
        text: message,
    };

    try {
        const response = await axios.post(
            `${GROUP_ME_BASE_URL}/bots/post`,
            payload
        );
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    postGroupMeMessage,
    registerGroupMeBot
};