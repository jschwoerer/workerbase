import axios from 'axios';

export async function postSendEmail(body) {
	try {
		return await axios.post(
			'/api/send',
			body,
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		);
	}
	catch (err) {
		console.error(err);
	}

}
