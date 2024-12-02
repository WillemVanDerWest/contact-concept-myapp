"use client";

import React, { useState } from "react";
import EntryComponent from "../components/entry";
import handleGetData from "../api/services/handleEntries";

import LoginComponent from "../components/loginComponent";
import deleteAllDataFromServer from "../api/services/deleteAllDataFromServer";
import EntryForContact from "../api/classes/Entry";

export default function AdminPage() {
  const [entries, setEntries] = useState([<div key={1}>No data</div>]);
  const emptyEntry = new EntryForContact("empty");
  const listOfComponents: Array<React.JSX.Element> = [
    <EntryComponent key={0} entryData={emptyEntry} componentKey={0} />,
  ];
  const [isValid, setIsValid] = useState<boolean>(false);

  function grabAndRenderData() {
    handleGetData()
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          const currentEntry = data[i];
          listOfComponents.push(
            <EntryComponent entryData={currentEntry} componentKey={i} />
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

  function GiveAccessIfValid({
    sendEntry,
    handleDelete,
    displayEntryComponents,
    isLoginCredentialsCorrect,
  }: GiveAccessIfValidProps) {
    if (isLoginCredentialsCorrect) {
      return (
        <div key={50} className="ml-5">
          <button onClick={handleDelete}>Delete all the data</button>
          <button onClick={displayEntryComponents}>Grab Data</button>
          <div className="mt-5">{sendEntry}</div>
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
