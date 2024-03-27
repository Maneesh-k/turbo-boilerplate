import reqIdTracker from "cls-rtracer"
import { cacheStore } from "./nodecache"

interface ILog {
	contextLog: Record<string, any>
	errorLog: Record<string, any>
	externalApiCall: any[]
}

const contextLog = (key: string, value: Record<string, any>): void => {
	const reqId = reqIdTracker.id() as string

	if (!reqId) return

	const log: ILog = cacheStore.get(reqId) || { contextLog: {}, errorLog: {}, externalApiCall: [] }

	const exists = log.contextLog[key]

	log.contextLog[key] = { ...exists, ...value }

	cacheStore.set(reqId, log)
}

const errorLog = (key: string, value: Record<string, any>): void => {
	const reqId = reqIdTracker.id() as string

	if (!reqId) return

	const log: ILog = cacheStore.get(reqId) || { contextLog: {}, errorLog: {}, externalApiCall: [] }

	const exists = log.errorLog[key]

	log.errorLog[key] = { ...exists, ...value }

	cacheStore.set(reqId, log)
}

export { ILog, contextLog, errorLog }
