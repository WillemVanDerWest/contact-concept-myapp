import Image from "next/image"
import logo from "../images/screenshot1.png"
import Link from "next/link"

export default function NavBar(){
    return(
        <div className="flex items-center justify-center">
            <div>
                <Image
                    src={logo}
                    width={80}
                    height={80}
                    alt="pic"
                />
            </div>
            <ul className="list-none flex items-center">
                <li className="p-5"> <Link prefetch={true} href="/">Home</Link></li>
                <li className="p-5">About</li>
                <li className="p-5">Projects</li>
                <li className="p-5">Services</li>
                <li className="p-5">Resume</li>
                <li className="p-5"><a href="/contact-us">Contact</a></li>
                <li className="p-5"><a href="/adminPage">Login</a></li>
            </ul>
        </div>
    )
}