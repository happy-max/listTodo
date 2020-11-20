import React, {Component} from 'react'
import './app.css'
import Header from '../header/Header'
import Search from "../search/Search"
import Filter from "../filter/Filter"
import List from "../list/List"
import New from "../new/New"

export default class App extends Component {

    maxId = 1000

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Have a nice day'),
            this.createTodoItem('Write an article')
        ],
        term: '',
        nameFilter: 'all'
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    addItem = (text) => {
        const newItem = this.createTodoItem(text)
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ]
            return {todoData: newArr}
        })
    }

    onDeleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id)
            const newArr = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArr
            }
        })
    }

    onToggleProperty(arr, id, prop) {
        const idx = arr.findIndex((el) => el.id === id)
        const oldItem = arr[idx]
        const newItem = {
            ...oldItem,
            [prop]: !oldItem[prop]
        }
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'done')
            }
        })
    }
    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {
                todoData: this.onToggleProperty(todoData, id, 'important')
            }
        })
    }
    onChangeSearch = (term) => {
        this.setState({term})
    }

    search(items, term) {
        if (term.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    }

    onFilterChange = (nameFilter) => {
        this.setState({nameFilter})
    }

    filter(items, nameFilter) {
        switch (nameFilter) {
            case 'all':
                return items
            case 'active':
                return items.filter((item) => !item.done)
            case 'done':
                return items.filter((item) => item.done)
            default:
                return items
        }
    }

    render() {
        const {todoData, term, nameFilter} = this.state
        const done = todoData.filter(el => el.done).length
        const active = todoData.length - done
        const visibleItems = this.filter(this.search(todoData, term), nameFilter)
        return (
            <div className='app'>
                <Header
                    done={done}
                    active={active}
                />
                <div className='search-filter'>
                    <Search
                        onChangeSearch={this.onChangeSearch}
                    />
                    <Filter
                        onFilterChange={this.onFilterChange}
                        nameFilter={nameFilter}
                    />
                </div>
                <List
                    todos={visibleItems}
                    onDeleteItem={this.onDeleteItem}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />
                <New
                    onAddItem={this.addItem}
                />
            </div>
        )
    }
}