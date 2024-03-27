import { NextFunction, Request, Response } from "express"
import Locals from "../providers/Locals"

const timeoutMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const timeoutMs = Locals.config().timeout

	const timeoutId = setTimeout(() => {
		res.status(503).json({ error: "Request timeout" })
	}, timeoutMs)

	res.on("finish", () => {
		clearTimeout(timeoutId)
	})

	next()
}

export default timeoutMiddleware
