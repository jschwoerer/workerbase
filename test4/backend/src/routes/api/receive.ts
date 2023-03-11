import express from 'express'
import { body, validationResult } from 'express-validator'

import { logToStdErr } from '../../utils/errors/console'
import { receiveEmail } from '../../services/received'

// TODO consider adding webhook check and create logic?

export default express.Router().post(
  '/',
  body('MessageID').notEmpty(),
  (req: express.Request, res: express.Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: ['No messageID provided'] })
    }

    receiveEmail(req.body.MessageID)
      .then((result) => res.send())
      .catch((err) => {
        logToStdErr(err)

        res.status(400).json({ errors: ['Could not save email'] })
      })
  })
