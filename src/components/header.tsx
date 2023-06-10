'use client'
import React from "react";
import ReactDOM from 'react-dom'

import { useTheme } from 'next-themes'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import useColorMode from "../../hooks/useColorMode";

export default function Header() {
    const [ colorMode, setColorMode ] = useColorMode( )

    return (
        <header className="bottom-0 flex lg:fixed lg:justify-around lg:p-5 border-t-[.2px] border-white/[.4]">
            <a href="/">
                <img className="lg:h-5" src="/images/logo-light.png" alt="Logo" />
            </a>
            <ul className="flex">
                <li className="px-5"><a href="/">Home</a></li>
                <li className="px-5"><a href="">Projects</a></li>
                <li className="px-5"><a href="">About</a></li>
                <li className="px-5"><a href="">Contact</a></li>
            </ul>
            <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                <FontAwesomeIcon icon={faMoon} className="dark:text-white h-5" />
            </button>
        </header>
    )
}