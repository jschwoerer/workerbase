import express from 'express'

import sendRoutes from './send'
import sentRoutes from './sent'
import receiveRoutes from './receive'
import receivedRoutes from './received'

const router = express.Router()

router.use('/send', sendRoutes)
router.use('/sent', sentRoutes)
router.use('/receive', receiveRoutes)
router.use('/received', receivedRoutes)

export default router
