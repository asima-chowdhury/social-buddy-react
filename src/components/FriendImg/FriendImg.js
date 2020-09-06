import React from 'react';
import '../../fakeData/allFriend'

const SingleFriend = (props) => {
    const { img } = props.singleImg;
    // console.log(img);
    return (
        <div className="comment-img">
            <img src={img} alt="single-friend" />
        </div>
    );
};

export default SingleFriend;