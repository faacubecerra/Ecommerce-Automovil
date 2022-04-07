import logohonda from '../src/images/HondaCivic2.png'
import logobmw from '../src/images/bmw e30.png'
const products = [
    {
        id: 1 ,
        title: 'Honda Civic' ,
        description: 'EK 9 Año 1999' ,
        price: 7700,
        img: logohonda,
        stock: 3,
        category: 'Auto'
    }
    // {
    // id: 2,
    // title: 'BMW E30 M3',
    // description: 'E30 M3 1990' ,
    // price: 40000,
    // img: logobmw,
    // stock: 3,
    // category: 'Auto',
    // }
    ]


export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}
