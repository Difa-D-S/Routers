import React from 'react'
import { useLocation } from 'react-router-dom'
// import { useSearchParams } from 'react-router-dom'

export const Shop = () => {

    // const [ searchParams ] = useSearchParams();
    // console.log(searchParams.get("Keyword"),searchParams.get("instructor"),searchParams.get("rating"));
    // console.log(searchParams.get("instructor"));

    const location = useLocation();
    console.log(location);
    
  return (
    <div className='component'>Shop</div>
  )
}