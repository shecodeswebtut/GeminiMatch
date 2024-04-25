import React from 'react'
import ProductCard from './ProductCard'

function product() {
  return (
    <>
    <div className='text-center f-22'>Here are the list of latest phone for you - </div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
    <div class="col">
       <ProductCard/>
    </div>
  </div>
  
</div>
    </>
  )
}

export default product