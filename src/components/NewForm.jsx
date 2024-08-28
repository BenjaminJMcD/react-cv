import React, { useState } from 'react';
import NewBasic from './NewBasic';
import NewEducation from './NewEducation';
import NewExperience from './NewExperience';


function NewForm() {


    const [edForms, setEdForms] = useState([
        { id: 1, data: {} }
    ]);

    // const [expForms, setExpForms] = useState([
    //     { id: 1, data: {} }
    // ])


    const handleBasicSubmit = (basicData) => {
        console.log(`Form submitted:`, basicData);
    };

    const handleFormSubmit = (formData, formId) => {
        console.log(`Form ${formId} submitted:`, formData);
        if (edForms.length == 1) {
        setEdForms([{ id: formId, data: formData}])
        }
        if (edForms.length > 1) {
            edForms.length = edForms.length-1
            setEdForms((prevForms) => [ ...prevForms, { id: formId, data: formData}])
        }
    };


    const handleAddEdForm = () => {
        const newFormId = edForms.length + 1;
        setEdForms((prevForms) => [...prevForms, { id: newFormId, data: {} }]);
        console.log("CLICKED")
    };


    const handleRemoveEdForm = (formId) => {
        if (edForms.length > 1) {
            setEdForms((prevForms) => prevForms.filter((edForms) => edForms.id  !== formId));
        }
    };

    console.log(edForms)

    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayEducation, setDisplayEducation] = useState(false);
    const [displayExperience, setDisplayExperience] = useState(false);

    return (
        <div>
            <NewBasic
                onFormSubmit={(data) => handleBasicSubmit(data)}
            />

            {edForms.map((edForm) => (
                <NewEducation
                    key={edForm.id}
                    onFormSubmit={(data) => handleFormSubmit(data, edForm.id)}
                />
            ))}
            <button onClick={() => handleAddEdForm()}>Add Education</button>
            <button onClick={() => handleRemoveEdForm(edForms.length)}>Remove</button>

            {/* {expForms.map((expForm) => {
                <NewExperience 
                key={expForm.id}
                onFormSubmit={(data) => handleFormSubmit(data, expForm.id)}
                />
            })}
            <button onClick={() => handleAddForm(expForms, setExpForms)}>Add Form</button>
            <button onClick={handleRemoveForm(expForms, setExpForms)}>Remove</button> */}
        </div>
  );
}

export default NewForm