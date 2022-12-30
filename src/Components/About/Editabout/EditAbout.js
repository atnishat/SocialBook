import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';


const EditAbout = () => {


    const storeUser = useLoaderData();
    // console.log(storeUser);
    const [allUsers, setallUsers] = useState(storeUser);

    const handleUpdate = event => {
        event.preventDefault();
        console.log(allUsers);



        
        fetch(`http://localhost:5000/users/${storeUser.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(allUsers)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result.acknowledged) {
                       toast.success('Update successfully');
                    // event.target.reset();
        //             // navigate('/media')
                }

            })


    }


    const handleUpdatepostChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const newUser = { ...allUsers }
        newUser[field] = value;
        setallUsers(newUser);
    }


    return (
        <>
            <div className='h-[580px] ml-40 mt-14 bg-slate-200 rounded '>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center text-slate-900 font-bold text-2xl'>About Me</h2>
                    <form onSubmit={handleUpdate} >
                        <div className="form-control w-full max-w-xs ">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Email</span></label>
                            <input onChange={handleUpdatepostChange} type="text" name='email' defaultValue={storeUser.email} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Name</span></label>
                            <input onChange={handleUpdatepostChange} type="text" defaultValue={storeUser.username} name='username' className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">University Name</span></label>
                            <input onChange={handleUpdatepostChange} type="text" defaultValue={storeUser.universityName} name='universityName' className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Address</span></label>
                            <input onChange={handleUpdatepostChange} type="text" defaultValue={storeUser.address} name='address' className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text"></span></label>
                        </div>
                          
                          <input className='btn btn-outline w-full text-slate-900 font-bold text-2xl' value="Update" type="submit" />
                         
                        
                    </form>
                </div>
            </div>



        </>
    );
};

export default EditAbout;