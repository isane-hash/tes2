import React from 'react';
import './App.css';
import listItems from './listItems'

class App extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }

        this.handleInput = this.handleInput.bind(this);

        this.additem = this.additem.bind(this);
    }

    handleInput(e) {
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if (newItem.text === "") {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem: {
                    text: '',
                    key: ''
                }
            })

        }

    }

    render() {
        return ( <
            div className = 'App' >
            <
            hearder >
            <
            form id = "to-do-form" >
            <
            input type = "text"
            placeholder = "Enter text"
            value = { this.state.currentItem.text }
            onChange = { this.handleInput }
            /> <
            button type = "submit" > Add < /button>

            <
            /form> </hearder >
            <
            listitems items = { this.state.items } > < /listitems> < /
            div >
        );
    }

}

export default App;