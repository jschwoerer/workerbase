import express from 'express'

import { findReceivedEmails } from '../../services/received'

const router = express.Router()
router.get(
  '/',
  (req: express.Request, res: express.Response) => {
    findReceivedEmails()
      .then((result) => res.send(result))
      .catch(() => res.status(500).end())
  }
)

export default router
