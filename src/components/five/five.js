import { useState } from "react";

const Five = () => {

    const [firstName, setFirstName] = useState('')

    const update = () => {
        setFirstName("Vamsi")
    }
    return(
        <div>
            First Name is : {firstName} 
            <br/>
            <input type="button" value="Change" onClick={update} />
        </div>
    )
}

export default Five;