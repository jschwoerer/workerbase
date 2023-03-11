import dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()

// Check for required config values.
if (process.env.WORKERBASE_MONGODB_URL === undefined) {
  throw new Error('Mongo URL is not set')
}
if (process.env.POSTMARK_TOKEN === undefined) {
  throw new Error('Aborting startup: Postmark Token is unset!')
}
const staticPath = process.env.WORKERBASE_STATIC_PATH
if (staticPath === undefined || !fs.existsSync(staticPath)) {
  throw new Error('Static directory is not set or does not exist')
}
