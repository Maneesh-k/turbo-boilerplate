import dotenv from "dotenv"
import path from "path"

import { Database } from "./Database"
import Express from "./Express"

class App {
	// Loads your dotenv file
	public loadConfiguration(): void {
		dotenv.config({ path: path.join(__dirname, "../../.env") })
	}

	// Loads your Server
	public loadServer(): void {
		Express.init()
	}

	// Loads the Database Pool
	public loadDatabase(): void {
		Database.init()
	}
}

export default new App()
