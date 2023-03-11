import React, { Component } from 'react'

import Navigation from '../navigation/Navigation'

import { postSendEmail } from '../services/sendService.js'

import './EmailForm.css'

export default class EmailForm extends Component {
  constructor () {
    super()

    this.state = {
      subject: '',
      sender: '',
      recipient: '',
      body: '',
      message: ''
    }
  }

  async handleSubmit (event) {
    event.preventDefault()

    try {
      this.setState({ message: 'Sending Email' })

      await postSendEmail({
        subject: this.state.subject,
        sender: this.state.sender,
        recipient: this.state.recipient,
        body: this.state.body
      })

      this.setState({ message: 'Email Sent' })
    } catch (error) {
      this.setState({ message: 'Failed to send Email' })
    }
  }

  render () {
    return (
			<div>
				<Navigation />

				<h1>Send an Email</h1>

				{this.state && this.state.message && (<h3>{this.state.message}</h3>)}

				<form className="emailForm" onSubmit={(event) => this.handleSubmit(event)}>
					<div>
						<label>
							Subject:
							<input type="text" name="emailSubject" value={this.state.subject} required onChange={(event) => this.setState({ subject: event.target.value })} />
						</label>
					</div>
					<div className="emailAddresses">
						<label>
							Sender:
							<input type="email" name="emailSender" value={this.state.sender} required onChange={(event) => this.setState({ sender: event.target.value })} />
						</label>
						<label>
							Recipient:
							<input type="email" name="emailRecipient" value={this.state.recipient} required onChange={(event) => this.setState({ recipient: event.target.value })} />
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
    )
  }
}
