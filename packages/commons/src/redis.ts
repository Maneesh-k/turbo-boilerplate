import Redis from "ioredis"
import { redisConfig } from "./config"

console.log("Connecting to Redis...")

const client = new Redis(redisConfig.url)

client.on("connect", function () {
	console.log("Connected to Redis")
})

client.on("error", function (err: any) {
	console.error("Error connecting to Redis:", err)
})

export { client }
