import React, { useState } from 'react';
import "./LoginScreen.css";
// import { db, storage } from './firebase';
// import firebase from 'firebase'

function UploadScreen({setOpen, username}) {

    const [image, setImage] = useState(null);
    const [caption, setCaption] = useState('');
    const [progress, setProgress]= useState(0)



    const handleChange=(event)=>{
        if(event.target.files[0]){
            setImage(event.target.files[0]);
            
        }
    }

    const handleUpload=(event)=>{
        event.preventDefault();
            setProgress(0);
            setCaption('');
            setImage(null);
            setOpen(false)
        }


    return (
        <div className="screen_page upload_background">
            <div className="screen_card upload_card">
                <form action="">
                    <div className="upload_image">
                        {image && <img src={URL.createObjectURL(image)} alt=""/>}
                    </div>
                    <input className="input input_caption" type="text" placeholder="caption" value={caption} onChange={(event)=> setCaption(event.target.value)}/>
                    <progress value={progress} max="100"/>
                    <input className="input input_file" type="file" onChange={handleChange}/>
                    <button disabled={progress} className="button button_upload" onClick={handleUpload}>Upload</button>
                </form>
            </div>
            
        </div>
    )
}

export default UploadScreen
