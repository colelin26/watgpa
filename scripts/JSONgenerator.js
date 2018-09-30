let gpacal = require('./gpaCalculator');
let pdfscraper = require('./transcriptScraper');

exports.pdf_to_JSON = async function(filePath) {
    try {
        let transcript_JSON = await pdfscraper.PDF_to_array_of_JSON(filePath);
        console.log(transcript_JSON);
        gpacal.add_four_point_zero(transcript_JSON);
        console.log({
            courses: transcript_JSON,
            cumulative_four_point_zero_scale_gpa: gpacal.four_point_zero_scale_average(transcript_JSON),
        });
        return {
            courses: transcript_JSON,
            cumulative_four_point_zero_scale_gpa: gpacal.four_point_zero_scale_average(transcript_JSON),
        }
    } catch(err) {
        throw new Error(err);
    }
}

exports.pdf_to_JSON(process.argv[2]);