import React, { Suspense } from 'react';
import Book from '../Book/Book';


const Books = ({data}) => {
  return (
    <div>
      <h2 className='text-3xl text-blue-950 text-center p-4'>Books</h2>
      <Suspense fallback={<p>Loading</p>}>
      <div className='grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 '>
      {
        
        data.map(singleData=> <Book key={singleData.bookId} singleData={singleData}></Book>)
      }
      </div>
      </Suspense>

      
    </div>
  );
};

export default Books;