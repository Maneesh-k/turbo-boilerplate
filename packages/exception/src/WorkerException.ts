import { IWorkerException } from "./interface/workerException.interface"

class WorkerException extends Error {
	private code: string | number | undefined

	private detailedMessage: string | undefined

	constructor(exception: IWorkerException) {
		const { error, message } = exception

		super(message)

		const { code: workerCode, message: workerMessage } = error || {}

		this.code = workerCode

		this.detailedMessage = workerMessage
	}
}

export { WorkerException }
