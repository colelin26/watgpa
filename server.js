const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const upload = multer({
    dest: 'uploads/' // this saves your file into a directory called "uploads"
}); 
const scraper = require('./server/scripts/transcriptScraper');

app.use(express.static('public'));

app.listen(port, () => console.log(`WAT_GPA started on ${port}!`))

// Routing
app.get('/', function (req, res) {
    res.sendFile('index.html');
  });


app.post('/pdf/transcript', upload.single('transcript'), async function (req, res, next) {
     let pdfPath = `${req.file.destination}${req.file.filename}`;
     let pdfJSON = await scraper.scrape_transcript(pdfPath);
     res.json(pdfJSON);
})