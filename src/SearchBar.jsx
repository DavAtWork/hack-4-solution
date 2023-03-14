import { useEffect, useState } from 'react';


export default function SearchBar({setSearchQuery}){
    const [inputValue, setInputValue] = useState()

    const handleInput = (e) => {
        e.preventDefault()
        setInputValue(e.target.value)
    }

    return (
        <div className="SearchBar">
            <form>
                <input name={'searchQuery'} type={'text'} onChange={handleInput}/>
                <button type='button' onClick={() => setSearchQuery(inputValue)} >Search</button>
            </form>
        </div>
      );
}
