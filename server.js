const express = require('express')
const app = express()
const PORT = 8080

// parses requests for JSON
app.use(express.json())

// may need this, may not.
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
)