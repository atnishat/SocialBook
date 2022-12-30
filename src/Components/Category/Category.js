import React from 'react';
import img1 from '../asset/user.jpg'
import img2 from '../asset/messenger.png'
import img3 from '../asset/instagram.png'
import img4 from '../asset/gg.png'
import img5 from '../asset/gg2.png'
import img6 from '../asset/gg3.png'
import img7 from '../asset/game.png'
import img8 from '../asset/game2.png'
import './Category.css'


const Category = () => {
    return (
        <div className='ml-3'>
            {/* <!-- home left start here --> */}
            <div className="home-left">

                <div className="profile">
                    <img src={img1} alt="user" />
                    <h3>Tasnim Nishat</h3>
                </div>

                <div className="pages">
                    <h4 className="mini-headign">Pages</h4>
                    <label>
                        <img src={img2} alt="messenger" />

                        <span>messenger</span>
                    </label>
                    <label>
                        <img src={img3} alt="" />

                        <span>instagram</span>
                    </label>
                    <button className="see-more-btn">See more <i className="fa-solid fa-angle-down"></i></button>
                </div>

                <div className="group">
                    <h4 className="mini-headign">Group</h4>
                    <label>
                        <img src={img4} alt="" />

                        <span>Graphic design</span>
                    </label>

                    <label>

                        <img src={img5} alt="group02" />
                        <span>website design</span>
                    </label>

                    <label>

                        <img src={img6} alt="group03" />
                        <span>ZED.zahidul</span>
                    </label>

                    <button className="see-more-btn">See more <i className="fa-solid fa-angle-down"></i></button>
                </div>

                <div className="games">
                    <h4 className="mini-headign">Games</h4>
                    <label>

                        <img src={img7} alt="game01" />
                        <span>Facebook games</span>
                    </label>
                    <label>

                        <img src={img8} alt="game02" />
                        <span>Free Play Games</span>
                    </label>
                    <button className="see-more-btn">See more <i className="fa-solid fa-angle-down"></i></button>
                </div>

                <div className="explore">
                    <h4 className="mini-headign">Explore</h4>

                    <a href="mmm"><i className="fa-solid fa-user-group"></i> Group</a>
                    <a href="mmmmm"><i className="fa-solid fa-star"></i> Favorites</a>
                <a href="mmmm"><i className="fa-solid fa-bookmark"></i> Saves</a>
            <a href="mmm"><i className="fa-solid fa-clock"></i> Events</a>
            <a href="mmmm"><i className="fa-solid fa-flag"></i> Pages</a>

            <div><label className="darkTheme"> <span></span></label> Apply Dark Theme</div>

            <button className="see-more-btn">See more <i className="fa-solid fa-angle-down"></i></button>
        </div>

            </div >
    {/* <!-- home left end here --> */ }
        </div >
    );
};

export default Category;
