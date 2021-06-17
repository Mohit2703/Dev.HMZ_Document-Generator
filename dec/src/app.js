const express = require("express");
const generatePDF = require("./views/trans.js");
const downPdf = require("./views/doc.js");
// const alert = require("alert");
// const path=require('path');
const bodyParser = require("body-parser");
const htpp = require("http");
const ejs = require("ejs");
const multer = require("multer");
const app = express();
const server = htpp.createServer(app);
const PORT = 80 || process.env.PORT;
const hostname = "127.0.0.1";
const fs = require("fs");
// const { readUInt16 } = require("pdfkit/js/data");
app.use(express.urlencoded({ extended: true }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(express.static("../public"));
// const Register = require("./models/registers");
app.use(express.static("../public/images"));
app.use(express.static("../public/css"));
app.use(express.static("../public/script"));

app.set("view engine", "ejs");

var or = null;
var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    var dir = "./uploads";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    callback(null, dir);
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
    or = file.originalname;
  },
});

var upload = multer({ storage: storage }).array("files", 12);
app.post("/upload", (req, res, next) => {
  upload(req, res, function (err) {
    if (err) {
      return res.send("something wrong");
    }
    res.send("upload complete");
    console.log(or);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/video", (req, res) => {
  res.render("video");
});
app.get("/pdf", (req, res) => {
  res.render("pdf");
});
// app.get("/im", (req, res) => {
//   res.render("im");
// });
var sName = null;
var sExp = null;
var sAim = null;
var sDate = null;
var sColor = null;
var sInst = null;
app.post("/gen", (req, res) => {
  res.render("gen");
  sName = req.body.user.name;
  console.log(sName);
  sExp = req.body.user.exp;
  console.log(sExp);
  sAim = req.body.user.aim;
  console.log(sAim);
  sDate = req.body.user.date;
  console.log(sDate);
  sColor = req.body.user.color;
  console.log(sColor);
  sInst = req.body.user.inst;
  console.log(sInst);
  downPdf();
});

// app.get("/homeWebApp", (req, res) => {
//   res.sendFile(__dirname + "/homeWebApp.html");
// });
// app.get("/chatPage", (req, res) => {
//   res.sendFile(__dirname + "/chatPage.html");
// });

server.listen(PORT, () => {
  console.log(`The application has started on port http://${hostname}:${PORT}`);
});
