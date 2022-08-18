const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { postMessageToChannelWithApi } = require("../services/slack/index");
const port = process.env.PORT + 1 || 3001;

// Middleware
app.use(bodyParser.json());

// Routes
app.post("/relay-to-slack", async ({ body }, res) => {
	const { name, sender_type, text } = body;

	if (sender_type !== "bot") {
		postMessageToChannelWithApi({ name, text });
	}

	res.end();
});

app.listen(port, () => {
	console.log(`Express server start on port ${port}`);
});
