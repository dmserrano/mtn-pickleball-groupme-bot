const axios = require('axios');

const GROUP_ME_TOKEN = process.env.GROUPME_ACCESS_TOKEN;
const GROUP_ME_BASE_URL = 'https://api.groupme.com/v3';
const GROUP_ID = "88392421";
const BOT_ID = "c271b97cc2200de5292f5d4c4f";
const BOT_NAME = "Mid TN Pickleball GroupMe";

const registerGroupMeBot = async () => {
    const payload = {
        bot : {
          name : BOT_NAME,
          group_id : GROUP_ID
        }
    };
    
    try {
        const response = await axios.post(
            `${GROUP_ME_BASE_URL}/bots?token=${GROUP_ME_TOKEN}`,
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