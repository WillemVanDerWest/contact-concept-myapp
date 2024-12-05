"use client";

import React, { useState } from "react";
import EntryComponent from "../components/entry";
import handleGetData from "../api/services/handleEntries";

import LoginComponent from "../components/loginComponent";
import deleteAllDataFromServer from "../api/services/deleteAllDataFromServer";
import Link from "next/link";


export default function AdminPage() {
  const [entries, setEntries] = useState([<div key={1}>No data</div>]);
  const listOfComponents: Array<React.JSX.Element> = [];
  const [isValid, setIsValid] = useState<boolean>(false);
  

  function grabAndRenderData() {

    //grab data
    //sort through data
    //add to new variable
    //loop though that variable
    //and push to listOfComonents

    //how to sort the data
    //two for loops
    //

    handleGetData()
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const currentEntry = data[i];
          listOfComponents.push(
            <EntryComponent entryData={currentEntry} componentKey={i+1} />
          );
        }
        setEntries(listOfComponents);
      })
      .catch((error) => {
        console.log(error);
      });
      
  }

  function checkIfValid(isValid: boolean) {
    
    if (isValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }
  function deleteAndReset() {
    setEntries([]);
    deleteAllDataFromServer();
  }

  interface GiveAccessIfValidProps {
    sendEntry: Array<React.JSX.Element>;
    handleDelete: () => void;
    displayEntryComponents: () => void;
    isLoginCredentialsCorrect: boolean;
  }
  function MoreDetailsOfItemsComponent(){
    return(
    <div key={Math.random()*100 +1} className='mt-auto mb-auto text-gray-300 font-medium  '>
      <ul className="flex list-none border-b-gray-100 border-b-2 pb-3">
          <li key={Math.random()*100+2} className='mr-5 w-10 mt-auto mb-auto'>No</li>
          <li key={Math.random()*100+1} className='mr-5 w-36 mt-auto mb-auto'>Customer Name</li>
          <li key={Math.random()*100+3} className='mr-5 w-36 mt-auto mb-auto'>Phone Number</li>
          <li key={Math.random()*100+5} className="mr-5 w-52 mt-auto mb-auto">Email</li>
          <li key={Math.random()*100+6} className="mr-5 w-40 mt-auto mb-auto">More information</li>
      </ul>
    </div>
    )
  }

  function CustomerHeadingComponent(){
    return(
      <div>
        <header className='text-xl font-bold text-black'>
          All Customers
        </header>
        <div className='m-0 mt-2 mb-10 text-green-500 text-sm font-semibold'>Contact form Entries</div>
      </div>
    )
  }
  
  function GiveAccessIfValid({ sendEntry, handleDelete, displayEntryComponents, isLoginCredentialsCorrect }: GiveAccessIfValidProps) {
    if (isLoginCredentialsCorrect) {
      
      return (
        <div key={50} className="bg-gray-200 pl-9 pt-10">
          <div className="flex">
            <button onClick={handleDelete} className='hover:bg-gray-300 bg-white text-black px-5 py-3 rounded-l-3xl rounded-r-xl font-bold'>REMOVE DATA</button>
            <button onClick={displayEntryComponents} className='hover:bg-gray-300 bg-white text-black px-5 py-3 rounded-r-xl rounded-l-xl ml-2 font-bold'>RETRIEVE DATA</button>
            <Link href="/contact-us" prefetch={true} className='hover:bg-gray-300 bg-white text-black px-5 py-3 font-bold rounded-r-xl rounded-l-xl ml-2'>ADD ENTRY</Link>
          </div>
          <div className='bg-white rounded-3xl mt-5 w-6/12 pl-9 pt-8' >
            <CustomerHeadingComponent/>
            <MoreDetailsOfItemsComponent/>
            <div key='listOfEntries' className='max-h-80 overflow-auto'>
              {sendEntry}
            </div>
          </div>
        </div>
      );
    } else {
      return <LoginComponent checkIfValid={checkIfValid} />;
    }
  }
  return (
    <GiveAccessIfValid
      sendEntry={entries}
      handleDelete={deleteAndReset}
      displayEntryComponents={grabAndRenderData}
      isLoginCredentialsCorrect={isValid}
    />
  );
}
