const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World jenkins successs test!')
})

app.listen(port, () => {
  console.log(`Example apps listening at http://localhost:${port}`)
})
