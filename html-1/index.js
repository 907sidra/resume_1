var _a;
// listing element
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // type assertion 
    var nameElement = document.getElementById('Name');
    var emailElement = document.getElementById('Email');
    var phoneElement = document.getElementById('Phone');
    var educationElement = document.getElementById('Education');
    var experienceElement = document.getElementById('Experience');
    var skillsElement = document.getElementById('Skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // create resume output
        var Resumeoutput = "\n    <h2>Resume</h2>\n    <h3>Personal Information</h3>\n    <p><strong>Name:</strong> ".concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone:</strong> ").concat(phone, " </p>\n\n    <h3>Education</h3>\n    <p>").concat(education, " </p>\n    <h4>EXPERIENCE</h4>\n    <p>").concat(experience, " </p>\n    <h5>skills</h5>   \n    <p>").concat(skills, " </p> \n    ");
        var ResumeoutputElement = document.getElementById('Resumeoutput');
        if (ResumeoutputElement) {
            ResumeoutputElement.innerHTML = Resumeoutput;
        }
        else {
            console.error('the resume output elements are missing ');
        }
    }
    else {
        console.error("one or more output elements are missing");
    }
});
