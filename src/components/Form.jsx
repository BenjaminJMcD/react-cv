import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";
import Document from "./Document";

function Form() {

    const [basicInfo, setBasicInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: ""
    });
    const [educationInfo, setEducationInfo] = useState({
        school: "",
        study: "",
        degree: false,
        startDate: "",
        endDate: ""
    });
    const [experienceInfo, setExperienceInfo] = useState({
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: ""
    });


    return (
    <div>
        <h1 className="basicInfo">General Information</h1>
        <BasicInfo
            formData = {basicInfo}
            setFormData = {setBasicInfo}

        />
        <h1 className="education">Education</h1>
        <Education
            formData = {educationInfo}
            setFormData = {setEducationInfo}
        />
        <h1 className="experience">Work Experience</h1>
        <Experience 
            formData = {experienceInfo}
            setFormData = {setExperienceInfo}
        />
        <Document 
            basicInfo={basicInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
        />
    </div>
    )
}

export default Form


// ADD MULTIPLE EDUCATION AND WORK EXPERIENCE ???

// HOW TO EDIT DOCUMENT ON FORM PAGE WITH INFORMATION FROM CHILDREN +++ HOW TO CREATE DOCUMENT ON FORM PAGE NEXT TO FORMS