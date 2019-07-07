const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const favicon = require("serve-favicon");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(favicon(__dirname + "/favicon.ico"));

app.post("/contacts", (req, res) => {
  console.log(req.body);
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
        <h3>Контактная информация:</h3>
        <ul>
        <li>Имя: ${req.body.name}</li>
        <li>Фамилия: ${req.body.lastName}</li> 
        <li>Email: ${req.body.email}</li>
        <li>Телефон: ${req.body.phone}</li>
        <li>Организация: ${req.body.organization}</li>
        </ul>
        <h3>Сообщение</h3>
        <p>${req.body.message}</p>
        `;
    let transporter = nodemailer.createTransport({
      host: "cpanel08.helpdesk.by",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: process.env.REACT_APP_EMAIL,
        pass: process.env.REACT_APP_PASS
      }
    });

    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    let mailOptions = {
      to: process.env.REACT_APP_EMAIL,
      from: req.body.name,
      subject: "Новое сообщение",
      text: req.body.message,
      html: htmlEmail
    };
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }
    });
  });
});

const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
