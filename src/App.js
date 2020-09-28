import React, { useState} from 'react';
import './App.css';
import Post from "./Post"
import photo from "./photo.jpg";
import Navigation from './Navigation';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
// import { db, auth } from './firebase';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
// import UploadScreen from './UploadScreen';

function App() {

  const [posts,setPosts] = useState([
    {post: { username: 'username', imageURL: photo, caption: 'aye'},id: 1},
    {post:{username: 'madman', imageURL: photo, caption: 'imcrazyyyyyyy'},id: 1}]);
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  // const [user, setUser] = useState(null);


  return (

    <div className="App">
      
      <Navigation open={open} setOpen={setOpen}>
      </Navigation>
      {signInOpen && <LoginScreen 
                  setSignInOpen={setSignInOpen}/>}
      {open && <SignUpScreen 
                  setOpen={setOpen}/>}

      <div className="feeds">
        <LeftSidebar />
        <RightSidebar/>

        <header className="header">
          <div className="boxwidth">
            {posts.map(({post, id})=>{
              return(
              <Post key={id} username={post.username} caption={post.caption} imageURL={post.imageURL}/>
              )
            })}
          </div>
        </header>
      </div>
      
    </div>
  );
}

export default App;
