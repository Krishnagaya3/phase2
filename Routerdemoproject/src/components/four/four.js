import { useState } from "react";

const Four = () => {

    const [firstName] = useState('Krishna')
    const [lastName] = useState('Kalaga')
    return(
        <div>
            <p>
                First Name is : {firstName} <br/>
                Last Name is : {lastName}<br/>
            </p>
        </div>
    )
}

export default Four;