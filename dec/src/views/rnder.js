var express = require("express"),
  app = express(),
  pdf = require("express-pdf"),
  path = require("path");

//previously app.use(pdf())
app.use(pdf); // or you can app.use(require('express-pdf'));

app.use("/pdfFromHTML", function (req, res) {
  res.pdfFromHTML({
    filename: "generated.pdf",
    html: path.resolve(__dirname, "./template.html"),
  });
});

app.use("/pdfFromHTMLString", function (req, res) {
  res.pdfFromHTML({
    filename: "generated.pdf",
    htmlContent: "<html><body>ASDF</body></html>",
  });
});

app.use("/pd", function (req, res) {
  res.pdf(path.resolve(__dirname, "./new.pdf"));
});
