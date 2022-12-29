import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Pages/Shared/Footer/Footer';
import Navbar from '../Components/Pages/Shared/Navbar/Navbar';
import Leftside from '../Components/Leftside/Leftside'
import Rightside from '../Components/Rightside/Rightside'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
          
           
            {/* grid grid-cols-3 gap-10 */}

           
                    <div className='flex gap-10'>
                       <Leftside></Leftside>           
                        <Outlet></Outlet>                 
                        <Rightside></Rightside>
                   
              </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;