import React, { useState } from 'react';

function NewBasic({ onFormSubmit }) {


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    title: '',
    linkedIn: '',
    gitHub: '',
    email: '',
    phone: '',
    description: ''
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

  const handleInput = (event) => {
    const formattedPhoneNumber = formatPhoneNumber(event.target.value);
    setFormData((prevFormData) => ({
      ...prevFormData, 
      [event.target.name]: formattedPhoneNumber
    }))
  }

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g,"");
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) {
        return phoneNumber
    }
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`
    }
    return `(${phoneNumber.slice(0,3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,10)}`
}

  return (
    <form onSubmit={handleSubmit} id="basicInfoForm">
        <label htmlFor="basicFirst">First Name: </label>
        <input type="text"
            id="basicFirst"
            name = "firstName"
            required
            value = {formData.firstName}
            onChange={handleChange} />
        <label htmlFor="basicLast">Last Name: </label>
        <input type="text"
            id="basicLast"
            name="lastName"
            required
            value = {formData.lastName}
            onChange={handleChange} />
        <label htmlFor="basicTitle">Title: </label>
        <input type="text"
            id="basicTitle"
            name="title"
            required
            value = {formData.title}
            onChange={handleChange} />
        <label htmlFor="basicLinkedIn">LinkedIn: </label>
        <input type="text"
            id="basicTitle"
            name="linkedIn"
            value = {formData.linkedIn}
            onChange={handleChange} />
        <label htmlFor="basicGithub">Github: </label>
        <input type="text"
            id="basicGithub"
            name="gitHub"
            value = {formData.gitHub}
            onChange={handleChange} />
        <label htmlFor="basicEmail">Email: </label>
        <input type="email"
            id="basicEmail"
            name="email"
            required
            value = {formData.email}
            onChange = {handleChange} />
        <label htmlFor="basicPhone">Phone: </label>
        <input type="tel"
            placeholder="(123) 456 7890"
            pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
            id="basicPhone"
            required
            name="phone"
            value = {formData.phone}
            onChange={handleInput} />
        <label htmlFor="basicDescription">Summary: </label>
        <textarea rows="5" cols="50"
            id="basicDescription"
            name="description"
            value = {formData.description}
            onChange={handleChange} />
        <button className="submitButton" type="submit">SUBMIT</button>
    </form>
  )
}

export default NewBasic