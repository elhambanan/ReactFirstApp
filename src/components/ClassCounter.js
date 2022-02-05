import React, { Component } from 'react';
class ClassCounter extends Component {
    state = { count: 0 } 
    addTenHandler = () =>{
        console.log("ten")
        this.setState({count: this.state.count+10})
    };
    // when state depend on previouse state: use callback function
    addTwentyHandler = () => {
        this.setState ((prevState) =>{
            return {count : prevState.count+20 };
        });
    };
    render() { 
        return (
            <div>
            <h2>counter:{this.state.count}</h2>
            <button onClick={this.addTenHandler}>count 10 up</button>
            <button onClick={this.addTwentyHandler}>count 20 up</button>
            <button onClick={this.addFiftyHandler}>count 50 up</button>
        </div>
        );
    }
}
 
export default ClassCounter;