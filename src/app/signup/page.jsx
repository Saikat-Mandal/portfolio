"use client"
import { useState } from 'react'
import axios from 'axios'
import Home from '../page'

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const onSignup = async () => {
        try {
            const response = await axios.post("/api/auth/signup", {
                email: email,
                password: password
            })
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Home>
            <div className=' p-4'>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder=' email' />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder=' password' />
                <button onClick={onSignup}>Submit</button>
            </div>
        </Home>
    )
}

export default Signup