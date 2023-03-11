import axios from 'axios'

import workerbaseDB from '../utils/db/mongo'
import { type Email, type PostmarkEmail } from '../models'
import { logToStdErr } from '../utils/errors/console'

export async function findReceivedEmails (): Promise<Email[]> {
  return await workerbaseDB
    .collection<Email>('received')
    .find()
    .project<Email>({
    _id: 0,
    sender: 1,
    recipient: 1,
    subject: 1,
    body: 1
  })
    .toArray()
}

export async function receiveEmail (messageID: string): Promise<void> {
  let email: PostmarkEmail
  try {
    const resp = await axios.get<PostmarkEmail>(
      `https://api.postmarkapp.com/messages/outbound/${messageID}/details`
    )

    email = resp.data
  } catch (err) {
    logToStdErr(err)

    throw new Error('Could not find email in outputstream')
  }

  try {
    await workerbaseDB
      .collection<Email>('received')
      .insertOne({
        sender: email.From,
        recipient: email.Recipients[0], // This app only sends to one recipient so assume there is only one recipient
        subject: email.Subject,
        body: email.TextBody
      })
  } catch (err) {
    logToStdErr(err)

    throw new Error('Could not store received email')
  }
}
