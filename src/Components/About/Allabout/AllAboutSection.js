import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AllAboutSection = ({ allUserInfo }) => {
    // const {} = allUserInfo
    // console.log(allUserInfo?.email);
    const { user } = useContext(AuthContext);
    // console.log(user.email);

    // if (allUserInfo?.email = user?.email) {

    // }


    return (
        <div>
            <Link to={`/update/${allUserInfo.email}`} className="btn ml-24 font-bold text-xl mt-5 w-32">
                Edit
            </Link>
            <div className='h-[500px] ml-40 mt-14 bg-slate-200 rounded '>
                <div className='w-96 p-7'>
                    <h2 className='text-xl text-center text-slate-900 font-bold text-2xl'>About Me</h2>
                    <form >
                        <div className="form-control w-full max-w-xs ">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Email</span></label>
                            <input type="text" name='email' defaultValue={allUserInfo.email} readOnly className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Name</span></label>
                            <input type="text" name='username' defaultValue={allUserInfo.username} readOnly className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">University Name</span></label>
                            <input type="text" name='universityName' defaultValue={allUserInfo.universityName} readOnly className="input input-bordered w-full max-w-xs" />

                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text text-slate-900 font-bold text-xl">Address</span></label>
                            <input type="text" name='address' defaultValue={allUserInfo.address} readOnly className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text"></span></label>
                        </div>

                    </form>
                </div>
            </div>

        </div>

    );
};

export default AllAboutSection;