import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";
import Document from "./Document";
import saveEducationArr from "./saveEducation";

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


    const addEducation = () => {


    }



    const removeEducation = () => {

    }


    return (
    <div>
        <h1 className="basicInfo">General Information</h1>
        <BasicInfo
            formData = {basicInfo}
            setFormData = {setBasicInfo}
        />
        <h1 className="education">Education</h1>
        <div id="edBox">
            <Education
                formData = {educationInfo}
                setFormData = {setEducationInfo}
            />
        </div>
            <button className="addEd"
                onClick={addEducation}>
                Add Education</button>
            <button className="removeEd"
                onClick={removeEducation}>
                Remove</button>
        <h1 className="experience">Work Experience</h1>
        <Experience 
            formData = {experienceInfo}
            setFormData = {setExperienceInfo}
        /> 

        {/*
            NEED NEW APP.JSX FOR FORM AND FOR DOCUMENT

        <Document 
            basicInfo={basicInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
        /> */}
    </div>
    )
}

export default Form



//  HOLD INFO UNTIL SUBMIT, THEN SAVE IN ARRAY AS OBJECT
//  MAP INTO DOCUMENT FROM OBJECT