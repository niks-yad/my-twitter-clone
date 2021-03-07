import { Avatar, Button } from '@material-ui/core'
import React, {useState} from 'react'
import "./Tweetbox.css"
import db from "./Firebase"

function Tweetbox() {
    const [tweetMessage, settweetMessage] = useState("");
    const [tweetImage, settweetImage] = useState("");

    const sendTweet = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Nikhil Yadav", userName: "niks_yad", verified: true, text: tweetMessage, image: tweetImage, avatar: "https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/s150x150/139096799_3577197902395820_7972710509910472747_n.jpg?tp=1&_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=Llb1rqYa5MgAX_Vb3z0&oh=4bbd12a033011a1f2686d668dba4360c&oe=606DD3E1"
        });

        settweetMessage("");
        settweetImage("");
    };

    return (
        <div className="tweetboxClass">
            <form>
                <div className="tweetbox__input">
                    <Avatar src="https://instagram.fdel27-1.fna.fbcdn.net/v/t51.2885-19/s150x150/139096799_3577197902395820_7972710509910472747_n.jpg?tp=1&_nc_ht=instagram.fdel27-1.fna.fbcdn.net&_nc_ohc=Llb1rqYa5MgAX_Vb3z0&oh=4bbd12a033011a1f2686d668dba4360c&oe=606DD3E1" />
                    <input value={tweetMessage} onChange={(e) => settweetMessage(e.target.value)} type="text" placeholder="What's happening?"></input>
                </div>
                <input value={tweetImage} onChange={(e) => settweetImage(e.target.value)} type="text" className="tweetbox__imageinput" placeholder="Image Post URL"></input>
                <Button onClick={sendTweet} type="submit" className="tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default Tweetbox
