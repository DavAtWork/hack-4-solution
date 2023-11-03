import { useState } from 'react';
import { Link } from 'react-router-dom';

export function SearchBar({ perPage, setPerPage }){
    const [inputValue, setInputValue] = useState()

    const handleInput = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    const updatePerPage = () => {
        const per_page = document.getElementById('per-page').value
        setPerPage(per_page)
    }

    return (
        <div className="SearchBar">
            <input name='searchQuery' type='search' onChange={handleInput}/>
            <Link to={`/search/${inputValue}`}><button type='submit'>Search</button></Link>
        
            <div className="per-page">
                <label htmlFor="per-page">Images per page: </label>
                <select className="per-page-select" name="per-page" id="per-page" defaultValue={perPage}
                    onChange={updatePerPage}>
                    {Array.from({length: 21}, (_, index) => (
                        <option key={index + 4} value={index + 4}>
                            {index + 4}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
