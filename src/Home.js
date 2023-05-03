import React, { useState, useEffect } from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import axios from 'axios';
import Header from './Header';
import { Link } from "react-router-dom";


const Home = () => {
  let [val, setval] = useState([]); 
  let [search,setsearch] = useState("");

  useEffect(() => {


    axios.get('https://dummyjson.com/products')
      .then(function (response) {
        // handle success
        console.log(response.data.products);
        setval(response.data.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])
  return (
    <>
      <Header />
      <main>
        <div className="container-fluid">
          <div className="row py-3">
            <div className='col-12 text-center search-1'>
              <input type="text" placeholder='Search for Products' className='search' onChange={(e) => setsearch(e.target.value)}/>
            </div>
            {
              val.filter((value) =>{
                if (search === "") {
                  return value
                }
                else if (value.category.toLowerCase().includes(search.toLowerCase()) ) {
                  return value
                }
              })
              
              
              
              .map((item) => {
                return (
                  <>
                    <div className="col-4" key={item.id}>
                    <Link to={`/singleproduct/${item.id}`} className='l-1'>

                      <div className='border my-5'>
                        <img src={item.thumbnail} height="300px" width="100%"></img>

                        <div className='ps-5'>
                          <h3 className='pt-3 fw-semibold'>{item.title}</h3>

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

                          {/* <div className='btn mb-2'><button><Link to={`/singleproduct/${item.id}`}>Click</Link></button></div> */}
                        </div>
                      </div>
                      </Link>
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

export default Home