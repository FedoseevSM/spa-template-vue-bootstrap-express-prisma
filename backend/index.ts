import express from 'express'

const app = express()
const port = Number(process.env.SERVER_PORT) || 3001

app.listen(port, () => {
  console.log(`Server started on port: ${port}`)
})