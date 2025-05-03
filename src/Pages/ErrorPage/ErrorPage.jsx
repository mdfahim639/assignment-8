import React from 'react';

const ErrorPage = () => {
  return (
    <div>
      <div className="text-center my-10 shadow-lg p-4 rounded-lg ">
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
    </div>
  );
};

export default ErrorPage;
