const Products = (props ) => {
    console.log(props)
    return(
        <div>
            <p>product name: {props.name} </p>
            <p>product price: {props.price} </p>
            {props.children}
        </div>
    )
}
export default Products