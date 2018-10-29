let gpacal = require('./gpaCalculator');
let pdfscraper = require('./transcriptScraper');

exports.pdf_to_JSON = async function(filePath) {
    try {
        let transcriptJSON = {};
        let courses_JSON = await pdfscraper.PDF_to_array_of_JSON(filePath);
        gpacal.courses_add_fpo(courses_JSON);

        transcriptJSON.courses = courses_JSON;
        transcriptJSON.fpo_avg = gpacal.courses_avg_fpo(transcriptJSON.courses);
        console.log(transcriptJSON);
        return transcriptJSON;
    } catch(err) {
        throw new Error(err);
    }
}

