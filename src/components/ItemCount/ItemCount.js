import React from "react";
import {useState} from "react";
import "../ItemCount/ItemCount.css"

const Counter = ({stock,initial}) => {
    const [count, setCount] = useState(initial);
    const decrease = () =>{
        if (count>initial){setCount(count-1)}
    }
    const increase = () =>{
        if (count<stock){setCount(count+1)}
    }

const onAdd = () =>{
    if(count>0) {console.log("Agregados:", count)}
}

    return(
        <div className="count">
            <div className="btn-count">
                <button onClick={decrease}>-</button>
                <div>{count}</div>
                <button onClick={increase}>+</button>
            </div>
            <button className="btn-addcart" onClick={onAdd}> Agregar al carrito </button>
        </div>
    )
}

export default Counter;