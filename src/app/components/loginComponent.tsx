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
            checkIfValid(false)
        )
    }
    return(
        <div>
            <div>
                <input onChange={handleLoginDetails} type='text' id="username" placeholder="UserName"/>
            </div>
            <div>
                <input onChange={handleLoginDetails} type='password' id="password" placeholder="password"/>
            </div>
            <div>
                <button onClick={sendToFrontIfValid}> Submit </button>
            </div>
        </div>
    )
}