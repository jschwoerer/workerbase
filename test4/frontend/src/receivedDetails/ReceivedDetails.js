import './ReceivedDetails.css';

export default function ReceivedDetails(props) {
	return (
		<div className="receivedDetails">
			<div>
				<span className="headerLabel">Message ID:</span> {props.messageId}	
			</div>
			<div>
				<span className="headerLabel">Recipient:</span> {props.recipient}	
			</div>
			<div>
				<span className="headerLabel">Details:</span> {props.details}	
			</div>
			<div>
				<span className="headerLabel">Tag:</span> {props.tag}	
			</div>
			<div>
				<span className="headerLabel">RecordType:</span> {props.recordType}	
			</div>
		</div>
	);
}
