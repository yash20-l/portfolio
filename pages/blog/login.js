import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleOnChange = (e, type) => {
        if (type == 'username'){
            setUsername(e.target.value)
        }
        else if (type == 'password'){
            setPassword(e.target.value)
        }
    }
    const router = useRouter()
    useEffect(() => {
        if (username == '2213yash@gmail.com' && password == 'yashverma123'){
            router.replace('/blog/newblog')
        }
    }, [username, password])
    return (
        <div className='h-screen bg-blue-800 px-4'>
            <h1 className='text-center py-8 px-2 text-[white] font-[Poppins] font-[700] font-[Poppins] text-[2rem]'>Authorized Login</h1>
            <div className="form">
                <input value={username} onChange={(e) => {handleOnChange(e, 'username')}} type="text" className='py-2 mb-4 px-4 bg-white w-full outline-none text-gray-800 font-[800]' placeholder='Enter registered username' style={{ fontFamily: "Poppins, sans-serif" }} />
                <input value={password} onChange={(e) => {handleOnChange(e, 'password')}} type="password" className='py-2 mb-4 px-4 bg-white w-full outline-none text-gray-800 font-[800]' placeholder='Enter password' style={{ fontFamily: "Poppins, sans-serif" }} />
            </div>
        </div>
    )
}

export default Login