import { Component, useState } from "react";
import HookCounter from "./components/HookCounter";
import Products from "./components/products/Products";
import ClassCounter from "./components/ClassCounter";

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
// class App extends Component {
//     state = {
//         products : [
//             {title: "react.js", price: "99 $"},
//             {title: "node.js", price: "78 $"},
//             {title: "veu.js", price: "45 $"},
//         ],
//     };
//     clickHandler = () => {
//         // setState({}) => to update states
//         this.setState({
//             products : [
//                 {title: "A", price: "99 $"},
//                 {title: "B", price: "78 $"},
//                 {title: "C", price: "45 $"},
//             ],
//         })

//     };

//     render() {
//         return (
//             <div className='container' id='title'>
//                 <h1>class component</h1>
//                 {this.state.products.map((p) => {
//                     return (
//                         <Products
//                             name = {p.title}
//                             price = {p.price}
//                         />
//                     )
//                 })}
//                 <button onClick={this.clickHandler}>change price</button> 
                    // clickHandler is method
              
//             </div> 
//         )
//     };
// };

// statefull fc:
const App = () => {
    const [products, setProducts] = useState( [
        {title: "A", price: "0 $"},
        {title: "B", price: "0 $"},
        {title: "C", price: "0 $"},
    ]);
    const clickHandler = () => {
        setProducts([
            {title: "react.js", price: "99 $"},
            {title: "node.js", price: "78 $"},
            {title: "veu.js", price: "45 $"},
        ]);
    };
    return (
        <div className='container' id='title'>
            <h1>class component</h1>
            {/* {products.map((p) => {
                return (
                    <Products
                        name = {p.title}
                        price = {p.price}
                    />
                )
            })}
            <button onClick={clickHandler}>change price</button> 
            <HookCounter/> */}
            <ClassCounter/>

        </div> 
        
      


    )

}
 
// 16.8 (2018 ) => React Hooks =>   state + lifeCycle => functional Component

// sfc : stateless functional component
//     : stateFull fc

export default App ;

// default export : only 1 
// named export 

export const userName = "mine";
export const appName = "react"
