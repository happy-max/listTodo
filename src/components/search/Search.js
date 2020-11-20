import React, {Component} from 'react'
import './search.css'


export default class Search extends Component {
    state ={
        term: ''
    }
    onChangeSearch=(e) => {
       const term = e.target.value
        this.setState({term})
        this.props.onChangeSearch(term)
    }

    render() {
        return (
            <div className='search'>
                <input type="text"
                className='form-control'
                placeholder='Type to search'
                value={this.state.term}
                       onChange={this.onChangeSearch}
                />
            </div>

        )
    }
}



