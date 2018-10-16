const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({
    dest: 'uploads/' // this saves your file into a directory called "uploads"
}); 
const jsonGene = require('./server/scripts/JSONgenerator');

app.use(express.static('public'));

app.listen(port, () => console.log(`WAT_GPA started on ${port}!`))

// Routing
app.get('/', function (req, res) {
    res.sendFile('index.html');
  });

app.post('/pdf/transcript', upload.single('transcript'), function (req, res, next) {
     console.log(req);
    let pdfPath = `${req.file.destination}${req.file.filename}`;
    console.log(pdfPath);
    let pdfJSON = jsonGene.pdf_to_JSON(pdfPath);
    console.log(pdfJSON);
})