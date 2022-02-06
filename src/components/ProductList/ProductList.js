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
    incHandler = (id) => {
        const products = this.state.products //clone => not mutate state

        const selectedItem = products.find(p => p.id === id);
        selectedItem.quantity++;
        this.setState({products: products}) 
    }
    decHandler = (id) => {
        const products = this.state.products //clone => not mutate state

        const selectedItem = products.find(p => p.id === id);
        if(selectedItem.quantity === 1) {
            const filteredProducts = products.filter((p) => p.id !== id);
            this.setState({products: filteredProducts})
            console.log(id, filteredProducts)
        }else { 
            selectedItem.quantity--;
            this.setState({products: products}) }
    }
    changeHandler = (e, id) => {
        const products = this.state.products;
        
        const selectedItem = products.find( p => p.id === id);
        selectedItem.title = e.target.value;

        this.setState({products : products})
    }
    renderProduct = ()=> {
        if(this.state.products.length === 0)
            return <div>there is no Product</div>
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
                    onIncreament = {() => this.incHandler(p.id)}
                    onDecreament = {() => this.decHandler(p.id)}
                    onChange = {(e) => this.changeHandler(e, p.id)}
                    // click = {this.clickHandler.bind(this, "newTilte")}
                    // click = {() => this.clickHandler("newTilte")}
                />
                )
                })}
            </div>
        );    
    }
    render() { 
        return (
            <div>
                {!this.state.products.length 
                ?(<div>go to Shopping</div> )
                :(null )
                }
                {this.renderProduct()}
            </div>
        )
            
    }
}
 
export default ProductList;





