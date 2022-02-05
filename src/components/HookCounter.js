import { useState } from "react";

const HookCounter = () => {
    const [count, setCount] = useState(0);
    const addOneHandler = () =>{
       setCount(count + 1 )
    }
    const addTwoHandler = () =>{
        setCount(count + 2 )
    }
    const addThreeHandler = () => {
        // setCount(count + 5)
        for( let i=0; i<5; i++) {
            setCount( count => count + 1)
        }
    }
    return ( 
        <div>
            <h2>counter:{count}</h2>
            <button onClick={addOneHandler}>count 1 up</button>
            <button onClick={addTwoHandler}>count 2 up</button>
            <button onClick={addThreeHandler}>count 5 up</button>
        </div>
     );
}
 
export default HookCounter;