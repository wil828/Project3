// import the useState Hook
import { useState } from 'react';

function ClimbingForm( props ) {

    // console.log(props);

    // initialize state to track changing value of dropdown
    const [ climbingGradeValue, setClimbingGradeValue ] = useState('');
    const [ climbingFinishValue, setClimbingFinishValue ] = useState('');

    const climbingGradeValueChange = function(event) {
        // take the value of the user's selected input for the climbingGradeValue and save it in state
        setClimbingGradeValue(event.target.value);
    }

    const climbingFinishValueChange = function(event) {
        // take the value of the user's selected input for the climbingFinish drop down menu and save it in state
        setClimbingFinishValue(event.target.value);
    }

    const handleUserSelect = function(event) {
        props.submitClimbingForm(event, climbingGradeValue, climbingFinishValue);
    }



    return (
        <div className="climbingForm">
            <form action="" onSubmit={ handleUserSelect } >
                <h2>Want to Log a Climb?</h2>
                <input type='date' name='date' />
                <div className="climbingGradeContainer">
                    <label htmlFor='climbingGrade'>Climbing Grade</label>
                    <select
                        id="climbingGrade"
                        name="climbingGrade"
                        // when a new option is selected, fire the climbingGradeValueChange
                        onChange={ climbingGradeValueChange }
                        // set a value of climbingGrade for the state value
                        value={ climbingGradeValue }
                    >
                        <option value="placeholder" disabled>Select the Grade:</option>
                        <option value="VB">VB</option>
                        <option value="V1">V1</option>
                        <option value="V2">V2</option>
                        <option value="V3">V3</option>
                        <option value="V4">V4</option>
                        <option value="V5">V5</option>
                        <option value="V6">V6</option>
                        <option value="V7">V7</option>
                        <option value="V8">V8</option>
                        <option value="V9">V9</option>
                        <option value="V10">V10</option>
                        <option value="V11">V11</option>
                        <option value="V12">V12</option>
                    </ select>
                </div>
                <div className="typeOfClimbingFinish">
                    <label htmlFor='climbingFinish'>Type of Finish</label>
                    <select
                        id="climbingGrade"
                        name="climbingGrade"
                        // when a new option is selected, fire the climbingGradeValueChange
                        onChange={climbingFinishValueChange}
                        // set a value of climbingFinish for the state value
                        value={climbingFinishValue}
                    >
                        <option value="placeholder" disabled>What type of Finish?</option>
                        <option value="onsight">Onsight</option>
                        <option value="flash">Flash</option>
                        <option value="redpoint">Redpoint</option>
                        <option value="attempts">Attempts</option>
                        <option value="project">Project</option>
                    </select>
                </div>
                <button>Submit my Climb!</button>
            </form>
        </div>
    )
}

export default ClimbingForm;