import React from 'react';
import { FaStar } from "react-icons/fa";

const Book = ({singleData}) => {
  // console.log(singleData)
  const {bookName,author,image,rating,publisher}=singleData;
  console.log(singleData)
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-10 ">
    <figure className='bg-gray-100 p-10 r-30'>
      <img className='h-60'
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {bookName}
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>Review : {publisher}</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">{author}</div>
        <div className="badge badge-outline">{rating} <FaStar /></div>
      </div>
    </div>
  </div>
  );
};

export default Book;