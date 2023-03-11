# Test4 Backend

An Express.js App for sending, storing sent, receiving sent, and storing
said received emails.

## Requirements
In order to run this app you while need:
- [Node.JS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/)
- A [PostmarkApp](https://postmarkapp.com/) API Token

## Setup
In order to start this application you will need:

1. A MongoDB Server with the ability to connect to said server
2. The built version of the Frontend of this app somewhere on the machine running the Backend
3. To add a .env file with the following variables
  - WORKERBASE_STATIC_PATH=<PATH_TO_FRONTEND_BUILD_DIR>
  - WORKERBASE_POSTMARK_TOKEN=<AN_ACCESS_TOKEN_TO_POSTMARK>
  - WORKERBASE_MONGODB_URL=<THE_URL_TO_THE_MONGODB_USED_BY_THIS_APP>

If you would like to run the App in development mode, you can run the following code:
`npm run dev`

If you would like to run the App in production mode, run the following commands:
`npm run build && node ./dist/index.js`

**NOTE:** This production will only build if the linting process is successful.

