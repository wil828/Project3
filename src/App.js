import './App.scss';

import firebase from './firebase';
import { useState, useEffect } from 'react';

// import the Header
import Header from './Header';
// importing ClimbingForm
import ClimbingForm from './ClimbingForm';
import ClimbingEntry from './ClimbingEntry';
import ErrorShow from './ErrorShow';
import DeleteEntry from './DeleteEntry';
import Footer from './Footer';

// access our database, import the corresponding firebase modules
import { getDatabase, ref, onValue, push, remove } from 'firebase/database';


function App() {
  // creating useState variables
  const [ climbingLog, setClimbingLog ] = useState([]);
  const [ singleClimbingLog, setSingleClimbingLog ] = useState([]);
  const [ noInfo, setNoInfo ] = useState(false);
  const [ singleKey, setSingleKey] = useState("");
  const [ deleteClimbEntry, setDeleteClimbEntry ] = useState(false);
  const [photo, setPhoto] = useState('./climbingSheep.png');

  // useEffect to save a state variable of climbingLog
  useEffect(() => {
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    onValue(dbRef, (response) => {
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

  // function to store the specific climbing data to push to firebase
  const storeClimbData = function(event, chosenDate, chosenTypeOfClimb, chosenClimbingGrade, chosenClimbingFinish) {
    event.preventDefault();
    const database = getDatabase(firebase);
    const dbRef = ref(database);

    
    // variable to create the list
    const climbingList = {
      date: chosenDate,
      type: chosenTypeOfClimb,
      grade: chosenClimbingGrade,
      finish: chosenClimbingFinish
    }

    // if statement to only push if all selects are full
    if ((chosenDate === "") || (chosenTypeOfClimb === "placeholder") || (chosenClimbingGrade === "placeholder") || (chosenClimbingFinish === "placeholder")) {
      setNoInfo(true);
      setSingleClimbingLog(climbingList);
      setPhoto('./climbingSheepError.png');

    } else {
      setNoInfo(false);
      push(dbRef, climbingList);
      setPhoto('./climbingSheepSuccess.png');
    }
  }

  //  function to remove the chosen entry container
  const handleRemove = () => {   
    const database = getDatabase(firebase);
    const dbRef = ref(database, `/${singleKey}`);
    setDeleteClimbEntry(false);
    remove(dbRef);
  }

  // function to give the key value of the container being deleted to state SingleKey
  const handleDelete = (test) => {
    setSingleKey(test);
    setDeleteClimbEntry(true);
    setPhoto('./climbingSheep.png');
  }

  // function to close the deleteEntry when x button is clicked
  const close = () => {
    setDeleteClimbEntry(false);
    setPhoto('./climbingSheep.png');
  }

  return (
    <div>
      <Header 
        photoSource={photo}
      />
      <section className="climbFormSection">
        <div className="wrapper">
          <ClimbingForm submitClimbingForm={storeClimbData}/>
        </div>
      </section>
      {
        noInfo === true
          ?
          <ErrorShow
            errorChoice={singleClimbingLog}
          />
          : null
      }
      <section className="climbingEntryContainer">
        <div className="wrapper">
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

                    removeEntry={ () => {handleDelete(oneClimb.key)}}
                  />
                )
              })
            }

          </ul>
        </div>
        {
          deleteClimbEntry === true
            ?
            <DeleteEntry
              removeTheEntry={handleRemove}
              closeIt={close}
            />
            : null
        }
        
      </section>

      <Footer />

    </div>
  );
}

export default App;
