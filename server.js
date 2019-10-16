const express = require("express");
const app = express();
const path = require("path");
// Nodemailer stuff
const nodemailer = require("nodemailer");
const creds = require("./.env");
const cors = require("cors");
const bodyParser = require("body-parser");

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  },
  tls: {
    rejectUnauthorized: false
  }
});

transporter.verify((err, success) => {
  if (err) {
    console.log(err)
  } else {
    console.log("Server is ready to take messages")
  }
})

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
if (process.env.NODE_ENV === "production") {
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
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.post("/send", (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message}`

  let mail = {
    from: name,
    to: "jlbroughton88@gmail.com",
    subject: "Test from contact form",
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "Message failed"
      })
    } else {
      res.json({
        msg: "Message succeeded!"
      })
    }
  })
});









app.listen(process.env.PORT || 5001, () => {
  console.log("Server listening on port 5001")
}) 