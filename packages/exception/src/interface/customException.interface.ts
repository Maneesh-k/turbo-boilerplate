interface ICustomException {
	code?: string
	status: number
	message: string
	detailedMessage?: string
}

export { ICustomException }
