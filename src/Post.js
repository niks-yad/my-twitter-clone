import React, {forwardRef} from 'react'
import "./Post.css"
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(({displayName, userName, verified, text, image, avatar}, ref) => {
    return (
        <div className="postClass" ref={ref}>
            {/* Avatar */}
            <div className="post__avatar">
            <Avatar src={avatar} />
            </div>

            {/* Post Body */}
            <div className="post__body">

                {/* Post Header */}
                <div className="post__header">
                    
                    {/* Header text*/}
                    <div className="post__header__text">
                        <h3>{displayName}
                        {verified ?
                            <span>
                            
                            <VerifiedUserIcon className="verified_badge"/>

                        </ span>:null}
                        
                        </h3>
                        <h4>@{userName}</h4>
                    </div>

                    {/* Header description*/}  
                    <div className="post__header__description">
                     <p>
                            {text}
                     </p>
                    </div>

                </div>

                {/* Image */}
                <img src={image}/>

                {/* Post Footer */}
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>

            </div>

        </div>
    )
})

export default Post
