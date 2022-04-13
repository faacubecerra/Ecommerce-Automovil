import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncmock"
import Item from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const getItem = async () => {
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone') 
        const data = await response.json()

        new Promise (resolve => {
            setTimeout(() => {
                return resolve(setProducts(data.results))
            }, 2000)
        })
    }

    useEffect(()=>{
        getItem()
    }, [])


    return(
        <div>
            {products.map(elem => <ItemDetail title={elem.title} description={'lorem impsum'} img={elem.thumbnail} price={elem.price} id={elem.id}/>)}
        </div>
    )
    
}

export default ItemListContainer