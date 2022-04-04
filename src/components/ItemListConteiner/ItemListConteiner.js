import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {

    return(
        <div>
        <h1>{props.greeting}</h1>
        <ItemCount stock = {10} initial = {1}/>
        </div>
    )
    
}

export default ItemListContainer