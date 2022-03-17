import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function ClimbingEntry(props) {
    return (
        <li className="eachClimbingEntryContainer">
            <div className="topBar">
                <p className="entryDate">{props.chosenDate}</p>
                <button 
                    onClick={() => props.removeEntry(props.testRemove)}
                    className="closeButton"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>

            </div>
            <h3>My Climb</h3>
            <div className="textContainer">
                <p>Type of Climb: {props.chosenTypeOfClimb}</p>
                <p>Finish: {props.chosenFinish}</p>
                <p>Grade: {props.chosenGrade}</p>
            </div>
            
        </li>
    )
}

export default ClimbingEntry