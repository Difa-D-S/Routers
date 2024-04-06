import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export const Contact = () => {

  const navigate = useNavigate();
  const handleSubmit = () => {
    return navigate("/")
  }
  return (
    <>
     <div className="component">
     <h1>Contact</h1>
    </div>
    <Outlet/>
    <button onClick={handleSubmit}>Submit</button>
        
    </>
  )
}
