import React, { useState ,useContext,useEffect} from 'react';
import dt from '../../service/data/SavingUser.json';
import './Saving.css';
import { AuthContext } from '../../App';
import { db } from '../../utilities/firebase-config';
import { addDoc, collection,getDocs } from 'firebase/firestore';
//components
import Savingcard from '../../components/card/savingcard';
import Topic from '../../components/topic/topic';
import NavigationBar from '../../components/navbar/nav';
import SavingForm from '../../components/card/form/NewSavingForm';
import RestrictedPage from '../../components/restricted/restrictedpage';

function Saving() {
  const profile = useContext(AuthContext);
  const userID = profile.googleId
  const [saveBox,setSaveBox]=useState([]);
  const fetchSave = async () => {
    await getDocs(collection(db, "Savingbox")).then((querySnapshot) => {
      const newSavebox = querySnapshot.docs.filter((doc) => {
        return doc.data().userID ===userID
      }).map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setSaveBox(newSavebox);
      // console.log(newSavebox)
      // console.log(saveBox)
    });
  };
  const AddSave =
  useEffect(()=>{fetchSave()},[profile])

  const handleAddSaving = async (newSaving) => {
    setSaveBox((prevData) => [...prevData, newSaving]);
    try{
      newSaving
      const docRef = await addDoc(collection(db, "Savingbox"),newSaving)
      console.log("Saving ID: ",docRef.id)
      fetchSave()
    }catch(e){
      console.error("Error adding SavingBox",e)
    }
  };

  const handleEditSaving = (id, updatedData) => {
    const index = saveBox.findIndex((save) => save.id === id);

    if (index !== -1) {
      const newData = [...saveBox];
      newData[index] = { ...newData[index], ...updatedData };
      setSaveBox(newData);
    }
  };

  return (
    <RestrictedPage>
      <Topic text="My Saving" />
      <div className="row2">
        {saveBox.map((save) => (
          <Savingcard key={save.id} prop={save} onEdit={handleEditSaving} />
        ))}

      <SavingForm onSave={handleAddSaving} />

      </div>
      <NavigationBar />
    </RestrictedPage>
  );
}

export default Saving;