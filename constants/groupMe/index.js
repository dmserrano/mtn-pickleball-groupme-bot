const {
	NODE_ENV,
	GROUP_ME_ACCESS_TOKEN,
	GROUP_ME_BOT_ID,
	GROUP_ME_DEV_GROUP_ID,
	GROUP_ME_DEV_BOT_ID,
	GROUP_ME_GROUP_ID,
} = process.env;

const isDevelopment = NODE_ENV === "development";
const BOT_ID = isDevelopment ? GROUP_ME_DEV_BOT_ID : GROUP_ME_BOT_ID;
const BOT_NAME = "Mid TN Pickleball GroupMe";
const GROUP_ID = isDevelopment ? GROUP_ME_DEV_GROUP_ID : GROUP_ME_GROUP_ID;
const GROUP_ME_BASE_URL = "https://api.groupme.com/v3";

module.exports = {
	BOT_ID,
	BOT_NAME,
	GROUP_ME_BASE_URL,
	GROUP_ID,
	GROUP_ME_ACCESS_TOKEN,
};
