import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToDB } from '../../utility/addToDb';


const BookDetails = () => {
  const { id } = useParams();
  const bookid = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find(data => data.bookId === bookid);
  // console.log(singleData);
  const { bookName, author, bookId, image, rating, publisher, yearOfPublishing, tags, review,totalPages } = singleData;

  const hanfleMarkAsRead = id => {
   
    addToDB(id);
}

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row ">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p className="py-3">
              Publisher By : {publisher}
            </p>
            <div className='border-t-1 border-dashed'></div>
            <p className="py-6">
              Review : {review}
            </p>
            {/* <div className='border-t-1 border-dashed'></div> */}
            <div><span className='text-xl'>Tag : </span> <span className=''>
              {
                tags.map(tag=><button className='text-blue-950 p-3' >{tag}</button>)
              }
              </span></div>
              <div className='border-t-1 border-dashed py-5'></div>
              <div>
               <p><span className='text-gray-600'>Number of Pages :</span>     {totalPages}</p>
               <p><span className='text-gray-600'>Year of Publishing:</span>   {totalPages}</p>
               <p><span className='text-gray-600'>Rating:</span>               {rating}</p>
              </div>

           <div className='my-3'>
           <button className="btn  " onClick={()=>hanfleMarkAsRead(id)}>Add Read Mark</button>
           <button className="btn btn-dash ml-2.5">Add Wishlist</button>
           </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default BookDetails;
// Number of Pages:
// Publisher:
// 
// 