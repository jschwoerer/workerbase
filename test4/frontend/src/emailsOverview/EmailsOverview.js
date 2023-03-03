import Navigation from '../navigation/Navigation';
import EmailDetails from '../emailDetails/EmailDetails';


export default function EmailsOverview(props) {
	return (
		<div>
			<Navigation />
	
			<h1>{props.header}</h1>
	
			{
				props.emails.map((email, index) => (
					<EmailDetails
						key={index}
						subject={email.subject}
						from={email.from}
						to={email.to}
						body={email.body}
					></EmailDetails>
				))
			}
		</div>
	);
}
