import React from 'react'

import Navigation from '../navigation/Navigation'
import EmailDetails from '../emailDetails/EmailDetails'

export default function ReceivedOverview (props) {
return (
	<div>
		<Navigation />

		<h1>{props.header}</h1>

		{props.emails.map((email, index) => (
			<EmailDetails
				key={index}
				subject={email.subject}
				sender={email.sender}
				recipient={email.recipient}
				body={email.body}
			></EmailDetails>
		))}
	</div>
)
}
