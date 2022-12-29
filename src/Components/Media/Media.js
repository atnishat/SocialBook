import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Mediapost from './Mediapost';

const Media = () => {


    const user = useLoaderData();
    console.log(user);

    return (
        <div className='w-2/4 mt-36 flex'>


            {
                user.map(alluser => <Mediapost
                    key={alluser._id}
                    mediaPost={alluser}>

                </Mediapost>)
            }    </div>
    );
};

export default Media;