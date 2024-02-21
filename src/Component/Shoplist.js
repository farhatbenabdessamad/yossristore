import React from 'react'
import Shopcards from './Shopcards'


function Shoplist(props) {
 // console.log(props.products)
  const{products, search}=props
    return (
    products.filter(e=>search===""? e : e.name.toUpperCase().includes(search.toUpperCase())).map((e)=>
    <div>
    <Shopcards x={e}/>
    </div>)
  )
}

export default Shoplist