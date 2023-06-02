import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar.jsx'
import SearchResults from './SearchResults.jsx'
import Loading from "./Loading.jsx";
import {KEYS} from '/keys.js'

export default function HomePage() {
    const [imageList, setImageList] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setSearchQuery] = useState('');
    let [isloading, setisLoading] = useState(false);


    const api_key = KEYS.UNSPLASH_API_KEY;

    const fetchImageList = async () => {
        setisLoading(true);
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${api_key}`);
        const data = await response.json();
        setImageList(data.results);
        setisLoading(false);
    };
    useEffect(() => {
        fetchImageList();
    }, [page, query]);

    return (
        <>
            <h1>React Image Search</h1>
            <SearchBar setSearchQuery={setSearchQuery}/>
            {isloading !== true ?
                imageList.length!== 0 ?
                    <SearchResults imageList={imageList} page={page} setPage={setPage}/>
                    :null
                : <Loading/>
            }
        </>
    )
}

