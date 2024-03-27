const asyncWrapper = <R = any, E = any>(promise: Promise<any>): Promise<[null, R] | [E]> => {
	return new Promise(resolve => {
		promise.then(data => resolve([null, data])).catch(err => resolve([err]))
	})
}

export { asyncWrapper }
