import Logger from "@packages/logger/src/Logger"
import bodyParser from "body-parser"
import reqIdTracker from "cls-rtracer"
import { Application } from "express"
import Locals from "../providers/Locals"
import CORS from "./CORS"
import { commonRateLimiter } from "./Ratelimit"
import timeoutMiddleware from "./timeout"

class Kernel {
	public static init(_express: Application) {
		const isCORSEnabled = Locals.config().isCORSEnabled as boolean

		_express.use(reqIdTracker.expressMiddleware())

		_express = Logger.init(_express)

		if (isCORSEnabled) _express = CORS.mount(_express)

		_express.use(timeoutMiddleware)

		_express.use(bodyParser.urlencoded({ extended: true }))

		_express.use(bodyParser.json())

		_express = commonRateLimiter(_express)

		return _express
	}
}

export default Kernel
