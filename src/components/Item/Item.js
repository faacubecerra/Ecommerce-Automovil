import {Link} from "react-router-dom"

const Item = ({ title, img, id}) =>{
    return(
        <>
            <Link to= {`/category/${id}`}>
            <button>VER DETALLE DE PRODUCTO</button>
            </Link>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <h3>{title}</h3>
        </>
    )
}

export default Item