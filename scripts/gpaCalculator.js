exports.percentage_to_four_point_zero = function percentage_to_four_point_zero(course) {
    let percentage_grade = course.percentage_grade;
    if (percentage_grade >= 90) return 4.00;
    else if (percentage_grade >= 85) return 3.90;
    else if (percentage_grade >= 80) return 3.70;
    else if (percentage_grade >= 77) return 3.30;
    else if (percentage_grade >= 73) return 3.00;
    else if (percentage_grade >= 70) return 2.70;
    else if (percentage_grade >= 67) return 2.30;
    else if (percentage_grade >= 63) return 2.00;
    else if (percentage_grade >= 60) return 1.70;
    else if (percentage_grade >= 57) return 1.30;
    else if (percentage_grade >= 53) return 1.00;
    else if (percentage_grade >= 50) return 0.70;
    else return 0.00;
}

exports.add_four_point_zero = function add_four_point_zero(courses) {
    for (let i = 0; i < courses.length; i++) {
        courses[i].four_point_zero_scale = exports.percentage_to_four_point_zero(courses[i]);
    }
}

exports.four_point_zero_scale_average = function four_point_zero_scale_average(courses) {
    let sum = 0;
    for (let i = 0; i < courses.length; i++) {
        sum += courses[i].four_point_zero_scale;
    }

    const average = (sum / courses.length).toFixed(2);
    return average;
}

