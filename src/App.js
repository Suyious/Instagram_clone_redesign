import React, { useState, useEffect } from 'react';
import './App.css';
import Post from "./Post"
// import photo from "./photo.jpg";
import Navigation from './Navigation';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import { db, auth } from './firebase';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
// import UploadScreen from './UploadScreen';

function App() {

  const [posts,setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [signInOpen, setSignInOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        console.log(authUser);
        setUser(authUser);
      }else{
        setUser(null)
      }
    }) 
    return ()=>{
      unsubscribe()
    }
    }, [user, username])

  useEffect(()=>{
    db.collection("Posts").onSnapshot((snapshot)=>{
      setPosts(snapshot.docs.map(doc=>{
        return({id: doc.id, post: doc.data()})
      }))
    })
  },[])

  const signUp=(event)=>{
    event.preventDefault();

    auth.createUserWithEmailAndPassword(email,password)
    .catch((error)=> alert(error.message))

    setOpen(false)
  }

  const signIn=(event)=>{
    event.preventDefault();

    auth.signInWithEmailAndPassword(email,password)
    .then((authUser)=>{
      authUser.user.updateProfile({
        displayName: username
      })
    })
    .catch((error)=> alert(error.message))

    setSignInOpen(false)
  }

  const signOut=()=>{
    auth.signOut()
  }

  return (

    <div className="App">
      
      <Navigation user={user} open={open} setOpen={setOpen} signInOpen={signInOpen} setSignInOpen={setSignInOpen} signOut={signOut}/>
      {open && <SignUpScreen 
                  setOpen={setOpen}
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  signUp={signUp}/>}
      {signInOpen && <LoginScreen 
                  setSignInOpen={setSignInOpen}
                  username={username}
                  setUsername={setUsername}
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  signIn={signIn}/>}

      {/* <UploadScreen/> */}
      
      <LeftSidebar user={user} username={username}/>
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
  );
}

export default App;
