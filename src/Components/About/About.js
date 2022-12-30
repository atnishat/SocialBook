import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const About = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);
    const [allUsers, setallUsers] = useState({});
    // const location = useLocation();
    const navigate = useNavigate();

    // const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        console.log(event);
        event.preventDefault();
        console.log(allUsers);
        fetch('https://socialbook-server-seven.vercel.app/aboutusers', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                    },
                    body: JSON.stringify(allUsers)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    if(result.acknowledged){
                   toast.success(`About added successfully`);
        // //         //    event.target.reset();
        //             navigate('/media')
                    }
                 
                })

      
    }


    const handlepost = event => {
        // console.log(event);
        const field = event.target.name;
        const value = event.target.value;
        const newUser = {...allUsers}
        newUser[field]=value;
        setallUsers(newUser);

    
      
    }

   

    return (
        <div className='h-[580px] ml-40 mt-14 bg-slate-200 rounded '>
        <div className='w-96 p-7'>
            <h2 className='text-xl text-center text-slate-900 font-bold text-2xl'>About Me</h2>
            <form onSubmit={handleSubmit} >
            <div className="form-control w-full max-w-xs ">
                    <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Email</span></label>
                    <input onBlur={handlepost} type="text" name='email' defaultValue={user?.email} readOnly className="input input-bordered w-full max-w-xs" />                  
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Name</span></label>
                    <input onBlur={handlepost} type="text" name='username' className="input input-bordered w-full max-w-xs" />
                   
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">University Name</span></label>
                    <input onBlur={handlepost} type="text" name='universityName' className="input input-bordered w-full max-w-xs" />
                    
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Address</span></label>
                    <input onBlur={handlepost} type="text" name='address' className="input input-bordered w-full max-w-xs" />
                    <label className="label"> <span className="label-text"></span></label>
                </div>
                <a href='/allabout'  className='btn btn-outline w-full text-slate-900 font-bold text-2xl'>
                Submit
                </a>
            </form>
            </div>
    </div>
    );
};

export default About;