import React from 'react';
import images from '../asset/eve.jpg'
import images1 from '../asset/user4.jpg'
import images2 from '../asset/group.jpg'
import images3 from '../asset/us2.png'
import images4 from '../asset/us3.png'
import images5 from '../asset//us4.png'
import './Rightside.css'

const Rightside = () => {
    return (
        
           <div className="home-right">
                <div className="home-right-wrapper">

                    <div className="event-friend">
                        <div className="event">
                            <h3 className="heading bg-slate-100 text-xl">Upcoming Events <span className='text-2xl'>see all</span></h3>
                            <img src={images} alt="event-img" />
                            <div className="event-date">
                                <h3>21 <b>july</b></h3>
                                <h4>United state of America <span>New York City</span></h4>
                            </div>
                            <button><i className="fa-regular fa-star"></i> interested</button>
                        </div>

                        <br />
                    
                        <div className="friend">
                            <h3 className="heading">Friend Requests <span>see all</span></h3>
                            <ul>
                                <li><img src={images1} alt="user" /></li>
                                <li>
                                    <b>armanul islam</b>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <button>confirm</button><button className="friend-remove">remove</button>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="create-page">
                        <ul>
                            <li>
                                <i className="fa-solid fa-circle-plus"></i>
                                <h4>Create Page & Groups</h4>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </li>
                            <li>
                                <img src={images2} alt="groups" />
                            </li>
                            <li>
                                <b>simple group or page name <span>200k Members</span></b>
                                <button>Join Group</button>
                            </li>
                        </ul>
                    </div>

                    <div className="messenger">
                        <div className="messenger-search">
                            <i className="fa-solid fa-user-group"></i>
                            <h4>Messenger</h4>
                            <input type="search" placeholder="Search" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <ul>
                            <li>
                                <img src={images3} alt="user" />
                                <b>Zunayed Hossain <span>Online</span></b>
                                <i className="fa-brands fa-facebook-messenger"></i>
                            </li>

                            <li>
                                <img src={images4} alt="user"/>
                                <b>Armanul Islam <span>Offline</span></b>
                                <i className="fa-brands fa-facebook-messenger"></i>
                            </li>

                            <li>
                                <img src={images5} alt="user" />
                                <b>Mohammad Amir <span>Online</span></b>
                                <i className="fa-brands fa-facebook-messenger"></i>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            
      
    );
};

export default Rightside;