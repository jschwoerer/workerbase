import './EmailDetails.css';

export default function EmailDetails(props) {
	return (
		<div className="emailDetails">
			<div className="emailSubject">
				<h2>Subject</h2>
				{props.subject}
			</div>
			<div>
				<h2>Addresses</h2>
				<div className="emailAddresses">
					<div>
						<span className="headerLabel">From:</span>
						{props.from}
					</div>
					<div>
						<span className="headerLabel">To:</span>
						{props.to}
					</div>
				</div>
			</div>
			<div className="emailBody">
				<h2>Body</h2>
				{props.body}
			</div>
		</div>
	);
}
