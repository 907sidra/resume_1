// listing element
document.getElementById('resumeForm')?.addEventListener('submit',function(event) {
    event.preventDefault();
 
     // type assertion 
    const nameElement = document.getElementById('Name') as HTMLInputElement;
    const emailElement = document.getElementById('Email') as HTMLInputElement;
    const phoneElement = document.getElementById('Phone') as HTMLInputElement;
    const educationElement = document.getElementById('Education') as HTMLInputElement;
    const experienceElement = document.getElementById('Experience') as HTMLInputElement;
    const skillsElement = document.getElementById('Skills') as HTMLInputElement;

if(nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){

    const name  = nameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;





    // create resume output
    const Resumeoutput = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone:</strong> ${phone} </p>

    <h3>Education</h3>
    <p>${education} </p>
    <h4>EXPERIENCE</h4>
    <p>${experience} </p>
    <h5>skills</h5>   
    <p>${skills} </p> 
    `;

     
    const ResumeoutputElement = document.getElementById('Resumeoutput') 
    if (ResumeoutputElement){
       ResumeoutputElement.innerHTML = Resumeoutput}

       else {
        console.error('the resume output elements are missing ')
    }
    }

    else{
        console.error("one or more output elements are missing")
    } 
   
})