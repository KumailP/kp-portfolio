const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
var bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const { check, validationResult } = require("express-validator/check");
const nodemailer = require("nodemailer");
const xoauth2 = require("xoauth2");

require("dotenv").config();

const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 80);

const app = express();

app.use(express.static(path.resolve(__dirname, "build")));
app.use(
  favicon(path.join(__dirname, "build", "images", "favicons", "favicon.ico"))
);
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

const dev = app.get("env") !== "production";

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));
}

if (dev) {
  app.use(morgan("dev"));
}

app.post(
  "/contact/submit",
  [
    // General error messages can be given as a 2nd argument in the check APIs
    check("email")
      .isEmail()
      .withMessage("must be an email")
      .trim()
      .normalizeEmail()
  ],

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("There were errors");
      res.send("Invalid email");
      // return res.status(422).json({ errors: errors.mapped() });
    } else {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: "kumailpirzada@gmail.com",
          clientId: process.env.CLIENT_ID,
          clientSecret: process.env.CLIENT_SECRET,
          refreshToken: process.env.REFRESH_TOKEN,
          accessToken: process.env.ACCESS_TOKEN
        },
        tls: { rejectUnauthorized: false }
      });

      // setup email data with unicode symbols
      let mailOptions = {
        from: req.body.email, // sender address
        to: "kumailpirzada@gmail.com", // list of receivers
        subject: "Message from " + req.body.name + " on portfolio website", // Subject line
        text: req.body.msg, // plain text body
        html:
          "<b>" +
          req.body.name +
          "</b> says, <br/><br/>" +
          req.body.msg +
          "<br/><br/><b>Contact Address: " +
          req.body.email // html body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log("Message sent: %s", info.messageId);
      });

      setTimeout(() => {
        res.redirect("/contact");
      }, 3000);
    }
  }
);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

const server = createServer(app);

server.listen(PORT, err => {
  if (err) throw err;

  console.log("Server started!");
});
