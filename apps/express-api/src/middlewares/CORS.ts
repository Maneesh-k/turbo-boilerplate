import cors from "cors"
import { Application } from "express"

class CORS {
	public mount(_express: Application): Application {
		const allowlist: string | any[] = [
		]

		const corsExcludedEndpoints = [""]

		const corsOptionsDelegate = function (req: any, callback: any) {
			let corsOptions

			if (
				allowlist.indexOf(req.header("Origin")) !== -1 ||
				corsExcludedEndpoints.includes(req.path)
			) {
				corsOptions = { origin: true }
			} else {
				corsOptions = { origin: false }
			}
			callback(null, corsOptions)
		}

		_express.use(cors(corsOptionsDelegate))

		return _express
	}
}

export default new CORS()
