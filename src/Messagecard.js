import React from "react";
// import ChatScreen from "./ChatScreen";

function Messagecard({ username, title}) {
  return (
    <div className="message_card">
      <div className="messagecard">
        <h3>{username}</h3>
        <h4>
          {title} <span>4h</span>
        </h4>
      </div>
    </div>
  );
}

export default Messagecard;
