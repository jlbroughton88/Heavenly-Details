const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.send("Hello from server")
})

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"))
    })
  } else {
    app.use(express.static(path.join(__dirname, "/client/public")));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/public/index.html"))
    })
  }
  

app.listen(process.env.PORT || 5001, () => {
    console.log("Server listening on port 5001")
}) 