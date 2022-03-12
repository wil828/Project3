import './App.css';

import firebase from './firebase';
import { useState, useEffect } from 'react';

// importing ClimbingForm
import ClimbingForm from './ClimbingForm';
import ClimbingEntry from './ClimbingEntry';

// access our database, import the corresponding firebase modules
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';


function App() {
  const [ climbingLog, setClimbingLog ] = useState([]);
  const [ climbingGrade, setClimbingGrade ] = useState('');
  const [ climbingFinish, setClimbingFinish ] = useState('');

  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);
    // console.log(dbRef);

    onValue(dbRef, (response) => {
      // console.log(response.val());
      const newState = [];
      const data = response.val();
      for (let propertyName in data) {
        newState.push(
          {
            key: propertyName,
            name: data[propertyName]
          }
        );
      }
      // console.log(newState[newState.length - 1]);
      // setClimbingLog(newState[newState.length - 1]);
      setClimbingLog(newState);
    });
  }, []);
  
  // console.log(climbingLog);
  // console.log(climbingLog["name"]["finish"])
  console.log(climbingLog)

  const storeClimbData = function(event, chosenClimbingGrade, chosenClimbingFinish) {
    event.preventDefault();
    setClimbingGrade(chosenClimbingGrade);
    setClimbingFinish(chosenClimbingFinish);
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    const climbingList = {
      grade: chosenClimbingGrade,
      finish: chosenClimbingFinish
    }
    push(dbRef, climbingList);
  }
  // console.log(storeClimbData);

  const handleRemove = (ClimbingEntryId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${ClimbingEntryId
}`);
    remove(dbRef);
  }

  return (
    <div>
      <header>
        <h1>Climbing Tracker!</h1>
      </header>
      <ClimbingForm submitClimbingForm={storeClimbData}/>
      <ul>
        { 
          climbingLog.map((oneClimb) => {
            return (
              <ClimbingEntry 
                key = {oneClimb.key}
                chosenGrade = {oneClimb.name.grade}
                chosenFinish={oneClimb.name.finish}

                removeEntry={ () => {handleRemove(oneClimb.key)}}
              />
            )
          })
        }

      </ul>
    </div>
  );
}

export default App;
