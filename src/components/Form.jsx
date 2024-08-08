import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";
import Document from "./Document";

function Form() {

    const [basicInfo, setBasicInfo] = useState("");
    const [educationInfo, setEducationInfo] = useState("");
    const [experienceInfo, setExperienceInfo] = useState("");

    return (
    <div>
        <h1 className="basicInfo">General Information</h1>
        <BasicInfo
            formData = {basicInfo}
            setFormData = {setBasicInfo}

        />
        <h1 className="education">Education</h1>
        <Education />
        <h1 className="experience">Work Experience</h1>
        <Experience />
    </div>
    )
}

export default Form


// ADD MULTIPLE EDUCATION AND WORK EXPERIENCE ???

// HOW TO EDIT DOCUMENT ON FORM PAGE WITH INFORMATION FROM CHILDREN +++ HOW TO CREATE DOCUMENT ON FORM PAGE NEXT TO FORMS