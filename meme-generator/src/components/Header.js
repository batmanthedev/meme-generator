import React from 'react';
import logo from '../img/logo.png';

export default function Header()
{
    return (
        <header>
            <img src={logo} alt='le meme generator logo'/>
            <h2>le Meme Generator</h2>
        </header>
    )
}