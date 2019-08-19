import React, { Component } from 'react';

class SearchGif extends Component {
    constructor(){
        super();
        this.state = { 
            term: '' 
        }
    }

    handleChange(term) {
        this.setState({term});
        this.props.onChange(term);
    }

    render() {
        return(
            <div class="search">
                <input onChange={e => this.handleChange(e.target.value)} />
            </div>
        )
    }
}

export default SearchGif

