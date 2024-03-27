import crypto from "crypto"

const createHash = (data: string) =>
	crypto
		.createHash("sha256")
		.update(data + Date.now().toString())
		.digest("hex")

function generateRandomString(length: number): string {
	const randomBuffer = crypto.randomBytes(length / 2)
	const randomString = randomBuffer.toString("hex")
	return randomString
}

function getRedisOptions(url: string): any {
	const { protocol, hostname, port, username, password } = new URL(url)

	const isSecure = protocol.startsWith("rediss")

	const tls = isSecure ? { rejectUnauthorized: false } : undefined

	return { host: hostname, port: Number(port), username, password, tls }
}

export { createHash, generateRandomString, getRedisOptions }
