import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


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
        <>
            <img src={image.urls.regular} alt={image.description} />
        </>
        :null
      )
}