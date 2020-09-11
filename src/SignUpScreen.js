import React from 'react';
import "./LoginScreen.css"
import instagram from"./instagram.png";

function SignUpScreen({setOpen, username, setUsername, email, setEmail, password, setPassword, signUp}) {
    return (
        <div className="screen_page">
            <div className="screen_card">
                <form action="">
                    <img className="logo_image" src={instagram} alt=""/>
                    <input className="input input_username" type="text" placeholder="username" value={username} onChange={(event)=> setUsername(event.target.value)}/>
                    <input className="input input_email" type="email" placeholder="email" value={email} onChange={(event)=> setEmail(event.target.value)}/>
                    <input className="input input_password" type="password" placeholder="password" value={password} onChange={(event)=> setPassword(event.target.value)}/>
                    <button className="button button_signup" onClick={signUp}>Sign up</button>
                    <button className="button button_cancel" onClick={()=>setOpen(false)}>Cancel</button>
                </form>
            </div>
            
        </div>
    )
}

export default SignUpScreen
