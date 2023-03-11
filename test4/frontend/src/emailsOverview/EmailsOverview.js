import Navigation from '../navigation/Navigation'
import EmailDetails from '../emailDetails/EmailDetails'

export default function EmailsOverview (props) {
  return (
		<div>
			<Navigation />

			<h1>{props.header}</h1>

			{
				props.emails.map((email, index) => (
					<EmailDetails
						key={index}
						subject={email.subject}
						sender={email.sender}
						recipient={email.recipient}
						body={email.body}
					>
            {
              email.errMsg && (
                <h4>
                  Error Sending Email:
                  <span className="errMsg"> {email.errMsg}</span>
                </h4>
              )
            }
          </EmailDetails>
				))
			}
		</div>
  )
}
