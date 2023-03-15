import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

export default function HomePage() {
  const [imageList, setImageList] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setSearchQuery] = useState('')
  
  const api_key = '34k0v7zAAU1jHWUJ4ZIiyZQClidhjXNxZawR-8QNZaI'

  const fetchImageList = async () => {    
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=${api_key}`);
    const data = await response.json();
    setImageList(data.results);
  };
  useEffect(() => {
    fetchImageList();
  }, [page, query]);
  return (
    
     <>
 

  
    
      <h1>React Image Search</h1>
      <SearchBar setSearchQuery={setSearchQuery}/>

      {imageList.length!= 0?
      <SearchResults imageList={imageList} page={page} setPage={setPage} />
        :null
      }
    </> 
  )
}

