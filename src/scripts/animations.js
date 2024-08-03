const courses = document.getElementsByClassName('course');
const course_headers = document.getElementsByClassName('course-header');
const course_descriptions = document.getElementsByClassName('course-description');

// Adds id's to existing '.course-header' elements
for (var i = 0; i < courses.length; i++) {
    var id_name = "course-header-";
    course_headers[i].id = id_name + i;
}

// Adds id's to existing '.course-description' elements
for (var i = 0; i < courses.length; i++) {
    var id_name = "course-description-";
    course_descriptions[i].id = id_name + i;
}

function toggle_course_description(course_description_id) {
    document.getElementById(course_description_id).classList.toggle("course-description-show");
}

function close_all_other_descriptions(to_skip) {
    for (var i = 0; i < courses.length; i++) {
        if (course_descriptions[i].id === to_skip) {
            continue;
        }
        if (course_descriptions[i].classList.contains("course-description-show")) {
            course_descriptions[i].classList.remove("course-description-show");
        }
    }
}

window.onclick = function(event) {
    if (event.target.matches('.course-header')) {
        var description_to_toggle = event.target.nextElementSibling.id;
        toggle_course_description(description_to_toggle);
        close_all_other_descriptions(description_to_toggle);
    }
}
