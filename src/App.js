import './App.css';

import firebase from './firebase';
import { useState, useEffect } from 'react';

// importing ClimbingForm
import ClimbingForm from './ClimbingForm';
import ClimbingEntry from './ClimbingEntry';
import ErrorShow from './ErrorShow';

// access our database, import the corresponding firebase modules
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';


function App() {
  const [ climbingLog, setClimbingLog ] = useState([]);
  const [noInfo, setNoInfo] = useState(false);

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
      setClimbingLog(newState);
    });
  }, []);
  
  // console.log(climbingLog);
  // console.log(climbingLog["name"]["finish"])
  console.log(climbingLog)

  const storeClimbData = function(event, chosenDate, chosenTypeOfClimb, chosenClimbingGrade, chosenClimbingFinish) {
    event.preventDefault();
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    // validation for input toi check if data has been entered in

    
    
    const climbingList = {
      date: chosenDate,
      type: chosenTypeOfClimb,
      grade: chosenClimbingGrade,
      finish: chosenClimbingFinish
    }

    // if statement to only push if all selects are full
    if ((chosenDate == "") || (chosenTypeOfClimb == "placeholder") || (chosenClimbingGrade == "placeholder") || (chosenClimbingFinish == "placeholder")) {

      setNoInfo(true);
      console.log(noInfo);

    } else {
      push(dbRef, climbingList);
    }
  }

  const handleRemove = (ClimbingEntryId) => {
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${ClimbingEntryId}`);
    remove(dbRef);
  }

  // // validation input to check if data has been entered in
  // const validate = () => {
  //   console.log(this.state)
  // }

  return (
    <div>
      <header>
        <h1>Climbing Tracker!</h1>
      </header>
      <ClimbingForm submitClimbingForm={storeClimbData}/>
      {
        noInfo === true
          ?
          <ErrorShow
          />
          : null
      }
      <ul>
        { 
          climbingLog.map((oneClimb) => {
            return (
              <ClimbingEntry 
                key = {oneClimb.key}
                chosenDate = {oneClimb.name.date}
                chosenTypeOfClimb = {oneClimb.name.type}
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
