import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header';
import { BsStarFill, BsStarHalf } from "react-icons/bs";


const Category = () => {
    
    const params = useParams();
    let[val,setval]=useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/category/${params.id}`)
        .then(function (response) {
            // handle success
            console.log(response.data.products);
            setval(response.data.products);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
    },[params.id])
  return (
    <>
    <Header/>
     <main>
         <div className="container">
           <div className="row py-3">
             {
               val.map((item) => {
                 return (
                   <>
                     <div className="col-4" key={item.id}>
                        <Link to={`/category/${item.id}`}/>
                       <div className='border my-5'>
                         <img src={item.thumbnail} height="300px" width="100%"></img>
 
                         <div className='ps-5'>
                           <div className='pt-3 fw-semibold h4'>{item.title}</div>
 
                           <div className='pt-1 d-flex'>
                             <div className='pe-2 fw-semibold'>{item.rating}</div>
                             <div className='icon'> <BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></div>
                           </div>
                           
                           <div className='pt-1 d-flex'>
                             <div className='fs-4 fw-semibold me-2'>${item.price}</div>
                             {/* <div className='mt-2'>({item.discountPercentage}% off)</div> */}
                           </div>
                           <div className='fw-normal'>{item.brand}-{item.category}</div>
 
                           {/* <div className='fw-lighter pt-1 p b-3'>Free Delivery</div> */}
 
                           <div className='btn mb-2'><button><Link to={`/singleproduct/${item.id}`}>Click</Link></button></div>
 
                         </div>
                       </div>
                     </div>
                   </>
                 )
 
               })
             }
           </div>
         </div>
       </main>
    </>
    
  )
}

export default Category