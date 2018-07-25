//dependencies
const express = require('express'),
      PORT = process.env.PORT || 3000


//initializing the app
const app = express()

app.use(express.static('client/build'))


app.listen(PORT, function(){
  console.log("Server listening on https://localhost:" + PORT)
}) 