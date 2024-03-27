import NativeEvent from "@packages/exception/src/NativeEvent"
import App from "./providers/app"

NativeEvent.process()
/**
 * Run the Database pool
 */
App.loadDatabase()

/**
 * Run the Server on Clusters
 */
App.loadServer()
