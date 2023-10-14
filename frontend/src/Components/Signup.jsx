import { useState } from "react"
import logo from '../assets/wechatlogo.png'
import { Link,useNavigate} from "react-router-dom";

import './css/Signup.css'


const Signup = () => {

    const history=useNavigate()


    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        confirmpsd: "",
    }
    )
    // erroe text state variable when input fields will be empty
    const [nameErrortext, setNameErrortext] = useState()
    const [emailErrortext, setEmailErrortext] = useState()
    const [passwordErrortext, setPasswordErrortext] = useState()
    const [confirm, setConfirm] = useState()

    // these are for show and hide errors   
    const [nameError, setNameError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [cfmPsd, setCfmPsd] = useState(true)

    // this function for show and hide error of the name input fields 
    const showNameError = (e) => {
        const nameInput = e.target.value

        if (nameInput.length === 0) {
            setNameError(true)
            setNameErrortext("*Please fill this field")
        } else {
            setNameError(false)
            setNameErrortext("")
            setSignupData({ ...signupData, name: nameInput })

        }
    }
    // this function for show and hide error of the email input fields 
    const showEmailError = (e) => {
        const emailInput = e.target.value;
        const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;

        if (!regex.test(emailInput)) {
            setEmailError(true);
            setEmailErrortext("*Please fill the valid email address");
        } else {
            setEmailError(false);
            setEmailErrortext("");
            setSignupData({ ...signupData, email: emailInput })

        }
    };
    // this function for show and hide error of the name input fields 
    const showPasswordError = (e) => {
        const psdInput = e.target.value
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$/

        if (!regex.test(psdInput)) {
            setPasswordError(true)
            setPasswordErrortext("*Password should have one lowercase ,one uppercase ,one special charecter and less than sixteen")
        } else {
            setPasswordError(false)
            setPasswordErrortext("")
            setSignupData({ ...signupData, password: psdInput })
        }
    }

    const SignupData = (e) => {
        e.preventDefault();
        console.log(signupData);
        history("/");
      };

    const cfPassword = (e) => {
        const confirmPassword = e.target.value
        if (signupData.password === confirmPassword) {
            setCfmPsd(false)
            setConfirm("")
            setSignupData({ ...signupData, confirmpsd: confirmPassword })
        } else {
            setCfmPsd(true)
            setConfirm("*Invalid Password")
        }
    }


    return (
        <div className='flex '>
            <div className='flex flex-1 items-center justify-center h-[100vh]  pl-14  bg-gray-200'>
                <div className='flex flex-col  w-[100%] py-[17.3rem] h-[100vh] gap-3 rounded-l-lg shadow-lg shadow-indigo-500/40 border-l-4  border-white bg-cyan-900'>
                    <div className='img-div items-center flex justify-center'>
                        <img src={logo} alt="logo" className='w-24' />
                    </div>
                    <div className='img-content-div items-center flex justify-center'>
                        <h1 className='text-white text-center    text-xl'>Connect with your family and friends</h1>
                    </div>
                </div>
            </div>
            <div className='flex  flex-1 items-center h-[100vh] pr-14 bg-gray-200'>
                <div className='flex flex-col flex-1 items-center justify-center   py-[3.4rem] h-[100vh]  rounded-r-lg shadow-lg shadow-indigo-500/40 border-e-4  border-white'>
                    <div className='welcome-div flex  flex-col p-2'>
                        <p className='text-center text-3xl border-b-2 border-b-white'>Sign up</p>
                    </div>
                    <form action="" className='flex flex-col gap-4 w-[35vw]' onSubmit={SignupData}>
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Name' onChange={showNameError} />
                        {nameError && <p className="text-red-800">{nameErrortext}</p>
                        }
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder='Email address' onChange={showEmailError} />
                        {emailError && <p className="text-red-800">{emailErrortext}</p>
                        }


                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='Password' autoComplete="on" onChange={showPasswordError} />
                        {passwordError && <p className="text-red-800">{passwordErrortext}</p>
                        }

                        <label htmlFor="">Confirm Password</label>
                        <input type="password" placeholder='Confirm Password' autoComplete="on" onChange={cfPassword} />
                        {cfmPsd && <p className="text-red-800">{confirm}</p>
                        }
                         <button  className='signup-btn text-white rounded-md text-center' type="submit" >
                            Signup
                        </button>

                        <div className='justify-center text-light flex'>
                            <p>Already Have an Acccount ?
                                <Link className='text-blue underline text-blue-600 mx-1' to="/">Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}


export default Signup;