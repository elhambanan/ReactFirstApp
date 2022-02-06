import { Component, useState } from "react";
import HookCounter from "./components/HookCounter";
import ClassCounter from "./components/ClassCounter";
import HookObject from "./components/HookObject";
import HookArray from "./components/hookArray";
import ProductList from "./components/ProductList/ProductList";

import "./App.css"

// component : function(sfc), class
// props : (attribute, children, event)
// state :  

// functional component(sfc)
// const App = ()=>{
//     return(
//       <div className='container' id='title'>
//           <h1>functional component</h1>
//           <Products name ="A" price="10"/>
//           <Products name ="B" price="20"/>
//           <Products name ="C" price="30">
//             <p>discount is 15%</p>
//           </Products>
//       </div>  
//     );
// };

// class component: 
class App extends Component {
    state = {
        count: 0,
    };
    // this is undefind then we use callback function:
    clickHandler = (newTilte) => {
        // setState({}) => to update states
        // this.setState({
        //     products : [
        //         {title: "A", price: "99 $"},
        //         {title: newTilte , price: "78 $"},
        //         {title: "C", price: "45 $"},
        //     ],
        // })
    };

    // this source:
    // obj.method() => object
    // function() => window

    // constructor(props) {
    //     super(props);
    //     this.countHandler = this.countHandler.bind(this);
    //     console.log("constructor", this);
    // }

    countHandler= (id)=>{
        console.log(this.state.count)
        // this.state.count++;     false: mutate the state
        this.setState({count: this.state.count+1})
    };

    render() {
        return (
            <div className='container' id='title'>
                <h1>class component</h1>
                <ProductList/>
                {/* <button onClick={this.clickHandler} className="product">change price</button> 
                <button onClick={() => this.countHandler(2)}>
                    count:{this.state.count}
                </button> */}

              
            </div> 
        )
    };
};

// statefull fc:
// const App = () => {
//     const [products, setProducts] = useState( [
//         {title: "A", price: "0 $"},
//         {title: "B", price: "0 $"},
//         {title: "C", price: "0 $"},
//     ]);
//     const clickHandler = () => {
//         setProducts([
//             {title: "react.js", price: "99 $"},
//             {title: "node.js", price: "78 $"},
//             {title: "veu.js", price: "45 $"},
//         ]);
//     };
//     return (
//         <div className='container' id='title'>
//             <h1>class component</h1>
//             {products.map((p) => {
//                 return (
//                     <Products
//                         name = {p.title}
//                         price = {p.price}
//                     />
//                 )
//             })}
//             <button onClick={clickHandler}>change price</button> 
//             {/* <HookCounter/>
//             <ClassCounter/>
//             <HookObject/>
//             <HookArray/> */}

//         </div> 
        
      


//     )

// }
 
// 16.8 (2018 ) => React Hooks =>   state + lifeCycle => functional Component

// sfc : stateless functional component
//     : stateFull fc

export default App ;

// default export : only 1 
// named export 

export const userName = "mine";
export const appName = "react"
