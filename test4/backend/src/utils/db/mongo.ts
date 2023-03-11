import { MongoClient, type Db } from 'mongodb'

import { logToStdErr } from '../errors/console'

let db: Db
// WORKERBASE_MONGODB_URL is validated in configs/dotenv.ts
// and startup is aborted if it does not exist. Therefore,
// assume it exists here.
try {
  db = new MongoClient(String(process.env.WORKERBASE_MONGODB_URL))
    .db('workerbase')
} catch (err) {
  logToStdErr(err)

  throw new Error('Could not connect to Workerbase DB. Aborting!')
}

export default db
