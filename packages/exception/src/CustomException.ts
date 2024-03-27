import { HttpStatus, StatusToText, TextToStatus } from "@packages/commons"
import { ICustomException } from "./interface/customException.interface"

class CustomException extends Error implements ICustomException {
	public status: number
	public code: string
	public message: string
	public detailedMessage?: string

	constructor(exception: ICustomException) {
		super(exception.message)

		this.code =
			exception.code ||
			StatusToText[`${exception.status}`] ||
			HttpStatus.INTERNAL_SERVER_ERROR
		this.status = exception.status || TextToStatus[exception.code || ""] || 500
		this.message = exception.message
		this.detailedMessage = exception.detailedMessage
	}
}

export { CustomException }
