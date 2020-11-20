import React, {Component} from 'react'
import './new.css'

export default class New extends Component {
    state = {
        label: ''
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.onAddItem(this.state.label)
        this.setState({
            label: ''
        })
    }
    render() {
        return (
            <form className='new'
            onSubmit={this.onSubmit}
            >
                <input type="text"
                       className="form-control"
                       placeholder="What do you want to do"
                       onChange={this.onLabelChange}
                       value={this.state.label}
                />
                <button className='btn btn-outline-secondary'
                >
                    Add
                </button>
            </form>
        )
    }
}