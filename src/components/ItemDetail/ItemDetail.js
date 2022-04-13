import { useParams } from "react-router"


const ItemDetail = ({ title, img, description, price,}) =>{
    const { id } = useParams()

    return(
        <>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <h1>HOLAAA</h1>
            <h3>{title}</h3>
            <h4> {description} </h4>
            <h4>${price}</h4>
            <h5>{id}</h5>
        </>
    )
}

export default ItemDetail