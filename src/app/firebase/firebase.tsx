// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getDocs, getFirestore, query } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { NextResponse } from "next/server";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig2 = {
    apiKey: process.env.NEXT_PUBLIC_FIRESTORE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROKECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIRESTORE_APPID,
    measurementId: process.env.NEXT_PUBLIC_FIRESTORE_MEASUREMENTID
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig2);
const db = getFirestore(app);

interface entryData {
    email:string,
    name:string,
    info:string,
    date:Date,
    phone:string
}


export default async function sendData(entry : entryData){
try {
  const docRef = await addDoc(collection(db, "entry"), {
    details: entry.info,
    email: entry.email,
    name: entry.name,
    date: entry.date,
    phone: entry.phone 
  });
  console.log(docRef);
  console.log("Document added successfully",NextResponse.json(
    {
        message: "Created document entry",
        status: 200
    }));
  
} catch (e) {
  console.error("Error adding document: ", e)
  ;
}
}

export async function getAllData(){
    const q = query(collection(db,"entry"));
    const querySnapshot = await getDocs(q);
    const aArray = querySnapshot.docs.map((item) => item)
    console.log("Success in the backend")

    return aArray;
}