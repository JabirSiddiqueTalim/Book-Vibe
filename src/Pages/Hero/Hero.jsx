import React from 'react';
import bookImg from "../../Assets/book1.avif"
const Hero = () => {
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={bookImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
       
          <button className="btn btn-primary m-3">Visit the list</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;