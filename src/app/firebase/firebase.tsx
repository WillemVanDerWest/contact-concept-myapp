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
    apiKey: "AIzaSyACszD_4oasXDtoWYsQlGPRRYa1Q0w0iis",
    authDomain: "contact-form-dbb8a.firebaseapp.com",
    projectId: "contact-form-dbb8a",
    storageBucket: "contact-form-dbb8a.firebasestorage.app",
    messagingSenderId: "179821406306",
    appId: "1:179821406306:web:e4e6a9ed61d11d129bc93b",
    measurementId: "G-LDEF3JGTR4"
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