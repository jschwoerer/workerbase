import express from 'express'

// WORKERBASE_STATIC_PATH is validated in configs/dotenv.ts
// and startup is aborted if it does not exist. Therefore,
// assume it exists here.
const staticPath = String(process.env.WORKERBASE_STATIC_PATH)

const router = express.Router()

router.use(express.static(staticPath))

router.get(
  '*',
  (req: express.Request, res: express.Response) => {
    res.sendFile('index.html', { root: staticPath })
  }
)

export default router
