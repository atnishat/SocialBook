import React from 'react';

const Mediapost = ({mediaPost}) => {
    const {name,image,Name,} = mediaPost;
    console.log(mediaPost);
    return (
        <div className="card w-96 h-80 border-purple-50 border-solid border-2 bg-base-100 shadow-xl ml-9">
        <figure><img src={image} alt="Shoes" className='w-60 h-24 border-2 rounded bg-black mt-5' /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            
          </h2>
          <div className="badge badge-secondary">Author: Nishat</div>
          <div className="card-actions justify-start mt-10">
            <div className="badge badge-outline">Like</div> 
            <div className="badge badge-outline">Comment</div>
          </div>
        </div>
      </div>
    );
};

export default Mediapost;