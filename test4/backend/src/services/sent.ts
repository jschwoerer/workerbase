import axios, { isAxiosError } from 'axios'
import { type ObjectId } from 'mongodb'

import workerbaseDB from '../utils/db/mongo'
import { logToStdErr } from '../utils/errors/console'
import { type SentEmail } from '../models'

export async function findSentEmails (): Promise<SentEmail[]> {
  return await workerbaseDB
    .collection<SentEmail>('sent')
    .find()
    .project<SentEmail>({
    _id: 0,
    sender: 1,
    recipient: 1,
    subject: 1,
    body: 1,
    errMsg: 1,
    sent: 1
  })
    .toArray()
}

export async function createAndSendEmail (email: SentEmail): Promise<void> {
  const objectId = await saveUnsentEmail(email)

  void sendEmailViaPostmark(objectId, email)
}

async function saveUnsentEmail (email: SentEmail): Promise<ObjectId> {
  const result = await workerbaseDB
    .collection<SentEmail>('sent')
    .insertOne({
      ...email,
      // Force sent to false since this Email is considered unsent
      sent: false
    })

  return result.insertedId
}

async function sendEmailViaPostmark (objectId: ObjectId, email: SentEmail): Promise<void> {
  try {
    await axios.post(
      'https://api.postmarkapp.com/email',
      {
        From: email.sender,
        To: email.recipient,
        Subject: email.subject,
        TextBody: email.body
      },
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Postmark-Server-Token': process.env.POSTMARK_TOKEN
        }
      }
    )

    updateOnSuccess(objectId)
  } catch (err) {
    logToStdErr(err)

    if (
      isAxiosError(err) &&
      err.response !== undefined &&
      err.response.data !== undefined &&
      err.response.data.Message !== undefined
    ) {
      updateOnError(
        objectId,
        err.response.data.Message
      )

      return
    }

    updateOnError(
      objectId,
      'Unexpected error: Please contact support'
    )
  }
}

function updateOnSuccess (objectId: ObjectId): void {
  workerbaseDB
    .collection<SentEmail>('sent')
    .findOneAndUpdate(
      { _id: objectId },
      {
        $set: {
          errMsg: undefined,
          sent: true
        }
      }
    )
    .catch(logToStdErr)
}

function updateOnError (objectId: ObjectId, errMsg: string): void {
  workerbaseDB
    .collection<SentEmail>('sent')
    .findOneAndUpdate(
      { _id: objectId },
      {
        $set: {
          errMsg,
          sent: true
        }
      }
    )
    .catch(logToStdErr)
}
