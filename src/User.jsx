import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link } from "react-router-dom";


export default function User() {
    const { username } = useParams();
    const [userInfo, setUserInfo] = useState({})
    const [userImages, setuserImages] = useState([])
    let [loading, setLoading] = useState(true)

    const api_key = '34k0v7zAAU1jHWUJ4ZIiyZQClidhjXNxZawR-8QNZaI'


    const fetchUserInfo = async () => {
        const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${api_key}`);
        const data = await response.json();
        setUserInfo(data);
    };
    const fetchuserImages = async () => {
        const response = await fetch(`https://api.unsplash.com/users/${username}/photos?client_id=${api_key}`);
        const data = await response.json();
        console.log(data);

        setuserImages(data);
    };

    useEffect(() => {
        fetchUserInfo();
        fetchuserImages();
        setLoading = false
    }
        ,[username])


    return (
        loading?(
            userInfo.profile_image?(
            <div>
                <div className="UserInfo">
                    <h3>{userInfo.name}</h3>
                    <img src={userInfo.profile_image.large} />
                    <p>Total likes: {userInfo.total_likes}</p>
                    <p>Followers: {userInfo.followers_count}</p>
                    <p>{userInfo.bio}</p>
                </div>
                <ul className="UserPhotos">
                    {userImages.map((image) => (
                        <li key={image.id} >
                            <Link to={`/images/${image.id}`}><img src={image.urls.raw + "&fit=crop&w=300&h=300"} alt={image.alt_description} /></Link>
                        </li>
                    ))}
                </ul>
            </div>)
            :null
        ):
        <div className='preload'></div>                

    )
}