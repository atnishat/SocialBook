import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import AllAboutSection from './AllAboutSection';

const AllAbout = () => {

    const user = useLoaderData([]);
  
    // console.log(user);



    return (
        <div>

            {
                user.map(userInfo => <AllAboutSection
                key={userInfo._id}
                allUserInfo={userInfo}
                ></AllAboutSection>)
            }


           

        </div>
    );
};

export default AllAbout;