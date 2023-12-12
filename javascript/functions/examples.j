const logError = (...messages) => {
	return logger("error", messages)
}

const logInfo = (...messages) => {
	return logger("error", messages)
}

logger("info", 10, 20, 30)
logger("error", 10, 20, 30)

logError(10, 20,40)
logInfo(10,20,50)