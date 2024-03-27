import { NextFunction, Request, Response } from "express"

const validateQuery = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
	const { error } = schema.validate(req.query)

	if (error) {
		const errorMessage = error.details.map((details: any) => details.message).join(", ")

		return res.status(400).json({ status: "failure", message: errorMessage })
	}

	return next()
}

const validateBody = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
	const { error } = schema.validate(req.body)

	if (error) {
		const errorMessage = error.details.map((details: any) => details.message).join(", ")

		return res.status(400).json({ status: "failure", message: errorMessage })
	}

	return next()
}

const validateParams = (schema: any) => (req: Request, res: Response, next: NextFunction) => {
	const { error } = schema.validate(req.params)

	if (error) {
		const errorMessage = error.details.map((details: any) => details.message).join(", ")

		return res.status(400).json({ status: "failure", message: errorMessage })
	}

	return next()
}

export { validateBody, validateParams, validateQuery }
