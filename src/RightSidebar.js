import React, { useState } from "react";
import "./Sidebar.css";
import DirectMessages from "./DirectMessages";
import ChatScreen from "./ChatScreen";
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

function RightSidebar() {
  const [dmtitles, setDmtitles] = useState([
    { username: "username", title: "Hey How You doin?" },
    { username: "ducker", title: "Wanna Hang out Bruhhh??" },
    { username: "noone", title: "Hey mofo?" },
    { username: "random", title: "Hey duuudddeee?" },
  ]);

  const [chat, setChat] = useState(false);
  const [chatContent, setChatContent] = useState([])

  const handleChatScreen=(username,title='')=>{
    setChat(username);
    setChatContent([title]);
  }

  return (
    <div className={`sidebar right ${chat ? "chatting" : "chatOff"}`}>
      <div className="sidebar_flex right_align">
        {dmtitles.map((dmtitle) => (
          <DirectMessages
            handleChatScreen={handleChatScreen}
            chat={chat}
            setChat={setChat}
            username={dmtitle.username}
            title={dmtitle.title}
          />
        ))}
      </div>
      {chat && 
        <ChatScreen setChatContent={setChatContent} chatContent={chatContent} chat={chat} handleChatScreen={handleChatScreen}/>
      }
    </div>
  );
}

export default RightSidebar;
