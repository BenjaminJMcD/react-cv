import React, { useState } from 'react';

function NewExperience({ onFormSubmit }) {

  const [formData, setFormData] = useState({
    company: '',
    position: '',
    responsibilities: false,
    startDate: '',
    endDate: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();   
    onFormSubmit(formData);
  };


  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="expCompany">Company: </label>
    <input type="text"
        id="expCompany"
        name = "company"
        value = {formData.company}
        onChange={handleChange} />
    <label htmlFor="expPosition">Position: </label>
    <input type="text" 
        id="expPosition"
        name="position"
        value = {formData.position}
        onChange={handleChange} />
    <label htmlFor="expResponsibilities">Responsibilities: </label>
    <textarea rows="4" cols="50"
        id="expResponsibilities" 
        name="responsibilities"
        value={formData.responsibilities}
        onChange = {handleChange} />
    <label htmlFor="expStart">Start Date: </label>
    <input type="date"
        id="expStart"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}/>
    <label htmlFor="expEnd">End Date: </label>
    <input type="date"
        id="expEnd"
        name="endDate"
        value={formData.endDate}
        onChange={handleChange} />
    <button className="submitButton" type="submit">SUBMIT</button>
</form>




    // <form onSubmit={handleSubmit}>
    //   {/* Input fields */}
    //   <input
    //     type="text"
    //     name="name"
    //     value={formData.name}
    //     onChange={handleChange}
    //     placeholder="Name"
    //   />
    //   {/* ... other input fields */}
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default NewExperience