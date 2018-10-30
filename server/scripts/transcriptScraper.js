let Promise = require('bluebird');
let extract = Promise.promisify(require('pdf-text-extract'));



const course_letter = 1;
const course_number = 2;
const course_name = 3;
const attempted_credit = 6;
const earned_credit = 7;
const percentage_grade = 8;

const REGEXES = {
    courses: /(\w+)\s+(\d+\w?)\s+(((\w|-)+\s+)+)(\d.\d\d)\s+(\d.\d\d)\s+(\d+|\w+)/,
    courses_global: /Level:\s+([0-9][A-Z])\s+Load:\s((\w|-)+)\s+Form Of Study: ([\s\S]+)\s+Course[\s\S]+Grade\s((\w+)\s+(\d+\w?)\s+(((\w|-)+\s+)+)(\d.\d\d)\s+(\d.\d\d)\s+(\d+|\w+))+/g,
}

async function readPDF(filePath) {
    try {
        const txt = await extract(filePath);
        console.log(txt.join('\n'));
        return txt.join('\n');
    } catch (err) {
        throw new Error(err);
    }
}

function string_to_course_JSON(str) {
    const str_match_result = str.match(REGEXES.courses);

    return {
        course_letter: str_match_result[course_letter],
        course_number: str_match_result[course_number],
        course_name: str_match_result[course_name].trim(),
        attempted_credit: str_match_result[attempted_credit],
        earned_credit: str_match_result[earned_credit],
        percentage_grade: str_match_result[percentage_grade],
    }
}

exports.PDF_to_array_of_JSON = async function PDF_to_array_of_JSON(filePath) {
    try {
        const txt = await readPDF(filePath);
        console.log(txt);
        const courses_string = txt.match(REGEXES.courses_global);
        const courses_array_of_JSON = [];
        for (let i = 0; i < courses_string.length; i++) {
            await courses_array_of_JSON.push(string_to_course_JSON(courses_string[i]));
        }
        console.log(courses_array_of_JSON);
        return courses_array_of_JSON;
    } catch(err) {
        throw new Error(err);
    }
}

