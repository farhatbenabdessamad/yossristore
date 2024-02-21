import { useState } from 'react';
import './App.css';
import products from './Component/Data';
import Basic from './Component/Navbar';
import Shoplist from './Component/Shoplist';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [search, setSearch]=useState("")
 console.log(search)
 
  return (
    <div>
    
    <Basic setSearch={setSearch}/>
    
    <div  style ={{display :"flex", justifyContent:"center", gap:"10px", flexWrap:"wrap", marginTop:"10px"}}>
    <Shoplist products={products} search={search}/>
    </div>
    
  
    </div>
  );
}

export default App;
