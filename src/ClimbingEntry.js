import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';


function ClimbingEntry(props) {
    return (
        <li>
            <button onClick={props.removeEntry}>
                <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2>My Climbing Results</h2>
            <p>Finish = {props.chosenFinish}</p>
            <p>Grade = {props.chosenGrade}</p>
            
        </li>
    )
}

export default ClimbingEntry