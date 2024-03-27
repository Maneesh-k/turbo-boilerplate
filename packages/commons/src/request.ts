import axios, { AxiosRequestConfig } from "axios"
import { asyncWrapper } from "./asyncWapper"

function axiosInstanceWithRetry() {
	const axiosInstance = axios.create({ timeout: 5000 })

	return axiosInstance
}

const axiosWithRetry = axiosInstanceWithRetry()

const get = async (
	url: string,
	options?: AxiosRequestConfig
): Promise<[Error | null, any | null]> => {
	const [err, res] = await asyncWrapper(axiosWithRetry.get(url, options))

	return [err, res]
}

const post = async (
	url: string,
	data: Record<string, any> | string,
	options?: AxiosRequestConfig
): Promise<[Error | null, any | null]> => {
	const [err, res] = await asyncWrapper(axiosWithRetry.post(url, data, options))

	return [err, res]
}

const del = async (
	url: string,
	options?: AxiosRequestConfig
): Promise<[Error | null, any | null]> => {
	const [err, res] = await asyncWrapper(axiosWithRetry.delete(url, options))

	return [err, res]
}

const put = async (
	url: string,
	data: Record<string, any>,
	options?: AxiosRequestConfig
): Promise<[Error | null, any | null]> => {
	const [err, res] = await asyncWrapper(axios.put(url, data, options))

	return [err, res]
}

const http = { get, post, del, put } as HttpMethods

interface HttpMethods {
	get: (
		url: string,
		options?: AxiosRequestConfig<any> | undefined
	) => Promise<[Error | null, any]>
	post: (
		url: string,
		data: string | Record<string, any>,
		options?: AxiosRequestConfig<any> | undefined
	) => Promise<[Error | null, any]>
	put: (
		url: string,
		data: string | Record<string, any>,
		options?: AxiosRequestConfig<any> | undefined
	) => Promise<[Error | null, any]>
	del: (
		url: string,
		options?: AxiosRequestConfig<any> | undefined
	) => Promise<[Error | null, any]>
}

export { http }
