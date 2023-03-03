import axios from 'axios';

export async function getReceivedEmails() {
	try {
		const resp = await axios.get('/api/received');

		return resp.data;
	} catch (err) {
		return [];
	}
}
