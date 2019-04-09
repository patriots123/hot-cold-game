import React from 'react';

import GuessForm from './guess-form';
import GuessIndicator from './guess-indicator';
import GuessUsed from './guess-used';
import GuessCounter from './guess-counter';

export default function GuessSection(props) {
    const {message, guesses} = props;
    return(
        <section>
            <GuessIndicator message={message}/>
            <GuessForm onGuess={guess => props.onGuess(guess)}/>
            <GuessCounter guesses={guesses}/>
            <GuessUsed guesses={guesses}/>
        </section>
    )
}