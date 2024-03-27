import express = require("express")
import Locals from "./Locals"

import  { Application } from "express"

class Routes {
	public mountApi(_express: Application) {
		const apiPrefix = Locals.config().apiPrefix

		_express.use(this.health())

		return _express
	}

	public mountApiExceptions(_express: Application) {
		_express.use((req, res) =>
			res.status(404).send({ error: `${req.method} ${req.url} not found` })
		)

		return _express
	}

	private health() {
		const router = express.Router()

		router.get("/health", (req, res) => {
			return res.status(200).send({
				healthy: true
			})
		})

		return router
	}
}

export default new Routes()
