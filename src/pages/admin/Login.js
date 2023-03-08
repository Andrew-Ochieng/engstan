// import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import loginImg from '../../public/login.png'


export default function () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (e) => {
        e.preventDefault();
        
        const login = {username, password} 
        console.log(login)
        console.log("User logged in successfully")
    }

    return (
        <>
            <div className="md:flex justify-center items-center md:my-16 my-12 mx-8">
                <div className="md:w-1/3 lg:mr-16 md:mr-8">
                    <Image src={loginImg} alt="" />
                </div>

                <div className="flex flex-col ">
                    <form onSubmit={handleLogin}>
                        <h1 className="md:text-2xl text-xl my-4 font-semibold text-gray-800">
                            Login
                        </h1>
                        <div className="md:mt-4 mt-2">   
                            <label htmlFor="username">Username</label><br />
                            <input
                                type="text"
                                className="input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="md:mt-4 mt-2">
                            <label htmlFor="password">Password</label><br />
                            <input
                                type="password"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn bg-[#084E7A] w-full md:mt-4 mt-2">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

