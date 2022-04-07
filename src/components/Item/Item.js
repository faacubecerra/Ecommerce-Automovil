const Item = ({ title, img}) =>{
    return(
        <>
            <picture>
                <img src={img} alt={title} />
            </picture>
            <h3>{title}</h3>
            <button>VER DETALLE DE PRODUCTO</button>
        </>
    )
}

export default Item