const downPdf = async (name, date, expName, Aim, Instruments) => {
  const PDFDocument = require("pdfkit");
  const fs = require("fs");

  // Create a document
  const doc = new PDFDocument();

  // Pipe its output somewhere, like to a file or HTTP response
  // See below for browser usage
  doc.pipe(fs.createWriteStream(expName + ".pdf"));
  doc.fontSize(20).text("Name:" + name, 20, 20);
  doc
    .fontSize(20)
    .text("Date:" + date, 380, 20)
    .fillColor("red");

  doc.fontSize(30).text(expName, 180, 50).fillColor("black");
  doc.fontSize(20).text("Aim:" + Aim, 20, 100);
  doc.fontSize(20).text("Apparatus:" + Instruments, 20, 180);
  doc.fontSize(20).text("Diagram:", 20, 300);
  doc.rect(8, 10, 595, 770);
  // doc.stroke();
  doc.rect(20, 330, 570, 0);
  // doc.stroke();
  doc.image("ZAID.jpg", 150, 350, {
    fit: [300, 400],
    align: "center",
    valign: "center",
  });
  doc.addPage();
  doc.rect(8, 10, 595, 770);
  doc.stroke();
  doc.fontSize(20).text("Theory:", 20, 40);
  doc.end();
};
module.exports = downPdf;
