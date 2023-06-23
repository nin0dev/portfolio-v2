'use client'
import React from "react";
import ReactDOM from 'react-dom'

import { useTheme } from 'next-themes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import useColorMode from "../../hooks/useColorMode";

export default function Header() {
    const [ colorMode, setColorMode ] = useColorMode()

    return (
        <header className="bg-white bottom-0 right-0 left-0 flex fixed justify-around py-5 z-50">
            <a href="/">
                <img className="h-5" src="/images/logo-light.png" alt="Logo" />
            </a>
            <ul className="flex">
                <li className="px-5 font-light"><a href="/">Home</a></li>
                <li className="px-5 font-light"><a href="">Projects</a></li>
                <li className="px-5 font-light"><a href="">About</a></li>
                <li className="px-5 font-light"><a href="">Contact</a></li>
            </ul>
            <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                <FontAwesomeIcon icon={faMoon} className="dark:text-white h-5" />
            </button>
        </header>
    )
}