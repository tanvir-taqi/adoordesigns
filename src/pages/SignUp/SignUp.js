import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Spinning from '../../components/Spinning';
import { AuthContext } from '../../UserContext/UserContext';



const SignUp = () => {

    const { createUser,  setLoading, loading } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState('')

    const navigate = useNavigate();
    const location = useLocation();


    const from = location.state?.from?.pathname || "/";

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password === confirm) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                        setLoading(false)
                        navigate(from, { replace: true });

                })
                .catch(err => {
                    setLoading(false)
                    if(err){
                        setErrorMsg("Password should be at least 6 characters long..");
                    }
                });
        } else {
            setErrorMsg("Password and confirmation don't match");

        }
    }

    if (loading) {
        return <Spinning></Spinning>
    }
    return (
        <div className=" py-32 w-full flex justify-center">
            <div className='p-10 bg-primary text-black rounded w-96'>
                <h1 className="text-center font-bold text-2xl">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <div className='flex flex-col my-3 items-start'>
                        <label htmlFor="email" className='font-bold'>Email</label>
                        <input required type="email" name="email" id="email" placeholder="Email" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3 items-start'>
                        <label htmlFor="password" className='font-bold'>Password</label>
                        <input required type="password" name="password" id="password" placeholder="Password" className="p-2 w-full" />
                    </div>
                    <div className='flex flex-col my-3 items-start'>
                        <label htmlFor="confirm" className='font-bold'>Confirm Password</label>
                        <input required type="password" name="confirm" id="confirm" placeholder="Confirm Password" className="p-2 w-full" />
                    </div>
                    <p className='text-red-600'>{errorMsg}</p>
                    <input type="submit" className='cursor-pointer font-bold text-lg bg-[rgba(233,31,98,0.32)] hover:text-[rgb(233,31,99)] py-2 px-4 rounded my-3' value="Sign Up" />
                </form>
                <h4>Already Have an Account? <Link to='/adoordesignsdashboardlogin' className='text-[rgb(233,31,99)]'>Sign In</Link></h4>
            </div>
        </div>
    );
};

export default SignUp;