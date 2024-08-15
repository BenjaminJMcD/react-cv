import React from "react";
import { useState } from "react";


function SaveBasic(basic) {

    

    return (
        <div>
            <p>{basic.firstName}</p>
            <p>{basic.lastName}</p>
            <p>{basic.email}</p>
            <p>{basic.phone}</p>
        </div>
    )

}

export default SaveBasic



// THREE DIFFERENT DOCUMENT PIECES. ONSUBMIT = SUBMIT FROM ASSOCIATED INPUT COMPONENT. DOCUMENT PIECES WRAPPED IN A DIV FOR STYLING AS A SINGLE OBJECT