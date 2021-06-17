const PDFDocument = require("pdfkit");
const fs = require("fs");

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream("output.pdf"));

doc.fontSize(30).text("EXPERIMENT", 220, 5);
doc.fontSize(20).text("Aim:", 0, 40);
doc.fontSize(20).text("Apparatus:", 0, 80);

doc.image("ZAID.jpg", {
  fit: [250, 300],
  align: "center",
  valign: "center",
});
doc.end();
