import React from 'react';
import Addpost from '../../AddPost/Addpost';
import FirstSection from '../../First Section/FirstSection';
import Media from '../../Media/Media';
import Posts from '../../Post/Posts';


const Home = () => {
    return (
       
            <div className='w-3/5'>
                <FirstSection></FirstSection>
            <Addpost></Addpost>
            <Posts></Posts>
            {/* <Media></Media> */}
            {/* <Posts></Posts> */}
            {/* <AllPost></AllPost> */}
            </div>
           
       
    );
};

export default Home;