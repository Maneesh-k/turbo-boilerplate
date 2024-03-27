export interface IWorkerException {
	message: string
	error?: Error
}

export interface Error {
	message: string
	code: string | number
}
