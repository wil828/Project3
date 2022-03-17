// import the useState Hook
import { useState } from 'react';
// import ClimbingFormGrade to display climbing grade based on if boulder is chosen
import ClimbingFormGrade from './ClimbingFormGrade';

function ClimbingForm( props ) {


    // initialize state to track changing value of dropdown
    const [dateValue, setDateValue] = useState('');
    const [typeOfClimbValue, setTypeOfClimbValue] = useState('placeholder');
    const [ climbingGradeValue, setClimbingGradeValue ] = useState('placeholder');
    const [ climbingFinishValue, setClimbingFinishValue ] = useState('placeholder');

    const dateChange = function(event) {
        // take the value of the user's selected input for the dateValue and save it in state
        setDateValue(event.target.value);
    }
    
    const typeOfClimbValueChange = function(event) {
        // take the value of the user's selected input for the typeofClimbValue and save it in state
        setTypeOfClimbValue(event.target.value);
    }

    const climbingGradeValueChange = function(event) {
        // take the value of the user's selected input for the climbingGradeValue and save it in state
        setClimbingGradeValue(event.target.value);
    }

    const climbingFinishValueChange = function(event) {
        // take the value of the user's selected input for the climbingFinish drop down menu and save it in state
        setClimbingFinishValue(event.target.value);
    }

    const handleUserSelect = function(event) {
        props.submitClimbingForm(event, dateValue, typeOfClimbValue, climbingGradeValue, climbingFinishValue);
    }

    const climbingBoulder = ["VB", "V0", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "V11", "V12", "V13"];

    const climbingTopRope = ["5.1", "5.2", "5.3", "5.4", "5.5", "5.6", "5.7", "5.8", "5.9", "5.10a", "5.10b", "5.10c", "5.10d", "5.11a", "5.11b", "5.11c", "5.11d", "5.12a", "5.12b", "5.12c", "5.12d", "5.13a", "5.13b", "5.13c", "5.13d", "5.14a", "5.14b", "5.14c", "5.14d"];
    



    return (
        <div className="climbingForm">
            <h2>Log a Climb!</h2>
            <form action="" onSubmit={ handleUserSelect } >
                <div className="dateArea">
                    <label htmlFor='date' className='date'>
                        Date: 
                    </label>
                    <input 
                        type='date' 
                        name='date' 
                        // when a new option is selected, fire the dateChange
                        onChange={dateChange}
                        value={dateValue}
                    />
                </div>

                <div className="selectionArea climbSelection">
                    <div className="typeOfClimbingFinish climbSelection">
                        <label htmlFor='typeOfClimb'>Type of Climb</label>
                        <select
                            id="typeOfClimb"
                            name="typeOfClimb"
                            // when a new option is selected, fire the climbingGradeValueChange
                            onChange={typeOfClimbValueChange}
                            // set a value of climbingFinish for the state value
                            value={typeOfClimbValue}
                        >
                            <option value="placeholder" disabled>What type of Climb?</option>
                            <option value="Top Rope">Top Rope</option>
                            <option value="Boulder">Boulder</option>
                            <option value="Trad">Trad</option>
                            <option value="Lead">Lead</option>
                        </select>
                            
                    </div>
                    <div className="climbingGradeContainer climbSelection">
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
                                {/* adding turnery operators for changing the option of climbing Grade  */}
                                {
                                    typeOfClimbValue === "Top Rope" ?       
                                    climbingTopRope.map((climbNumber, index) => {
                                        return (
                                            <ClimbingFormGrade
                                                chosenGradeClimb = {climbNumber}
                                                key = {index}
                                            />
                                            
                                        )
                                    })
                                    
                                    : typeOfClimbValue === "Boulder" ?
                                    climbingBoulder.map((climbNumber, index) => {
                                        return (
                                            <ClimbingFormGrade
                                                chosenGradeClimb={climbNumber}
                                                key={index}
                                            />

                                        )
                                    })
                                    : typeOfClimbValue === "Trad" ?
                                            climbingTopRope.map((climbNumber, index) => {
                                            return (
                                                <ClimbingFormGrade
                                                    chosenGradeClimb={climbNumber}
                                                    key={index}
                                                />

                                            )
                                        })
                                    : typeOfClimbValue === "Lead" ?
                                                climbingTopRope.map((climbNumber, index) => {
                                            return (
                                                <ClimbingFormGrade
                                                    chosenGradeClimb={climbNumber}
                                                    key={index}
                                                />

                                            )
                                        })
                                    : null
                                }
                                {
                                    typeOfClimbValue === "Boulder" ? "Boulder" : undefined
                                }
                        </ select>
                    </div>

                    <div className="typeOfClimbingFinish climbSelection">
                        <label htmlFor='climbingFinish'>Type of Finish</label>
                        <select
                            id="climbingFinish"
                            name="climbingFinish"
                            // when a new option is selected, fire the climbingGradeValueChange
                            onChange={climbingFinishValueChange}
                            // set a value of climbingFinish for the state value
                            value={climbingFinishValue}
                        >
                            <option value="placeholder" disabled>What type of Finish?</option>
                            <option value="Onsight">Onsight</option>
                            <option value="Flash">Flash</option>
                            <option value="Redpoint">Redpoint</option>
                            <option value="Attempts">Attempts</option>
                            <option value="Project">Project</option>
                        </select>
                    </div>
                </div>
                <button className="submitButton">Submit my Climb!</button>
            </form>
        </div>
    )
}

export default ClimbingForm;