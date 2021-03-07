import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home'; //home
import SearchIcon from '@material-ui/icons/Search'; //explore
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'; //notifications
import MailOutlineIcon from '@material-ui/icons/MailOutline'; //messages
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'; //bookmarks
import ListAltIcon from '@material-ui/icons/ListAlt'; //list
import PersonOutlineIcon from '@material-ui/icons/PersonOutline'; //profile
import {Button} from "@material-ui/core"
import SidebarOptions from './SidebarOptions'
import "./sidebar.css"
function Sidebar2() {
    return (
        <div className="sidebarClass">
        {/* twitter button */}
        <TwitterIcon className="sidebarTwitterIcon"/>
        <SidebarOptions active Icon={HomeIcon} text="Home" />
        <SidebarOptions Icon={SearchIcon} text="Explore" />
        <SidebarOptions Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOptions Icon={MailOutlineIcon} text="Messages" />
        <SidebarOptions Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOptions Icon={ListAltIcon} text="List" />
        <SidebarOptions Icon={PersonOutlineIcon} text="Profile" />
        <Button variant="outlined" className="tweetButton">Tweet</Button>

        {/* tweet button*/}
    </div>
    )
}

export default Sidebar2
