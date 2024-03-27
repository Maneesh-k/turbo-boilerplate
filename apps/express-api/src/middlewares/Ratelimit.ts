import { client } from "@packages/commons"
import { Application, Request, Response } from "express"
import RateLimit from "express-rate-limit"
import { Callback } from "ioredis"
import RedisStore from "rate-limit-redis"
import Locals from "../providers/Locals"

const commonRateLimiter = (_express: Application): Application => {
	const rateLimitConfig = Locals.config().rateLimit

	const { message, environment, requestCheckWindowInSeconds, numberOfRequests, internalKey } =
		rateLimitConfig

	const prefix = `rl-${environment}-`

	const keyGenerator = (req: Request): string => req.ip as string

	return _express.use(
		RateLimit({
			windowMs: 1 * requestCheckWindowInSeconds * 1000,
			max: numberOfRequests,
			message,
			skip: (req: Request, res: Response) => {
				return req.headers["x-str-ak-lb"] === internalKey
			},
			keyGenerator,
			store: new RedisStore({
				prefix,
				sendCommand: async (...args: string[]): Promise<any> =>
					client.call(
						...(args as [
							command: string,
							...args: (string | Buffer | number)[],
							callback: Callback<unknown>
						])
					)
			})
		})
	)
}

export { commonRateLimiter }
