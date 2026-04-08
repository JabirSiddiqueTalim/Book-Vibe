import React from 'react';
import Hero from '../Hero/Hero';
import { useLoaderData } from 'react-router';
import Books from '../Books/Books';

const Home = () => {
  const data=useLoaderData();
 console.log(data)
  return (
    <div>
      <Hero></Hero>
      <Books data={data}></Books>
      
    </div>
  );
};

export default Home;