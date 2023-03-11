import './EmailDetails.css'

export default function EmailDetails (props) {
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
						<span className="headerLabel">Sender:</span>
						{props.sender}
					</div>
					<div>
						<span className="headerLabel">recipient:</span>
						{props.recipient}
					</div>
				</div>
			</div>
			<div className="emailBody">
				<h2>Body</h2>
				{props.body}
			</div>
      {!!props.children && (
        <div className="emailMisc">
          {props.children}
        </div>
      )}
		</div>
  )
}
