import React from "react";
import { useState } from "react";
import BasicInfo from "./BasicInfo";
import Education from "./Education";
import Experience from "./Experience";

function Form({basicInfo, educationInfo, experienceInfo, setBasicInfo, setEducationInfo, setExperienceInfo}) {


    const [edAmount, setEdAmount] = useState("")
    // SaveEducation Array.length


    const addEducation = () => {


    }



    const removeEducation = () => {

    }


    return (
    <div>
        <h1 className="basicInfo">General Information</h1>
        <BasicInfo
            basicInfo = {basicInfo}
            setBasicInfo= {setBasicInfo}
        />
        <h1 className="education">Education</h1>
        <div id="edBox">
            <Education
                educationInfo = {educationInfo}
                setEducationInfo = {setEducationInfo}
            />
        </div>
            <button className="addEd"
                onClick={addEducation}>
                Add Education</button>
            <button className="removeEd"
                onClick={removeEducation}>
                Remove</button>
        <h1 className="experience">Work Experience</h1>
        {/* <Experience 
            formData = {experienceInfo}
            setFormData = {setExperienceInfo}
        /> */}
    </div>
    )
}

export default Form



//  HOLD INFO UNTIL SUBMIT, THEN SAVE IN ARRAY AS OBJECT
//  MAP INTO DOCUMENT FROM OBJECT