import Logger from "@packages/logger/src/Logger"

class NativeEvent {
	public process(): void {
		process.on("uncaughtException", exception => {
			Logger.errorLogger(exception)
		})

		process.on("warning", warning => {
			Logger.infoLogger(warning)
		})
	}
}

export default new NativeEvent()
