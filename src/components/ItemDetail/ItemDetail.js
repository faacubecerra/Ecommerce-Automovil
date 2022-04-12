

const ItemDetail = ({ title, img, description, price}) =>{
    return(
        <>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <h3>{title}</h3>
            <h4> {description} </h4>
            <h4>${price}</h4>
        </>
    )
}

export default ItemDetail