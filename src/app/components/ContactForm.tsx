'use client';
import { useState } from "react";
import sendData, { getAllData } from "../firebase/firebase";
export default function ContactForm(){
    interface formInfo {
        email?:string,
        name?:string,
        info?:string,
        phone?: string
    }

    const [formState, setFormState] = useState<formInfo>()
    const handleFormState = () => {
        setFormState({...formState, [event?.target.id]: event?.target.value})
    }

    interface entryData {
        email:string,
        name:string,
        info:string,
        phone:string,
        date:Date
    }

   function handleSubmit(){
        const entry: entryData = {
            name: formState?.name,
            phone: formState?.phone,
            email: formState?.email,
            info: formState?.info,
            date: new Date()
        }
        if (entry.name === undefined || entry.email === undefined || entry.info === undefined){
            console.log("Name was undefined, enter a valid name", console.error(400))
        } else {
            sendData(entry)
            console.log("Sent to backend")
        }
        
    }
    return(
        <div>
            <form>
                <div className='my-5'>
                    <input 
                        className='rounded-md py-1 px-4' 
                        type='text' 
                        placeholder='email' 
                        id='email'
                        value={formState?.email}
                        onChange={handleFormState}
                        />
                </div>
                <div className='my-5'>
                    <input 
                        className='rounded-md py-1 px-4'  
                        type='text'
                        placeholder='name' 
                        id='name'
                        onChange={handleFormState}/>
                        
                </div>
                <div className='my-5'>
                    <input 
                        className='rounded-md py-1 px-4'  
                        type='text'
                        placeholder='phone' 
                        id='phone'
                        value={formState?.phone}
                        onChange={handleFormState}/>
                        
                </div>
                <div className='my-5'>
                    <input 
                        className='rounded-md py-1 px-4'  
                        type='text' 
                        placeholder='info' 
                        id='info'
                        onChange={handleFormState}/>
                </div>
                
            </form>
            <button onClick={handleSubmit} className='bg-red-500 rounded-sm px-3 py-1'> Send Email</button>
            <button onClick={getAllData}>Get all the data</button>
        </div>
    )
}