import React, { useState } from 'react';
import "./Sidebar.css";
import profile1 from"./media/Profile1.png";
// import profile2 from"./media/Profile2.png";
// import profile3 from"./media/Profile3.png";
// import profile4 from"./media/Profile4.png";
// import profile5 from"./media/Profile5.png";
// import profile6 from"./media/Profile6.png";
// import profile7 from"./media/Profile7.png";
// import profile8 from"./media/Profile8.png";
// import profile9 from"./media/Profile9.png";
// import profile10 from"./media/Profile10.png";
// import profile11 from"./media/Profile11.png";
import Messagecard from './Messagecard';

function RightSidebar() {

    const [dmtitles,setDmtitles] = useState([
        {username: 'username', title: 'Hey How You doin?' },
        {username: 'username', title: 'Hey How You doin?' },
        {username: 'username', title: 'Hey How You doin?' },
        {username: 'username', title: 'Hey How You doin?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'noone', title: 'Hey mofo?' },
        {username: 'random', title: 'Hey duuudddeee?'}])

    return (
        <div className="sidebar right">
            <div className="sidebar_flex right_align">
                {dmtitles.map(dmtitle=>(
                   <div className="profile_image profile_image_margin">
                   <Messagecard username={dmtitle.username} title={dmtitle.title}/>
                   <img src={profile1} alt=""/>
               </div> 
                ))}
                {/* <div className="profile_image profile_image_margin">
                    <Messagecard/>
                    <img src={profile1} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile2} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile3} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile4} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile5} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile6} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile7} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile8} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile9} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile10} alt=""/>
                </div>
                <div className="profile_image profile_image_margin">
                    <img src={profile11} alt=""/>
                </div> */}

            </div>
        </div>
    )
}

export default RightSidebar
