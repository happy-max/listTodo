import React, {Component} from 'react'
import './filter.css'

export default class Filter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]

    render() {
        const {nameFilter, onFilterChange} = this.props
        const buttons = this.buttons.map(({name, label}) => {
            const activeFilter = nameFilter === name
            const clazz = activeFilter ? 'btn-info': 'btn-outline-secondary'
            return(
                <button
                type='button'
                className={`btn ${clazz}`}
                key={name}
                onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            )
        })

        return (
            <div className='btn-group'>
                {buttons}
            </div>
        )
    }
}