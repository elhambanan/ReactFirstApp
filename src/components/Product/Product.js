// import "./product.css"
import style from "./product.module.css"

const Product = (props ) => {
    console.log(props)
    return(
        <div className={style.product} onClick={props.click}>
            <p>product name: {props.products.name} </p>
            <p>product price: {props.products.price} </p>
            <button className={style.product}>increament</button>
            <span>{props.products.quantity}</span>
            <button onClick={props.products.onDelete}>delete</button>
        </div>
    )
}
export default Product