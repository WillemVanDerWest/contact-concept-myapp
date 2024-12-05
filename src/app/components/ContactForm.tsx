"use client";
import { useState } from "react";
import sendData, {  } from "../firebase/firebase";
import Link from "next/link";
export default function ContactForm() {
  interface formInfo {
    email?: string;
    name?: string;
    info?: string;
    phone?: string;
  }

  const [formState, setFormState] = useState<formInfo>();
  const handleFormState = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event?.target?.id) {
      setFormState({ ...formState, [event?.target.id]: event.target.value });
    }
  };

  interface entryData {
    email: string;
    name: string;
    info: string;
    phone: string;
    date: Date;
  }

  function handleSubmit() {
    const entry: entryData = {
      name: formState?.name || "",
      phone: formState?.phone || "",
      email: formState?.email || "",
      info: formState?.info || "",
      date: new Date(),
    };
    if ( entry.name === "" ) {
      console.log("Enter a valid name");
    } else if (entry.phone === ""){
      console.log("Enter a valid phone number");
    } else if (entry.email === ""){
      console.log("Enter a valid email" );
    } else if (entry.info === ""){
      console.log("Enter some text in the info box");
    }
    
    else {
      sendData(entry);
      console.log("Sent to backend");
    }

    
  }
  return (
    <div>
        <div className="flex justify-center">
            <Link className="font-medium bg-white px-10 py-5 text-xl rounded-3xl hover:bg-gray-400 text-black" href="/">Admin</Link>
        </div>
    <div className="bg-white py-8 px-10 w-2/6 text-black rounded-3xl m-auto mt-44">
        <div className="flex justify-center font-medium text-3xl mb-10">Contact Form</div>
      <form>
        <div className="my-5 flex justify-center">
          <div className="w-32">Email:</div>
          <div>
            <input
              className="px-3 rounded-xl bg-gray-200"
              type="text"
              placeholder="email"
              id="email"
              value={formState?.email || ""}
              onChange={handleFormState}
            />
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="w-32">Name:</div>
          <div>
            <input
              className="px-3 rounded-xl bg-gray-200"
              type="text"
              placeholder="name"
              id="name"
              value={formState?.name || ""}
              onChange={handleFormState}
            />
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="w-32">Phone number:</div>
          <div>
            <input
              className="px-3 rounded-xl bg-gray-200"
              type="text"
              placeholder="phone"
              id="phone"
              value={formState?.phone || ""}
              onChange={handleFormState}
            />
          </div>
        </div>
        <div className="my-5 flex justify-center">
          <div className="w-32">Info:</div>
          <div>
            <input
              className="px-3 rounded-xl bg-gray-200"
              type="text"
              placeholder="info"
              id="info"
              value={formState?.info || ""}
              onChange={handleFormState}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-center mt-10">
      <button
        onClick={handleSubmit}
        className="font-medium text-lg px-6 py-2 bg-gray-200 rounded-2xl px-3 py-1 hover:bg-gray-400"
      >
        Submit
      </button>
      </div>
    </div>
    </div>
  );
}
