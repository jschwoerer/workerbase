import React, { Component } from 'react';

import Navigation from '../navigation/Navigation';

import { postSendEmail } from '../services/sendService.js';

import './EmailForm.css';

export default class EmailForm extends Component {
	
	constructor() {
		super();

		this.state = {
			subject: '',
			to: '',
			from: '',
			body: '',
			message: ''
		};
	}

	async handleSubmit(event) {
		event.preventDefault();

		try {
			this.setState({message: 'Email Sent'});

			await postSendEmail({
				subject: this.state.subject,
				to: this.state.to,
				from: this.state.from,
				body: this.state.body
			});

			this.setState({message: 'Email Sent'});
		} catch (error) {
			this.setState({message: 'Failed to send Email'});
		}
	}

	render() {
		return (
			<div>
				<Navigation />

				<h1>Send an Email</h1>

				{this.state && (<h3>{this.state.message}</h3>)}
			
				<form className="emailForm" onSubmit={(event) => this.handleSubmit(event)}>
					<div>
						<label>
							Subject:
							<input type="text" name="emailSubject" value={this.state.subject} required onChange={(event) => this.setState({ subject: event.target.value })} />
						</label>
					</div>
					<div className="emailAddresses">
						<label>
							From:
							<input type="email" name="emailFrom" value={this.state.from} required onChange={(event) => this.setState({ from: event.target.value })} />
						</label>
						<label>
							To:
							<input type="email" name="emailTo" value={this.state.to} required onChange={(event) => this.setState({ to: event.target.value })} />
						</label>
					</div>
					<div>
						<label>
							Body:
							<textarea value={this.state.body} name="emailBody" onChange={(event) => this.setState({ body: event.target.value })}/>
						</label>
					</div>
		
					<button>Send</button>
				</form>
			</div>
		);
	}
}
