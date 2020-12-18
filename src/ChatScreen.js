import React, { useState } from "react";


function ChatScreen({ setChatContent, chatContent, chat, handleChatScreen }) {

  const [text, setText] = useState('');

  const sendText=()=>{
    setChatContent([...chatContent,text]);
    setText('');
  }

  return (
    <div className="chat">
      <div className="chat__box">
        <div className="chat__header" >
          <svg onClick={()=>handleChatScreen(false)} aria-label="Back" className="back_svg" fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M40 33.5c-.4 0-.8-.1-1.1-.4L24 18.1l-14.9 15c-.6.6-1.5.6-2.1 0s-.6-1.5 0-2.1l16-16c.6-.6 1.5-.6 2.1 0l16 16c.6.6.6 1.5 0 2.1-.3.3-.7.4-1.1.4z"></path></svg>
          <h4>{chat}</h4>
          <svg aria-label="View Thread Details" className="_8-yf5 " fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><circle clip-rule="evenodd" cx="24" cy="14.8" fill-rule="evenodd" r="2.6"></circle><path d="M27.1 35.7h-6.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h6.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"></path><path d="M24 35.7c-.8 0-1.5-.7-1.5-1.5V23.5h-1.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5H24c.8 0 1.5.7 1.5 1.5v12.2c0 .8-.7 1.5-1.5 1.5z"></path></svg>
        </div>
        <div className="chat_content">
          {chatContent.map(text=>(
            <div className="chat_text">
              <h5>{text}</h5>
            </div>
          ))}
        </div>
        <form className="chat__form">
          <input className="chat__input" type="text" placeholder="Message..." value={text} onChange={e=>setText(e.target.value)}/>
          <button disabled={!text} onClick={sendText} className="chat__button">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
