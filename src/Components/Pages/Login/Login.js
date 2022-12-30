import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import app from '../../../Firebase/firebase.config';





const auth = getAuth(app)
const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }


    const googleSignin = new GoogleAuthProvider();
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,googleSignin )
        .then(result => {
            const user = result.user;
            toast('User Created With Google Successfully.')
            console.log(user);
        })

        .catch(error => {
            console.log(error)
        });
    }




    return (
        <div className='w-1/2'>
            <div className=' p-7 bg-slate-400  rounded mt-10'>
                <h2 className=' text-center text-2xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)} >
                    <div className="form-control w-full max-w-xs ml-32 mt-5">
                        <label className="label text-xl font-bold"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs ml-32">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-outline w-44 ml-52' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div>
                </form>
                <p className='ml-32'>New to SocialBook <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-60 ml-40'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;