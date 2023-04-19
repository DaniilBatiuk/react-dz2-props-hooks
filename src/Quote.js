import React from 'react';
export default class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Quote: props.DayQuote,
            Author: props.QuoteAuthor
        };
    }
    render(){
        return <div style={this.props.style}>
            <div>{this.state.Quote}</div>
            <div>{this.state.Author}</div>
        </div>
    }
}
Quote.defaultProps={
    DayQuote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    QuoteAuthor: "Lorem Bot"
}