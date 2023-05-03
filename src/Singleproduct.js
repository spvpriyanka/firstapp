import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import ReactImageMagnify from 'react-image-magnify';


const Singleproduct = () => {

  const params = useParams();
  let [val, setval] = useState([]);
  let [img, setimg] = useState([]);
  let [image, setimage] = useState("");

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${params.id}`)
      .then(function (response) {
        // handle success
        console.log(response);
        setval(response.data);
        // console.log(response.data.images)
        setimg(response.data.images);
        // console.log(img[0])
        setimage(response.data.thumbnail);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [params.id])

  const changeimg = (i) => {
    setimage(img[i]);
  }


  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          <div className='col-1 mt-5'>
            {
              img.map((item, i) => {
                return (
                  <>
                    {/* <div key={i} onClick={()=>changeimg(i)}><img src={item} alt="" width="80px" height="70px" className='mb-2'/></div> */}

                    <img src={item} alt="" width="80px" height="70px" className='mb-2' onMouseOver={() => { changeimg(i) }} />
                  </>
                )
              }
              )
            }
            {/* <div><img src={val.thumbnail} alt="" width="80px" height="70px" className='mb-2 mt-5' /></div>
            <div><img src={val.thumbnail} alt="" width="80px" height="70px" className='mb-2' /></div>
            <div><img src={val.thumbnail} alt="" width="80px" height="70px" className='mb-2' /></div>
            <div><img src={val.thumbnail} alt="" width="80px" height="70px" className='mb-2' /></div> */}
          </div>
          <div className='col-4 mt-5'>
            {/* <div><img src={val.thumbnail} alt="" width="450px" height="470px" className='mt-5' /></div> */}
            <ReactImageMagnify {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: image
              },
              largeImage: {
                src: image,
                width: 1200,
                height: 1800
              }
            }} />
          </div>

          <div className='col-5 mt-5 info'>
            <div className='fs-5 d1'>{val.description}</div>
            <div className='fw-bold fs-3 pt-3'>${val.price}</div>

            <div className='d-flex fw-bold'>
              <div className='fs-3 pt-3 d2'>{val.discountPercentage}% off</div>
              {/* <p className=''>Inclusive of all taxes</p> */}
            </div>

            <div className='mt-2'>Inclusive of all taxes</div>

            <div className='d-flex'>
              <div className='pt-4 fs-4 d3'>{val.rating}</div>
              <div className='icon pt-4 ps-4 fs-5 d4'> <BsStarFill></BsStarFill><BsStarFill></BsStarFill><BsStarHalf></BsStarHalf></div>
            </div>
            <div className='d-flex'>
              <div className='pt-3 fs-5 fw-bold d5'>Brand :</div>
              <div className='d6'>{val.brand}</div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Singleproduct;