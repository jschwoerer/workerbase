import React, { Component } from 'react'

import EmailsOverview from '../emailsOverview/EmailsOverview'

import { getSentEmails } from '../services/sentService'

export default class SentEmails extends Component {
  constructor () {
    super()

    this.state = {
      sentEmails: []
    }
  }

  async componentWillMount () {
    this.setState({
      ...this.state,
      sentEmails: await getSentEmails()
    })
  }

  render () {
    return <EmailsOverview
			header="Sent Emails"
			emails={this.state.sentEmails}
		></EmailsOverview>
  }
}
