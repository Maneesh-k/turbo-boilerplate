import Locals from "./Locals"
import mongoose from "mongoose"
import Logger from "@packages/logger/src/Logger"

export class Database {
	public static init(): any {
		const dsn = Locals.config().mongooseUrl

		const options = { autoIndex: true }

		mongoose
			.connect(dsn, options)
			.then(() => {
				Logger.infoLogger({ message: "MongoDB connected" })
			})
			.catch((error: any) => {
				Logger.errorLogger({ message: "MongoDB connection error", error })
				throw error
			})
	}
}

export default mongoose
