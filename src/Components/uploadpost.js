import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './uploadpost.css'
// import { Card } from "@mui/material";


const Uploads = () => {
    const [user, setUser] = useState({
        author: '',
        location: '',
        description: ''
    });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        const image = e.target.elements.userFile.files[0];
        formData.append('image', image);
        formData.append('author', user.author);
        formData.append('location', user.location);
        formData.append('description', user.description);
        try {
            const response = await axios.post(
                'https://instaclone-backend-app.herokuapp.com/api/v1/post',
                // ' https://instaclone-server-app.herokuapp.com',
                formData
            );
            navigate('/Postview');
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            {/* <div className='form-wrapper'> */}
                
                {/* <Card className='form'> */}
                    <form id="#main-div" onSubmit={handleSubmit}>
                        <div className='filea'>
                            <input type="file" placeholder="No file chosen" name="userFile"
                                required />
                        </div>
                        <div className='author'>
                            <input type="text" placeholder="Author" value={user.author}
                                onChange={(e) => setUser({ ...user, author: e.target.value })}
                                required />
                            <input type="text" placeholder="Location" value={user.location}
                                onChange={(e) => setUser({ ...user, location: e.target.value })}
                                required />
                        </div>
                        <div className='description'>
                            <input class="description"type="text" placeholder="Description" value={user.description}
                                onChange={(e) => setUser({ ...user, description: e.target.value })}
                            />
                        </div>
                        <div className='post'>
                            <button id="form-btn" type='submit'>Post</button>
                        </div>
                    </form>
                {/* </Card> */}
            {/* </div> */}
        </>
    );
}
export default Uploads;