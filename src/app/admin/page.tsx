"use client";

import React, { useEffect, useState } from "react";
import EntryComponent from "../components/entry";
import handleGetData from "../api/services/handleEntries"
import getNewKey from "../api/services/generateKey";
import LoginComponent from "../components/loginComponent";
import deleteAllDataFromServer from "../api/services/deleteAllDataFromServer";

export class Entry {
  name?:string
  email?:string
  phone?:string
  date?:Date
  details?:string

  constructor(
    name?:string,
    email?:string,
    phone?:string,
    date?:Date,
    details?:string
  ) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.date = date;
      this.details = details;
  }
}
export default function AdminPage() {
  interface LoginDetails {
    username : string,
    password : string
  }
  const [entries, setEntries] = useState([<div key={1}>No data</div>]);
  const listOfComponents : Array<React.JSX.Element> = [<EntryComponent entryData={new Entry()} componentKey={0}/>];
  const [isValid, setIsValid] = useState<boolean>(false);

  function renderEntryComponent(){
    
    handleGetData()
    .then((data) => {
       
       for (let i = 0; i < data.length; i++) {
        const currentEntry = data[i]
        listOfComponents.push(
            <EntryComponent 
              entryData={currentEntry}
              componentKey={i}
              />)
      }
      setEntries(listOfComponents)
    }).catch((error) => {
       
    })
  }

  function checkIfValid( isValid : boolean){
    if (isValid){
      setIsValid(true)
    } else {
      setIsValid(false)
    }
}
  function deleteAndReset(){
    setEntries([])
    deleteAllDataFromServer()
  }

  function giveAccessIfValid(){
    if (isValid){
      return(
        <div key={50} className="ml-5">
          <button onClick={deleteAndReset}>Delete all the data</button>
          <button onClick={renderEntryComponent}>Grab Data</button>
          <div className="mt-5">
            {entries}
          </div>
    </div>
      )
    } else {
      return(
        <LoginComponent checkIfValid={checkIfValid}/>
      )
    }
  }
  return (
    giveAccessIfValid()
  );
}
