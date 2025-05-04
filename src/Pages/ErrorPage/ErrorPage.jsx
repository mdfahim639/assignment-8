import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center my-10  p-4 rounded-lg ">
        <img
          className="w-[300px] h-[300px] mx-auto"
          src={'https://i.ibb.co.com/YT0mrysv/errorimage-DYaijw-EK.jpg'}
          alt=""
        />
        <h2 className="text-2xl text-amber-500 font-semibold">
          page not fount 404
        </h2>
        <p>Oops!!! The apge you are llokng for does not exist</p>
      </div>
      <div className="text-center w-full mx-auto">
        <Link to="/">
          <button className="btn hover:bg-green-500 ">back home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
