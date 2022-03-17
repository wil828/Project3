function ErrorShow(props) {

    let errorObjects = props.errorChoice;
    let errorArray = [];

    // Created an object to decide which Select is empty and push it to an empty array
    Object.entries(errorObjects).forEach(entry => {
        const [key, value] = entry;
        
        if (value === 'placeholder' || value === ''){
            errorArray.push(key);
        }
    });

    return (
        <div className="wrapper">
            <div className="errorSign">
                <p>Please Select from the Dropdowns for:</p>
                <ul>
                {
                    errorArray.map((individualError, index) => {
                        return (
                            <li key={index}>{individualError}</li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default ErrorShow;