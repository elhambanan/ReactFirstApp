import { useReducer, useState } from "react";

const HookObject = () => {
    const [user, setUser] = useState({firstName: "", lastName:""});
    const changeFnameHandler = (e)=>{
        setUser({...user, firstName : e.target.value})
    }
    const changeLnameHandler = (e) => {
        setUser({...user, lastName : e.target.value})
    }
    return ( 
        <form>
            <h1>state : Object type</h1>
            <input type="text" value={user.firstName} onChange={changeFnameHandler} />
            <h2>first name is: {user.firstName}</h2>

            <input type="text" value={user.lastName} onChange={changeLnameHandler} />
            <h2>last name is: {user.lastName}</h2>
            <div>{JSON.stringify(user)}</div>
        </form>
     );
}
 
export default HookObject;