import * as dotenv from "dotenv"
import { Application } from "express"
import * as path from "path"

class Locals {
	public static config(): any {
		dotenv.config({ path: path.join(__dirname, "../../../../.env") })

		const url = process.env.APP_URL || `http://localhost:${process.env.PORT}`
		const port = process.env.PORT || 4000
		const appSecret = process.env.APP_SECRET || "This is your responsibility!"
		
		const apiPrefix = process.env.API_PREFIX || "api"

		const logDays = process.env.LOG_DAYS || 10

		const timeout = process.env.TIMEOUT || 5000

		const rateLimit = {
			environment: process.env.NODE_ENV || "development",
			lbAiRequestCheckWindowInSeconds:
				Number(process.env.LB_AI_REQ_CHECK_WINDOW_IN_SECONDS) || 60,
			lbAiNumberOfRequests: Number(process.env.LB_AI_NUMBER_OF_REQUESTS) || 5,
			requestCheckWindowInSeconds: Number(process.env.REQ_CHECK_WINDOW_IN_SECONDS) || 60,
			numberOfRequests: Number(process.env.NUMBER_OF_REQUESTS) || 100,
			internalKey: process.env.X_STR_AK_LB_KEY || "lb_mxiXzgxODVkMmFhMjA5OWQ2Yjk0ZTQxZjN",
			message:
				process.env.TOO_MANY_REQUEST_MESSAGE ||
				"You have reached the maximum number of requests allowed in the timeframe. Please try again later."
		}

		return {
			rateLimit,
			appSecret,
			apiPrefix,
			logDays,
			port,
			url,
			timeout,
		}
	}

	/**
	 * Injects your config to the app's locals
	 */
	public static init(express: Application): Application {
		express.locals.app = this.config()
		return express
	}
}

export default Locals
