
import React, { useContext, useEffect, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinning from '../../components/Spinning';
import { AuthContext } from '../../UserContext/UserContext';





const Login = () => {
    const [errorMsg, setErrorMsg] = useState('')
    const { login, setLoading, loading } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();



    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


 

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;

                navigate(from, { replace: true });

            })
            .catch(error => {
                if(error){
                    setLoading(false)
                    setErrorMsg("Wrong email or password!!")
                }
            })
    }



  

    if (loading) {
        return <Spinning></Spinning>

    }

    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-primary text-black w-96'>
                <h1 className="text-center font-bold text-2xl">Sign In</h1>
                <form onSubmit={handleLogin}>
                    <div className='flex flex-col my-3 items-start '>
                        <label htmlFor="email" className='font-bold '>Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3'>
                        <div className='flex justify-between items-center'>
                            <label htmlFor="password" className='font-bold'>Password</label>
                            <span onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ?
                                        <FaEyeSlash className='text-red-600'></FaEyeSlash>
                                        :
                                        <FaEye className='text-stone-600' ></FaEye>

                                }
                            </span>
                        </div>
                        <input type={showPass ? 'text' : 'password'} name="password" id="password" placeholder="Password" className="p-2 w-full" />
                    </div>
                    <p className='text-red-600'>{errorMsg}</p>
                    <input type="submit" className='font-bold text-lg bg-[rgba(233,31,98,0.32)] hover:text-[rgb(233,31,99)] py-2 px-4 rounded my-3 cursor-pointer' value="Sign In" />
                </form>
                <h4>New to adoordesigns? <Link to='/adoordesignsdashboardsignup' className='text-[rgb(233,31,99)]'>Create Account</Link></h4>
            </div>

        </div>
    );
};

export default Login;