// component for Delete Entry
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function DeleteEntry(props) {
    return (
        <div className="deletePanel">
            <div className="box">
                <button 
                    onClick={props.closeIt} 
                    className="close"
                >
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <p>Are you sure?</p>
                <button 
                    onClick={props.removeTheEntry} 
                    className="delete"
                >
                    I'm sure
                </button>
            </div>
        </div>
    )
}

export default DeleteEntry