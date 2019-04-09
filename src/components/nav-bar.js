import React from 'react';


export default function NavBar(props) {
    return (
        <nav>
            <a href="#" onClick={(e)=>props.onResetGame(e)}>Reset Game</a>
        </nav>
    )
}