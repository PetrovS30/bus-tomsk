import { useState } from "react";
import { getDatabase,get } from "firebase/database";
import { initializeApp } from "firebase/app";

// useStateHelper.js
const initialState = {
  data: [
    { name: 1, "всего оценок": 0 },
    { name: 2, "всего оценок": 0 },
    { name: 3, "всего оценок": 0 },
    { name: 4, "всего оценок": 0 },
    { name: 5, "всего оценок": 0 }
  ]
};

//abstraction of state
const useDataState = () => {
  const [data, setData] = useState(initialState.data);
  return { data, setData };
};

export default useDataState;
//
export const firebaseConfig = {
  apiKey: "AIzaSyCWwywrSSV5LSMeGVI0gWGVwYLJo6XKt-A",
  authDomain: "bus-train-cd2c6.firebaseapp.com",
  databaseURL: "https://bus-train-cd2c6-default-rtdb.firebaseio.com",
  projectId: "bus-train-cd2c6",
  storageBucket: "bus-train-cd2c6.firebasestorage.app",
  messagingSenderId: "688491898760",
  appId: "1:688491898760:web:f8bad687505d8cdb4ebc3d",
  measurementId: "G-9C7NRE1Q2J"
};

const firebaseApp = initializeApp(firebaseConfig);//инициализации приложения Firebase
export const db = getDatabase(firebaseApp);//получения экземпляра базы данных Realtime Database от Firebase

   // fetchAndProcessData.js
export const fetchAndProcessData = (ref, setData, answer) => {
  get(ref)
   .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const values = Object.values(data);
        const value1s = values.map((value) => value[answer]);
        const newData = [
          { name: 1, "всего оценок": 0 },
          { name: 2, "всего оценок": 0 },
          { name: 3, "всего оценок": 0 },
          { name: 4, "всего оценок": 0 },
          { name: 5, "всего оценок": 0 }
        ]
        value1s.forEach((value) => {
          newData[value - 1]["всего оценок"] += 1;
        });
        setData(newData);
      } else {
        console.log('No data available');
      }
    })
   .catch((error) => {
      console.error(error);
    });
};
