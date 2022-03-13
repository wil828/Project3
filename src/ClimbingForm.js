// import the useState Hook
import { useState } from 'react';
// import ClimbingFormGrade to display climbing grade based on if boulder is chosen
import ClimbingFormGrade from './ClimbingFormGrade';

function ClimbingForm( props ) {

    // console.log(props);

    // initialize state to track changing value of dropdown
    const [typeOfClimbValue, setTypeOfClimbValue] = useState('placeholder');
    const [ climbingGradeValue, setClimbingGradeValue ] = useState('placeholder');
    const [ climbingFinishValue, setClimbingFinishValue ] = useState('placeholder');

    const typeOfClimbValueChange = function (event) {
        // take the value of the user's selected input for the climbingGradeValue and save it in state
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
        props.submitClimbingForm(event, typeOfClimbValue, climbingGradeValue, climbingFinishValue);
    }

    const climbingMap = ["VB", "V1", "V2"];



    return (
        <div className="climbingForm">
            <form action="" onSubmit={ handleUserSelect } >
                <h2>Want to Log a Climb?</h2>
                <input type='date' name='date' />
                <div className="typeOfClimbingFinish">
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
                            {
                                typeOfClimbValue === "Top Rope" ?       
                                climbingMap.map((climbNumber, index) => {
                                    return (
                                        <ClimbingFormGrade
                                            chosenGradeClimb = {climbNumber}
                                            key = {index}
                                        />
                                        
                                    )
                                })
                                // <ClimbingFormGrade /> 
                                
                                : typeOfClimbValue === "Boulder" ?
                                climbingMap.map((climbNumber, index) => {
                                    return (
                                        <ClimbingFormGrade
                                            chosenGradeClimb={climbNumber}
                                            key={index}
                                        />

                                    )
                                })
                                : typeOfClimbValue === "Trad" ?
                                    climbingMap.map((climbNumber, index) => {
                                        return (
                                            <ClimbingFormGrade
                                                chosenGradeClimb={climbNumber}
                                                key={index}
                                            />

                                        )
                                    })
                                : typeOfClimbValue === "Lead" ?
                                    climbingMap.map((climbNumber, index) => {
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
                        {
                            typeOfClimbValue === "Boulder" ? "Boulder": null
                        }
                        {
                            typeOfClimbValue === "Trad" ? "Trad": null
                        }
                </div>
{/* 
                <div className="climbingGradeContainer">
                    <label htmlFor='climbingGrade'>Climbing Grade</label>
                    <select
                        id="climbingGrade"
                        name="climbingGrade"
                        // when a new option is selected, fire the climbingGradeValueChange
                        onChange={climbingGradeValueChange}
                        // set a value of climbingGrade for the state value
                        value={climbingGradeValue}
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
                </div> */}


                <div className="typeOfClimbingFinish">
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