import React from 'react';


export default function GuessUsed(props) {
    const {guesses} = props
    console.log(guesses);
    const guessesUsed = guesses.map(guess => (
            <li>{guess}</li>
    ));

    return (
        <ul>
            {guessesUsed}
        </ul>
    )
}