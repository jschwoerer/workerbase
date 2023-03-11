import React, { Component } from 'react'

import ReceivedOverview from '../receivedOverview/ReceivedOverview'

import { getReceivedEmails } from '../services/receivedService'

export default class ReceivedEmails extends Component {
  constructor () {
    super()

    this.state = {
      receivedEmails: []
    }
  }

  async componentWillMount () {
    this.setState({
      ...this.state,
      receivedEmails: await getReceivedEmails()
    })
  }

  render () {
    return <ReceivedOverview
			header="Recevied Emails"
			emails={this.state.receivedEmails}
		></ReceivedOverview>
  }
}
