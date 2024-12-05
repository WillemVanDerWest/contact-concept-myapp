import { useState } from "react"

interface LoginProps {
    checkIfValid : (isValid: boolean)=> void
}
export default function LoginComponent( {checkIfValid}: LoginProps ){
    interface LoginDetails{
        username?: string,
        password?: string
    }
    const initialLoginDetails: LoginDetails = 
        {
            username: '',
            password: ''
        }
    const [loginDetails, setLoginDetails] = useState<LoginDetails>(initialLoginDetails);
    function handleLoginDetails(event: React.ChangeEvent<HTMLInputElement>){
        if (event?.target.id){
            setLoginDetails({...loginDetails, [event?.target.id]: event?.target.value})
        }
    }
    
    function sendToFrontIfValid(){
        const grabDetails : LoginDetails = 
        {  
            username: process.env.NEXT_PUBLIC_USERNAME,
            password: process.env.NEXT_PUBLIC_PASSWORD
        }

        if (grabDetails.username === loginDetails.username && grabDetails.password === loginDetails.password){
            checkIfValid(true)
        } else (
            checkIfValid(true) // change to false when done
        )
    }
    return(
        <div className='bg-white py-8 px-10 w-2/6 text-black rounded-3xl m-auto mt-44'>
            <div className='font-bold text-3xl mb-8 justify-center flex'>Login</div>
            <div className="flex justify-center py-2">
                <div className="w-28">
                    Username:
                </div>
                <input className="bg-gray-200 px-3 rounded-xl" onChange={handleLoginDetails} type='text' id="username" placeholder="Username"/>
            </div>
            <div className="flex justify-center py-2">
                <div className="w-28">
                    Password:
                </div>
                <input className="bg-gray-200 px-3 rounded-xl" onChange={handleLoginDetails} type='password' id="password" placeholder="Password"/>
            </div>
            <div className="flex justify-center">
                <button className="rounded-3xl bg-gray-200 px-5 py-3 font-bold text-lg mt-8 hover:bg-gray-400" onClick={sendToFrontIfValid}> Submit </button>
            </div>
        </div>
    )
}