import Navigation from '../navigation/Navigation';
import ReceivedDetails from '../receivedDetails/ReceivedDetails';


export default function ReceivedOverview(props) {
	return (
		<div>
			<Navigation />
	
			<h1>{props.header}</h1>
	
			{
				props.emails.map((email, index) => (
					<ReceivedDetails
						key={index}
						messageId={email.MessageID}
						recipient={email.Recipient}
						details={email.Details}
						tag={email.Tag}
						recordType={email.RecordType}
					></ReceivedDetails>
				))
			}
		</div>
	);
}
