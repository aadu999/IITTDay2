const express = require("express")
const app = express()
const port = 3000
const path = require("path")
const bodyParser = require("body-parser")

app.use(express.static(path.join(__dirname, "public")))
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1><a href='/page'>Go to Page</a>")
})
app.get("/page", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"))
})

app.use(bodyParser.urlencoded({ extended: true }))
app.post("/login", (req, res) => {
  // log the request from req
  console.log(req.body)
  res.send("You are logged in")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
