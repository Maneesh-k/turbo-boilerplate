import { http } from "@packages/commons"
import { slackBotToken } from "./config"

const sendMessage = async (channelId: String, message: any): Promise<void> => {
	const url = "https://slack.com/api/chat.postMessage"

	const config = {
		headers: {
			Authorization: `Bearer ${slackBotToken}`,
			"Content-Type": "application/json"
		}
	}

	const body = {
		...message,
		channel: channelId,
		unfurl_links: false
	}

	const [error, response] = await http.post(url, body, config)

	if (error) throw new Error(error.message)

	if (response.data?.error) throw new Error(response.data?.error)
}

export { sendMessage }
