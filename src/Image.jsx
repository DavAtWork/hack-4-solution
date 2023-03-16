import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";



export default function Image(){
    const api_key = '34k0v7zAAU1jHWUJ4ZIiyZQClidhjXNxZawR-8QNZaI'
    const { image_id } = useParams();
    const [image, setImage] = useState('')

    const fetchImage = async () => {        
      const response = await fetch(
          `https://api.unsplash.com/photos/${image_id}?client_id=${api_key}`
      );
      const data = await response.json();
      console.log(data);
      setImage(data);
    };
    useEffect(() => {
        fetchImage();
      }, [image_id]);

      return(
        image?
        <div className="imageContainer">
            <img src={image.urls.regular} alt={image.description} />
            <div className="imageDetails">
              <p>Captured with: {image.exif.name}</p>
              <p>{image.description? image.description: 'This image has no description'}</p>
              <p>Downloads: {image.downloads}</p>
              <p>Location: {(image.location.city || image.location.country)? image.location.city +', '+ image.location.country : 'Unknown'}</p>
              <p>Author: <Link to={`/users/${image.user.username}`}>{image.user.name}</Link></p>
            </div>
            
        </div>
        :null
      )
}