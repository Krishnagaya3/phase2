const ButtonEx = () => {

    const krishna = () => {
        alert("Hi I am Krishna...");
    }

    const vamsi = () => {
        alert("Hi I am Vamsi...");
    }

    const gayathri = () => {
        alert("Hi I am Gayathri...")
    }
    return(
        <div>
            <input type="button" value="Krishna" onClick={krishna} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Vamsi" onClick={vamsi} />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Gayathri" onClick={gayathri} />
        </div>
    )
}

export default ButtonEx;