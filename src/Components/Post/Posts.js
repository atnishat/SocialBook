import React from 'react';
import { useLoaderData } from 'react-router-dom';
import imgg from '../asset/user.jpg'
import imgg1 from '../asset/love.png'
import imgg2 from '../asset/like.png'
import './Post.css'
// import './AllPost'


const Posts = () => {






    const Allpost = useLoaderData();
    // console.log(Allpost)



    const makeComment = (text, postId) => {
        // fetch('/comment', {
        //     method: "put",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         postId,
        //         text
        //     })
        // }).then(res => res.json())
        //     .then(result => {
        //         console.log(result)
               
        //     }).catch(err => {
        //         console.log(err)
        //     })
    }



    return (
        <div className='mt-10'>


            <div className="fb-post1">
                <div className="fb-post1-container">
                    <div className="fb-post1-header">
                        <ul>
                            <li className="active">popular</li>
                            <li>recent</li>
                            <li>most view</li>
                        </ul>
                    </div>
                    <div className="fb-p1-main">
                        <div className="post-title">
                            <img src={imgg} alt="user picture" />
                            <ul>
                                <li><h3 className='text-xl font-bold'>Tasnim Nishat <span> . 2 hours ago</span></h3></li>
                                <li><span>02 march at 12:55 PM</span></li>
                            </ul>
                            <p>
                                title:
                            </p>
                        </div>

                        <div className="post-images">
                            <div className="post-images1">
                                <img src="" alt="post images 01" />
                            </div>
                        </div>

                        <div class="like-comment">
                            <ul>
                                <li className='flex'>
                                    <img src={imgg1} alt="love" />
                                    <img src={imgg2} alt="like" />
                                    <span>22k like</span>
                                </li>
                                <li><i class="fa-regular fa-comment-dots"></i> <span>555 comments</span></li>
                                <li><i class="fa-solid fa-share-from-square"></i> <span>254 share</span></li>
                            </ul>

                            <div className='mt-3'>
                                <h2>Leave Us a Comment</h2>
                                <form onSubmit={(e) => {
                                    e.preventDefault()
                                    // makeComment(e.target[0].value, item._id)
                                }}>
                                    <input type="text" placeholder="add a comment" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Posts;