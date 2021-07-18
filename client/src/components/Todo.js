import React, { Component } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import './Style.css';

import GroceryService from '../actions/GroceryService';
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groceries: this.props.groceries
        }
        this.deleteGrocery = this.deleteGrocery.bind(this);
        this.editGrocery = this.editGrocery.bind(this);
    }

    allGroceries() {
        GroceryService.getGroceries().then((res) => {
            this.setState({ groceries: res.data });
        });
    }

    // addGroceryItem(event){
    //     addItem={
    //         groc
    //     }
    // }

    deleteGrocery(id) {
        GroceryService.deleteGrocery(id).then(res => {
            // this.setState({ groceries: this.state.groceries.filter(grocery => grocery.id !== id) });
            alert("grocery item deleted");
            this.allGroceries();
        });
    }

    editGrocery(grocery) {
        const newGrocery = {
            ...grocery,
            isPurchased: true
        }
        console.log(newGrocery);
        GroceryService.updateGrocery(newGrocery._id, newGrocery).then(res => {
            alert("grocery item updated sucessfully");
            this.allGroceries();
        });
    }

    render() {
        const groceriesList = this.state.groceries.map((grocery) => {
            return (
                <div className="container1" key={grocery.id}>
                    <ListGroup className="list">
                        <ListGroup.Item style={{ textDecoration: grocery.isPurchased ? "line-through" : "" }}>{grocery.groceryItem}
                            <Button variant="light" onClick={() => { this.deleteGrocery(grocery._id) }}><i class="fas fa-trash"></i></Button>
                            <Button variant="light" onClick={() => { this.editGrocery(grocery) }}><b>Purchased</b></Button>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            );
        })
        return (
            <div>
                {/* <input className="list" type="text" placeholder="Add Shopping Item" onKeyPress={this.addGroceryItem()} /> */}
                <input className="list" type="text" placeholder="Add Shopping Item" />
                {groceriesList}
            </div>
        )
    }
}


export default Todo;