const channelIdMap = {
	mtGroupmeBot: "C03T65C2Y6T",
	mtJuliet: "C03TC6WJRJ7",
};

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

module.exports = {
	channelIdMap,
	commands,
	disabledMessageTypes,
};
