import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, } from 'react-router-dom';


const Addpost = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imagebb_Key;
    const handleAddDoctor = data => {
        console.log(data);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                // console.log(imgData);

                if (imgData.success) {
                    console.log(imgData.data.url);
                    const addPost = {
                        name: data.name,
                        image: imgData.data.url,
                    }
                    console.log(addPost);

                    //       // save media information to the database

                    fetch('https://socialbook-server-seven.vercel.app/allmediaposts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(addPost)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            if (result.acknowledged) {
                                toast.success('Your post is added successfully');
                                navigate('/media')
                            }
                        })
                }
            })
    }

    return (
        <div className=' w-full p-7 bg-slate-50 rounded-3xl mt-10'>
            <h2 className="text-2xl text-center">Create a post</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs ml-28">
                    <label className="label"> <span className="label-text text-slate-900 ">Write Your Post here...</span></label>
                    <input type="text" {...register("name", {
                        required: true
                    })} className="input input-bordered w-80 h-20 " />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs ml-28 ">
                    <label className="label"> <span className="label-text text-slate-900  ">Attach Image</span></label>
                    <input id='img' type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-80 h-9" />

                    {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                </div>
                <a href='/media'><input className='btn btn-outline w-40 ml-44 mt-6' value="Submit" type="submit" /></a>
                {/*  */}
            </form>
        </div>

        // w-80 h-20    

    );
};

export default Addpost;