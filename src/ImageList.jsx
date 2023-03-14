import { useState, useEffect } from "react";
import {Link } from "react-router-dom";

export default function ArticleList(){
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const api_key = '34k0v7zAAU1jHWUJ4ZIiyZQClidhjXNxZawR-8QNZaI'

    useEffect(() => {
      const fetchArticleList = async () => {        
        const response = await fetch(
            `api.unsplash.com/search/photos?query=${query}&page=${page}client_id=${api_key}`
        );
        const data = await response.json();
        setImageList(data);
      };
      fetchArticleList();
    }, [page]);

    return(
        <div>
            <h2>Image list</h2>
            <ul>
                {imageList.map((image) => (
                <li key={image.id}>
                    <Link to={`/users/${image.id}`}>{image.user.links.photos}</Link>
                </li>
                ))}
            </ul>
            <button onClick={()=> setPage(page-1)}>Previous</button>
            <button onClick={()=> setPage(page+1)}>Next</button>
        </div>
    )
}