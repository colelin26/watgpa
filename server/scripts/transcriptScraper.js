const Promise = require('bluebird');
const extract = Promise.promisify(require('pdf-text-extract'));
const gpacal = require('./gpaCalculator');
const jsonGene = require('./JSONgenerator');

// const REGEXES = {
//     courses: /(\w+)\s+(\d+\w?)\s+(((\w|-)+\s+)+)(\d.\d\d)\s+(\d.\d\d)\s+(\d+|\w+)/,
//     courses_global: /Level:\s+([0-9][A-Z])\s+Load:\s((\w|-)+)\s+Form Of Study: ([\s\S]+)\s+Course[\s\S]+Grade\s((\w+)\s+(\d+\w?)\s+(((\w|-)+\s+)+)(\d.\d\d)\s+(\d.\d\d)\s+(\d+|\w+))+/g,
// }

async function readPDF(filePath) {
    try {
        const txt = await extract(filePath);
        console.log(txt.join('\n'));
        return txt.join('\n');
    } catch (err) {
        throw new Error(err);
    }
}

async function scrape_transcript(filePath) {
    const txt = await readPDF(filePath);
    const courses = await jsonGene.txt_to_JSON(txt);
    gpacal.courses_add_fpo(courses);

    let transcriptJSON = {};
    transcriptJSON.courses = courses;
    transcriptJSON.fpo_avg = gpacal.courses_avg_fpo(transcriptJSON.courses);
    console.log(transcriptJSON);
    return transcriptJSON;
}

console.log(scrape_transcript('/Users/cole/Dropbox/Coding/JavaScript/NodeProject/pdf_to_gpa/public/files/SSR_TSRPT.pdf'));

