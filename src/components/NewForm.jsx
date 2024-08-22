import React, { useState } from 'react';
import NewBasic from './NewBasic';
import NewEducation from './NewEducation';


function NewForm() {


    const [basic, setBasic] = useState(
        { id: 1, data: {} }
    );

    const [forms, setForms] = useState([
        { id: 1, data: {} },
        // ... other initial forms
    ]);




    const handleBasicSubmit = (basicData) => {
        console.log(`Form submitted:`, basicData);
    };

    const handleFormSubmit = (formData, formId) => {
        // Handle form submission for a specific form
        console.log(`Form ${formId} submitted:`, formData);
        // Update form data in the state if needed
    };





    const handleAddForm = () => {
        const newFormId = forms.length + 1;
        setForms((prevForms) => [...prevForms, { id: newFormId, data: {} }]);
    };



    const handleRemoveForm = () => {
        setForms((prevForms) => prevForms.filter((form) => form.id  !== forms.length));
    };



    const [displayBasic, setDisplayBasic] = useState(false);
    const [displayEducation, setDisplayEducation] = useState(false);
    const [displayExperience, setDisplayExperience] = useState(false);

    return (
        <div>
            <NewBasic
                onFormSubmit={(data) => handleBasicSubmit(data)}
            />
            {forms.map((form) => (
                <NewEducation
                key={form.id}
                onFormSubmit={(data) => handleFormSubmit(data, form.id)}
                />
            ))}
            <button onClick={handleAddForm}>Add Form</button>
            <button onClick={handleRemoveForm}>Remove</button>

        </div>
  );
}

export default NewForm