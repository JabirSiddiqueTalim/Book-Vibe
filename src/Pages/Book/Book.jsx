import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleData }) => {
  // console.log(singleData)
  const { bookName, author,bookId, image, rating, publisher, yearOfPublishing, tags } = singleData;
  console.log(singleData)
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm p-10 ">
        <figure className='bg-gray-100 p-10 r-30'>
          <img className='h-60'
            src={image}
            alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className='flex justify-around '>
            {
              tags.map(tag => <button className='btn-block'>{tag}</button>)
            }
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book By : {publisher}</p>
          <div className='border-t-1 border-dashed'>
          </div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{author}</div>
            <div className="badge badge-outline">{rating} <FaStar /></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;