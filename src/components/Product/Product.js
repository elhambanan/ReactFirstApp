// import "./product.css"
import style from "./product.module.css"
import { BiTrash } from "react-icons/bi";

const Product = (props ) => {
    // console.log(props)
    return(
        <div className={style.product} onClick={props.click}>
            <p>product name: {props.products.title} </p>
            <p>product price: {props.products.price} </p>
            <span className={style.value} >
                {props.products.quantity}
            </span>
            <input type="text" className={style.input}
                    onChange={props.onChange}
                    value={props.products.title}/>
            <button 
                    className={`
                    ${style.btn} 
                    ${props.products.quantity === 1 &&style.remove}`}
                    onClick={props.onDecreament}>
                    {props.products.quantity>1 ? "-" : <BiTrash/>}
            </button>        
            <button 
                    className={`${style.btn} ${style.inc}`}
                    onClick={props.onIncreament}>
                    +
            </button>
           
            <button 
                    className={style.btn} 
                    onClick={props.onDelete}>
                    delete
            </button>
        </div>
    )
}
export default Product