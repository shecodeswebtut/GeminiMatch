import React from 'react'
import heartsvg from '../../assets/svg/heartsvg.svg'
import './ProductDesc.css'

function ProductDesc(props) {

    let { title, price, model, battery,processor,ram, storage } = props;


    return (
        <>
            <div className="card" >
                <div className="header flex-content">

                    <p className='product-name'>{title}</p>

                    <img alt='wishlist-svg' className="image-svg" src={heartsvg} />
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Price</p>
                    <p className="price-tag">₹{price}</p>
                </div>
                <div className="column flex-content">
                    <p className='detail-category'>Model Name</p>
                    <p className='info'>{model}</p>
                </div>
                <div className="column flex-content">
                    <p className='sub-category'> Processor</p>

                    <p className='info'>{processor}</p>
                </div>
                <div className="column flex-content">
                    <p className='sub-category'> RAM</p>

                    <p className='info'>{ram}</p>
                </div>
             
                <div className=" column flex-content">
                    <p className='sub-category'>Storage</p>
                    <p className='info' >{storage}</p>
                </div>
        
           
            <div className="column flex-content">
                <p className='detail-category'>Battery</p>
                <p className='info'>{battery}</p>
            </div>
          
        </div >   
       
    </>
  )
}

export default ProductDesc