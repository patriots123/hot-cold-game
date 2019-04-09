import React from 'react';

export default class GuessForm extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            guess: ""
        }
    }
    onSubmit(event) {
        event.preventDefault();
        this.props.onGuess(this.state.guess);
        this.setState({guess:""});

    }
    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                <input type="number" placeholder="Enter Your Guess" required value={this.state.guess} onChange={e=>this.setState({guess:e.target.value})}/>
                <button type="submit" value="Guess"/>
            </form>
        )
    }
}