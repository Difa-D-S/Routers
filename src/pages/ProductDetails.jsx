import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {

  const params = useParams();
  // console.log(params);
  return (
    <>
    <div className="component">
     <h1>ProductDetails - {params.id}</h1>
    </div>
    </>
  );
};
