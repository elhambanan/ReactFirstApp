import React, { Component } from 'react';
import Product from '../Product/Product';

class ProductList extends Component {
    state = { 
         products : [
        {title: "react.js", price: "99 $", id: 1, quantity: 1},
        {title: "node.js", price: "78 $", id: 2, quantity: 3},
        {title: "veu.js", price: "45 $", id: 3, quantity: 5},
        ], 
    };
    // state => Handler
    removeHandler = (id)=>{
        console.log("remove", id);
        const filteredProducts = this.state.products.filter((p) => p.id !== id);
        this.setState({products : filteredProducts})
    }
    render() { 
        return (
            <div>
               {this.state.products.map((p, index) => {
               return (
                <Product
                    // name = {p.title}
                    // price = {p.price}
                    // quantity = {p.quantity}
                    // key = {p.id}
                    products = {p}
                    onDelete = {() => this.removeHandler(p.id)}
                    // click = {this.clickHandler.bind(this, "newTilte")}
                    // click = {() => this.clickHandler("newTilte")}
                />
                )
              })}
            </div>
        );
    }
}
 
export default ProductList;





