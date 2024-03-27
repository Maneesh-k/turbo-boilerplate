import express from "express"

import ExceptionHandler from "@packages/exception/src/Handler"
import Logger from "@packages/logger/src/Logger"
import Bootstrap from "../middlewares/Kernel"
import Locals from "./Locals"
import Routes from "./Routes"

class Express {
	public express: express.Application

	constructor() {
		this.express = express()
		this.mountDotEnv()
		this.mountMiddlewares()
		this.mountRoutes()
		this.mountExceptions()
	}

	private mountDotEnv(): void {
		this.express = Locals.init(this.express)
	}

	private mountMiddlewares(): void {
		this.express = Bootstrap.init(this.express)
	}

	private mountRoutes(): void {
		this.express = Routes.mountApi(this.express)
		this.express = Routes.mountApiExceptions(this.express)
	}

	private mountExceptions(): void {
		this.express = ExceptionHandler.init(this.express)
	}

	public init(): any {
		const port: number = Locals.config().port
		// Start the server on the specified port
		this.express
			.listen(port, async () => {
				return Logger.infoLogger({ message: `Server started on port ${port}` })
			})
			.on("error", async _error => {
				return Logger.errorLogger({ message: "Server error", error: _error })
			})
	}
}

export default new Express()
