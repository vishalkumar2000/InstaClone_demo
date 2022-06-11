import React from 'react';
import { useState ,useEffect} from 'react';
import Post from './Post/Post';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import RadarIcon from '@mui/icons-material/Radar';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import uploadpost from './upload-post/uploadpost';

const Postview=()=> {
const [posts,setPosts]=useState([]);
const setPostsAsync=async()=> {
  axios.get(REACT_APP_FRONTEND + "api/v1/post")
  .then(response =>{
    console.log("Server",response.data)

    setPosts(response.data)
    
  // data=await response.json();
  // setPosts(data);
  })

};
useEffect(()=>{
  setPostsAsync();
},[]);
  return (
    <div>
    <div className='header-container'>
        <div className='left-title' ><span><RadarIcon/></span>Instaclone</div>
        
        <Link to="/Postview/uploadpost">
          <div className='right-title'><PhotoCameraIcon/></div>
        </Link>
      
    </div>
    <div className="Postview">
      {posts.map((post,index)=>(
          <Post key={index} post={post}/>
      ))}
    </div>
    </div>
  );
};
export default Postview;
