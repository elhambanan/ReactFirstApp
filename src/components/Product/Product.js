// import "./product.css"
import style from "./product.module.css"

const Product = (props ) => {
    // console.log(props)
    return(
        <div className={style.product} onClick={props.click}>
            <p>product name: {props.name} </p>
            <p>product price: {props.price} </p>
            {props.children}
        </div>
    )
}
export default Product