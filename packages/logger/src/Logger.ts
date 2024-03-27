import reqIdTracker from "cls-rtracer"
import { Application, NextFunction } from "express"
import pino, { Logger as PinoLogger } from "pino"
import { cacheStore } from "./nodecache"

interface ILog {
	contextLog: Record<string, any>
	errorLog: Record<string, any>
	externalApiCall: any[]
}

class Logger {
	private static pinoLogger: PinoLogger = pino()

	public static init(expressApp: Application): Application {
		const loggerMiddleware = function (req: any, res: any, next: NextFunction) {
			if (req.method === "OPTIONS") return next()

			req.id = reqIdTracker.id()

			req.headers.startTime = Date.now().toString()

			cacheStore.set(req.id, {
				contextLog: {},
				errorLog: {},
				externalApiCall: []
			})

			res.on("finish", function () {
				const responseTime = Date.now() - Number(req.headers.startTime)

				const reqId = req.id

				if (!reqId) return

				const logData: ILog = cacheStore.take(reqId) || {
					contextLog: {},
					errorLog: {},
					externalApiCall: []
				}

				const httpVersion = req.httpVersion

				const fwd = req.headers["x-forwarded-for"]

				const message = `method=${req.method} url=${req.url} status=${res.statusCode} request_id=${reqId} fwd=${fwd}`

				const ip = req.headers["x-forwarded-for"]

				const statusCode = res.statusCode

				const contextLog =
					Object.keys(logData.contextLog).length === 0 ? undefined : logData.contextLog

				const errorLog =
					Object.keys(logData.errorLog).length === 0 ? undefined : logData.errorLog

				const externalApiCallLog =
					Object.keys(logData.externalApiCall).length === 0
						? undefined
						: logData.externalApiCall

				const log = {
					reqId,
					app: true,
					endpoint: req.originalUrl,
					req: {
						ip,
						method: req.method,
						url: req.url,
						query: req.query,
						params: req.params,
						body: req.body,
						headers: req.headers,
						httpVersion,
						path: req.route?.path ?? req.path
					},
					remotePort: req.socket.remotePort,
					responseTime,
					remoteHost: req.socket.remoteAddress,
					statusCode,
					contextLog,
					externalApiCallLog,
					errorLog,
					message
				}

				Logger.pinoLogger.info(log)
			})

			next()
		}

		expressApp.use(loggerMiddleware)

		return expressApp
	}

	static errorLogger(error: object): void {
		Logger.pinoLogger.error({ type: "error", error })
	}

	static infoLogger(info: object): void {
		Logger.pinoLogger.info({ type: "info", ...info })
	}
}

export default Logger
