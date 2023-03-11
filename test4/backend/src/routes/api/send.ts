import express from 'express'
import { body, validationResult } from 'express-validator'

import { createAndSendEmail } from '../../services/sent'

export default express.Router().post(
  '/',
  body('sender').notEmpty().isEmail(),
  body('recipient').notEmpty().isEmail(),
  body('subject').notEmpty().isString(),
  body('body').notEmpty().isString(),
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const doc = {
      sender: req.body.sender,
      recipient: req.body.recipient,
      subject: req.body.subject,
      body: req.body.body,
      sent: false
    }

    void createAndSendEmail(doc)

    res.send()
  }
)
