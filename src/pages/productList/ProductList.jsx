import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from "../../components/table/Table"
import  "./productList.scss"

function ProductList() {
  return (
    <div className='productList'>
      <Sidebar  />
      <div className="productListContainer">
      <Navbar />
     <div className='productTitle'>
     <div className='productAddText'>
     <Link to="/products/new" style={{textDecoration:"none"}} className="link">
        Add New
      </Link></div>
     <Table />
     </div>
      </div>
  
 </div>
    
  )
}

export default ProductList