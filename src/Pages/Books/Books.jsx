import React, { useEffect, useState } from 'react';

const Books = () => {
  const [allBooks,setallBooks]=useState([]);
  useEffect(()=>{
    fetch('booksData.json').
    then(res=>res.json()).
    then(data=>
    {
      setallBooks(data);
    }
    )

  },[])
  console.log(allBooks)
  
  return (
    <div>
      this is book
      

      
    </div>
  );
};

export default Books;