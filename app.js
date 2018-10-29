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

app.post('/pdf/transcript', upload.single('transcript'), async function (req, res, next) {
     let pdfPath = `${req.file.destination}${req.file.filename}`;
     let pdfJSON = await jsonGene.pdf_to_JSON(pdfPath);
     res.json(pdfJSON);
})