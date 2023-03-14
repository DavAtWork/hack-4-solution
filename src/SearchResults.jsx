import { useState, useEffect } from "react";
import {Link} from "react-router-dom";


export default function SearchResults({ imageList, page, setPage }) {

    return (
        <>
        <ul id="images">
            {imageList.map((image) => (
                <li key={image.id} >
                    {/* <Link to={''}>{image.user.links.photos}</Link> */}
                    <img src={ image.urls.regular+"&fit=crop&w=300&h=300" } alt="" />
                    <Link to={`/user/${image.user.username}`}>{image.user.username}</Link>
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