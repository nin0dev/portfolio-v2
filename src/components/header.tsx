import React from "react";
import ReactDOM from 'react-dom'

export default function Header() {
    return (
        <header className="sticky bottom-0 flex justify-around">
            <img src="" alt="Logo" />
            <ul className="flex">
                <li className="px-5"><a href="">Home</a></li>
                <li className="px-5"><a href="">Projects</a></li>
                <li className="px-5"><a href="">About</a></li>
                <li className="px-5"><a href="">Contact</a></li>
            </ul>
            <button>
                
            </button>
        </header>
    )
}