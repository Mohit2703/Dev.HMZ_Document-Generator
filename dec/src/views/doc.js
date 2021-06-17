const PDFDocument = require("pdfkit");
const fs = require("fs");

// Create a document
const doc = new PDFDocument();

// Pipe its output somewhere, like to a file or HTTP response
// See below for browser usage
doc.pipe(fs.createWriteStream("output.pdf"));
doc.fontSize(20).text("Name_student:",20,20);
doc.fontSize(20).text("Date:",450,20);
doc.fontSize(30).text("EXPERIMENT", 220, 50);
doc.fontSize(20).text("Aim:", 20, 100);
doc.fontSize(20).text("Apparatus:", 20, 180);
doc.fontSize(20).text("Diagram:", 20, 300);
doc.rect(8,10,595,770);
doc.stroke()
doc.rect(20,330,570,0);
doc.stroke()
doc.image("ZAID.jpg",150,350 ,{
  fit: [300, 400],
  align: "center",
  valign: "center",
});
doc.addPage();
doc.rect(8,10,595,770);
doc.stroke();
doc.fontSize(20).text("Theory:",20,40);
doc.end();
