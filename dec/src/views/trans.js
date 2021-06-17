// const fs = require("fs");
const generatePDF = async (name, Date, ExpName, Aim, Apparatus) => {
  const { PDFDocument } = require("pdf-lib");
  // const { file } = require("googleapis/build/src/apis/file");
  const fetch = require("node-fetch");
  const exBytes = await fetch(
    "http://www.africau.edu/images/default/sample.pdf"
  ).then((res) => {
    return res.arrayBuffer();
  });
  // const marioUrl = "https://pdf-lib.js.org/assets/small_mario.png";
  // const marioImageBytes = await fetch(marioUrl).then((res) =>
  //   res.arrayBuffer()
  // );
  // const exFont = await fetch("./OpenSans-Regular.ttf").then((res) => {
  //   return res.arrayBuffer();
  // });
  // // console.log(exBytes);

  const pdfDoc = await PDFDocument.load(exBytes);

  // const marioImage = await pdfDoc.embedPng(marioImageBytes);
  // const pngDims = marioImage.scale(0.5);
  // const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  // // pdfDoc.registerFontkit(fontKit);
  // // const myFont = await pdfDoc.embedFont(exFont);
  // // const img = await pdfDoc.embedJpg(fs.readFileSync("./ZAID.jpg"));
  // // pages[0].setImage(marioImage);
  const pages = pdfDoc.getPages();
  pages[0].drawText(name, {
    x: 140,
    y: 741,
    size: 18,
  });
  pages[0].drawText(Date, {
    x: 340,
    y: 742,
    size: 18,
  });
  pages[0].drawText(ExpName, {
    x: 300,
    y: 707,
    size: 18,
  });
  pages[0].drawText(Aim, {
    x: 123,
    y: 649,
    size: 17,
  });
  pages[0].drawText(Apparatus, {
    x: 203,
    y: 590,
    size: 17,
  });
  // pages[0].drawImage(marioImage, {
  //   x: pages[0].getWidth() / 2 - pngDims.width / 2 + 50,
  //   y: pages[0].getHeight() / 2 - pngDims.height + 230,
  //   width: pngDims.width - 70,
  //   height: pngDims.height - 70,
  // });
  const uri = await pdfDoc.saveAsBase64({ dataUri: true });
  // document.getElementById("mypdf").src = uri;
  return uri;
  // console.log(name);
  // console.log(ExpName);
  // console.log(Date);
  // console.log(Aim);
  // console.log(Apparatus);
  // console.log(filename);
};

module.exports = generatePDF;
