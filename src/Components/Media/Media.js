import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FirstSection from '../First Section/FirstSection';
import Posts from '../Post/Posts';
import Mediapost from './Mediapost';

const Media = () => {


    const user = useLoaderData();
    const [allPost, setallPost] = useState();
    console.log(user);

    return (
        <div>

            <FirstSection></FirstSection>


            <div className=' mt-10 w-full'>
                {
                    user.map(alluser => <Mediapost
                        key={alluser._id}
                        mediaPost={alluser}
                        alluser={setallPost}
                        >

                    </Mediapost>)
                }
            </div>

            {/* {
                allPost && <Posts
                allPost={setallPost}
                ></Posts>
            } */}




        </div>
    );
};

export default Media;