import express from 'express'

import { findSentEmails } from '../../services/sent'

export default express.Router()
  .get(
    '/',
    (req: express.Request, res: express.Response) => {
      findSentEmails()
        .then((result) => res.send(result))
        .catch(() => { res.status(500).end() })
    }
  )
