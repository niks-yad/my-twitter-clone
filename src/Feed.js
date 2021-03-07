import React, {useState, useEffect} from 'react'
import "./Feed.css"
import Tweetbox from "./Tweetbox"
import Post from "./Post"
import db from "./Firebase";
import FlipMove from 'react-flip-move'

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
          setPosts(snapshot.docs.map((doc) => doc.data()))
        );
      }, []);

    return (
        <div className="feedClass">
            {/* Header */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            
            {/* Tweet box */}
            <Tweetbox />
            {/* Post/Tweet */}
            <FlipMove appearAnimation="accordionVertical">
            {posts.map(post =>(
                <Post key={post.texts} 
                displayName={post.displayName}
                 verified={post.verified}
                 userName={post.userName} 
                 text={post.text}
                 image={post.image}
                 avatar={post.avatar}></Post>
            
            ))}
            </FlipMove>
            

            
            {/* Post/Tweet */}
            {/* Post/Tweet */}
            {/* Post/Tweet */}

        </div>
    )
}

export default Feed
