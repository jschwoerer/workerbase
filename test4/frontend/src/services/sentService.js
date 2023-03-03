import axios from 'axios';

export async function getSentEmails() {
	try {
		const resp = await axios.get('/api/sent');

		return resp.data;
	} catch (error) {
		return [];
	}
}
