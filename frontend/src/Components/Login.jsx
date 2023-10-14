import { useState } from 'react'
import logo from '../assets/wechatlogo.png'
import { Link } from 'react-router-dom'
import './css/Login.css'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    }
    )
    const [error, setError] = useState(true)
  

    const LoginData = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className='flex '>
            <div className='flex flex-1 items-center justify-center h-[100vh]  pl-14  bg-cyan-900'>
            <div className='flex flex-col  w-[100%] py-44 gap-3 rounded-l-lg shadow-lg shadow-indigo-500/40 border-l-4 border-t-4 border-white'>
                <div className='img-div items-center flex justify-center'>
                    <img src={logo} alt="logo" className='w-24' />
                </div>
                <div className='img-content-div items-center flex justify-center'>
                    <h1 className='text-white text-center    text-xl'>Connect with your family and friends</h1>
                </div>
            </div>
            </div>
            <div className='flex  flex-1 items-center h-[100vh] pr-14 bg-gray-200'>
            <div className='flex flex-col flex-1 items-center justify-center   py-[3.4rem] pb-[3.5rem] rounded-r-lg shadow-lg shadow-indigo-500/40 border-e-4 border-t-4 border-white'>
                <div className='welcome-div flex  flex-col'>
                    <p className=' text-2xl mb-2 text-center'>Welcome Back!!!</p>
                    <p className='text-center'>Login your account</p>
                </div>
                <form action="" className='flex flex-col gap-5 w-[35vw]' onSubmit={LoginData}>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder='Email address' onChange={((e) => setFormData({ ...formData, email: e.target.value }))} />
                    {
                        <p>{error}</p>
                    }
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder='Password' autoComplete='on' onChange={((e) => setFormData({ ...formData, password: e.target.value }))} />
                    <button type='submit' className='login-btn text-white rounded-md'>Submit</button>

                    <div className='justify-center text-light flex'>
                        <p>Don't Have an Acccount ?
                            <Link className='text-blue underline text-blue-600 mx-1' to="/Signup">Signup </Link>
                        </p>
                    </div>
                </form>
            </div>
            </div>
        </div >
    )
}

export default Login