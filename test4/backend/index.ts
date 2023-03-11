import express from 'express'
import cors from 'cors'

import './src/configs'

import Routes from './src/routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(Routes)

app.listen(80, () => {
  console.log('Starting Workerbase Test4 Backend')
})
