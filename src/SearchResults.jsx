import {Link} from "react-router-dom";


export default function SearchResults({ imageList, page, setPage }) {

    return (
        <>
        <ul id="images">
            {imageList.map((image) => (
                <li key={image.id} >
                    <Link to={`/images/${image.id}`}><img src={image.urls.raw + "&fit=crop&w=300&h=300"} alt={image.alt_description} /></Link>
                    <Link to={`/users/${image.user.username}`}>{image.user.name}</Link>
                </li>
            ))}
        </ul>
        <div>
            {page != 1 ?
                <button onClick={() => setPage(page - 1)}>Previous</button>
                : null
            }
            <button onClick={() => setPage(page + 1)}>Next</button>

        </div>
    </>
    )
}