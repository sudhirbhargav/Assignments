import React,{useState} from "react"
import './One.css'
export default function One(){
    const [count,setCount] = useState(0)
    function inc(){
        setCount(count+1)
    }
    function dic(){
        setCount(count-1)
    }
    const title = "Nivea Whitening Smooth Skin Roll"
    return(
        <>
        <div className="two">
            <img src="https://www.jiomart.com/images/product/150x150/490830561/nivea-whitening-smooth-skin-roll-on-deodorant-for-women-50-ml-product-images-o490830561-p490830561-0-202203151142.jpg" alt="" />
            <h2>{title}</h2>
            <h3>$123</h3>
            <h3>{count}</h3>
            <button onClick={dic}>-</button>
            <button onClick={inc}>+</button>
            </div>
        </>
    )
}