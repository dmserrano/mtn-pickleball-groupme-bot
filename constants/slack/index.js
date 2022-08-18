const { NODE_ENV, SLACK_BOT_TOKEN } = process.env;

const BOT_CHANNEL_ID = "C03T65C2Y6T";
const CHANNEL_ID = "C03TC6WJRJ7";
const GENERAL_CHANNEL_ID = "C03T99FNJ1K";
const SLACK_CHANNEL = NODE_ENV === "development" ? BOT_CHANNEL_ID : CHANNEL_ID;

const disabledMessageTypes = [
	"bot_message",
	"me_message",
	"message_changed",
	"message_deleted",
	"message_replied",
	"thread_broadcast",
	"channel_join",
	"channel_leave",
	"channel_topic",
	"channel_purpose",
	"channel_name",
	"channel_archive",
	"channel_unarchive",
	"group_join",
	"group_leave",
	"group_topic",
	"group_purpose",
	"group_name",
	"group_archive",
	"group_unarchive",
	"file_share",
	"file_comment",
	"file_mention",
	"pinned_item",
	"unpinned_item",
	"ekm_access_denied",
	"channel_posting_permissions",
	"sh_room_created",
	"message_deleted",
];

const commands = {
	SEND: "/send",
};

const events = {
	JOIN_TEAM: "join_team",
	MEMBER_JOINED_CHANNEL: "member_joined_channel",
};

const SLACK_WEB_API_BASE_URL = "https://slack.com/api";

module.exports = {
	commands,
	disabledMessageTypes,
	events,
	GENERAL_CHANNEL_ID,
	SLACK_BOT_TOKEN,
	SLACK_CHANNEL,
	SLACK_WEB_API_BASE_URL,
};
