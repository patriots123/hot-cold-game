import React from 'react';

export default function GuessCounter(props) {
    let {guesses} = props
    let guessCount = guesses.length
    return(
        <div>{guessCount}</div>
    )
}