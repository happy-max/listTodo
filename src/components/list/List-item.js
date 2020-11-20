import React, {Component} from 'react'
import './list.css'


export default class ListItem extends Component {

    render() {
        const {label, onDeleteItem,
            onToggleDone, onToggleImportant, done, important} = this.props

        let className = 'list-item'

        if (done) { className += ' done' }
        if (important) { className += ' important' }

        return (
            <span className={className}>
        <span className='list-group-item-label'
              onClick={onToggleDone}

        >{label}</span>

             <button type="button"
                     className="btn btn-outline-success btn-sm float-right"
                     onClick={onToggleImportant}
             >
                    <i className="fa fa-exclamation"/>
                </button>

                <button type="button"
                        className="btn btn-outline-danger btn-sm float-right"
                        onClick={onDeleteItem}
                >
                    <i className="fa fa-trash-o"/>
                </button>
        </span>
        )
    }


}


