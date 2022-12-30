import React from 'react';

const Mediapost = ({mediaPost}) => {
    const {name,image,Name,} = mediaPost;
    console.log(mediaPost);
    return (
        <div className="card w-full h-3/5 border-purple-50 border-solid border-2 bg-base-100 shadow-xl mb-10">
        <figure><img src={image} alt="Shoes" className='w-3/4 h-52 border-2 rounded-2xl bg-black mt-5' /></figure>
        <div className="card-body">
          <h2 className="card-title ml-20">
            {name}   
          </h2>
          <div className="badge badge-secondary text-center text-2xl ml-96">Author: Nishat</div>

          <div className="card-actions justify-start mt-10 justify-center">
            <div className="badge badge-outline">Like</div> 
            <div className="badge badge-outline">Comment</div>
          </div>
        </div>
      </div>
    );
};

export default Mediapost;