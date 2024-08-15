import React from "react"


function BasicInfo ({basicInfo, setBasicInfo, setDisplayBasic}) {

    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submitted", basicInfo);
        setDisplayBasic(true);
    }

    const handleChange = (event) => {
        setBasicInfo(basicInfo => ({...basicInfo, [event.target.name]: event.target.value}))
    }

    const handleInput = (event) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value);
        setBasicInfo({...basicInfo, [event.target.name]: formattedPhoneNumber})
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
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="basicFirst">First Name: </label>
                <input type="text"
                    id="basicFirst"
                    name = "firstName"
                    required
                    value = {basicInfo.firstName}
                    onChange={handleChange} />
                <label htmlFor="basicLast">Last Name: </label>
                <input type="text"
                    id="basicLast"
                    name="lastName"
                    required
                    value = {basicInfo.lastName}
                    onChange={handleChange} />
                <label htmlFor="basicEmail">Email: </label>
                <input type="email"
                    id="basicEmail"
                    name="email"
                    required
                    value = {basicInfo.email}
                    onChange = {handleChange} />
                <label htmlFor="basicPhone">Phone: </label>
                <input type="tel"
                    placeholder="(123) 456 7890"
                    pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
                    id="basicPhone"
                    required
                    name="phone"
                    value = {basicInfo.phone}
                    onChange={handleInput}
                     />
                <button className="submitButton" type="submit">SUBMIT</button>
            </form>
        </div>

    )

}

export default BasicInfo