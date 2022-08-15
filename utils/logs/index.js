const { green, red } = require("chalk");

const log = console.log;

const parseLogMessage = ({ method, status, url }) => {
	return `${method.toUpperCase()} ${url} ${status}`;
};

const errorLog = (message) => log(red(`[ERROR] ${message}`));
const successLog = (message) => log(green(`[SUCCESS] ${message}`));

const formatLog = ({ status, config }) => {
	const { method, url } = config;
	const logText = parseLogMessage({ method, status, url });
	successLog(logText);
	return logText;
};

const formatError = (error, defaultMessage = null) => {
	if (defaultMessage) {
		errorLog(defaultMessage);
		return defaultMessage;
	}

	const { method, url } = error?.config;
	const { status } = error?.response;

	const logText = parseLogMessage({ method, status, url });
	errorLog(logText);
	return logText;
};

module.exports = {
	formatLog,
	formatError,
	log,
};
