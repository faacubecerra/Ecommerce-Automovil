import { useState, useEffect } from "react"

const MLListConteiner = () => {
    const[products, setProducts] = useState([])
        useEffect(() =>{
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=iphone').then(response => {
                console.log(response.json())
            })
            .then(res => {
                console.log(res.results)
            })
        }, [])

    return(
        <h1>holaaa</h1>
    )
}

export default MLListConteiner