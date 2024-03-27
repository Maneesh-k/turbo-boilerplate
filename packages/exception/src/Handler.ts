import { errorLog } from "@packages/logger/src/reqLogger"
import { Application, NextFunction, Request, Response } from "express"
import { CustomException } from "./CustomException"
import { WorkerException } from "./WorkerException"

class Handler {
	public static init(_express: Application) {
		_express.use(this.globalErrorHandler)

		return _express
	}

	public static globalErrorHandler(
		err: Error | CustomException,
		req: Request,
		res: Response,
		next: NextFunction
	): any {
		if (err instanceof CustomException) {
			errorLog("globalErrorHandler", { error: err.message })

			return res.status(err.status).json({ error: err.message, code: err.code })
		}
		if (err instanceof WorkerException) {
			errorLog("WorkerException", { error: err.message })

			return res.status(500).json({ error: err.message })
		} else {
			errorLog("ErrorHandler", { error: err })

			return res.status(500).json({ error: "Internal Server Error" })
		}
	}
}

export default Handler
