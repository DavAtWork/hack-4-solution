import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Link } from "react-router-dom";
import Loading from "./Loading.jsx";
import {KEYS} from "/keys.js";

export default function User() {
    const { username } = useParams();
    const [userInfo, setUserInfo] = useState({})
    const [userImages, setuserImages] = useState([])
    let [isloading, setisLoading] = useState(false);

    const api_key = KEYS.UNSPLASH_API_KEY;


    const fetchUserInfo = async () => {
        setisLoading(true);
        const response = await fetch(`https://api.unsplash.com/users/${username}?client_id=${api_key}`);
        const data = await response.json();
        setUserInfo(data);
    };
    const fetchuserImages = async () => {
        const response = await fetch(`https://api.unsplash.com/users/${username}/photos?per_page=12&client_id=${api_key}`);
        const data = await response.json();
        console.log(data);
        setuserImages(data);
        setisLoading(false);
    };

    useEffect(() => {
        fetchUserInfo();
        fetchuserImages();
    }
        ,[username])


    return (
        isloading !== true ?
            userInfo.profile_image?(
            <div>
                <div className="UserInfo">
                    <h3>{userInfo.name}</h3>
                    <img src={userInfo.profile_image.large}  alt="Profile Image"/>
                    <p>Downloads: {userInfo.downloads}</p>
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
        : <Loading/>
    )
}