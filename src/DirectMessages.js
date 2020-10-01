import React from "react";
import Messagecard from "./Messagecard";
import profile1 from "./media/Profile1.png";

function DirectMessages({ username, title, setChat, chat, handleChatScreen }) {

  return (
    <div className="profile_image profile_image_margin" onClick={handleChatScreen} >
      <Messagecard username={username} title={title} />
      <img src={profile1} alt="" />
    </div>
  );
}

export default DirectMessages;
