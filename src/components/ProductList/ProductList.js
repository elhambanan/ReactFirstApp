import React, { Component } from 'react';
import Product from '../Product/Product';

class ProductList extends Component {
    state = { 
         products : [
        {title: "react.js", price: "99 $"},
        {title: "node.js", price: "78 $"},
        {title: "veu.js", price: "45 $"},
    ], 
};
    render() { 
        return (
            <div>
               {this.state.products.map((p, index) => {
               return (
                <Product
                    name = {p.title}
                    price = {p.price}
                    key = {index}
                    // click = {this.clickHandler.bind(this, "newTilte")}
                    click = {() => this.clickHandler("newTilte")}
                />
    )
})}
            </div>
        );
    }
}
 
export default ProductList;





