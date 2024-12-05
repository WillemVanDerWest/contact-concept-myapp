import ContactForm from "../components/ContactForm"
import Link from "next/link"

export default function TestPage(){

    return(
        <div>
            <ContactForm/>
            <Link prefetch={true} href='/'>Home</Link>
        </div>
    )
}