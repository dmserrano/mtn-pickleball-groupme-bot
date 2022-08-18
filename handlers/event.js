const eventHandler = async ({ ack, event, logger, respond }) => {
	try {
		await ack();

		const result = await respond(
			`Welcome to the team, <@${event.user.id}>! 🎉 You can introduce yourself in this channel.`
		);
		console.log("joined channel");
		logger.info(result);
	} catch (error) {
		logger.error(error);
	}
};

module.exports = {
	eventHandler,
};
