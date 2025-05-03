import React from 'react';

const Bannar = () => {
  return (
    <div className="mx-auto relative">
      <img
        className="w-[100%]"
        src={'https://i.ibb.co.com/V0HYtYsT/banner-img-1.png'}
        alt=""
      />
      <div className="absolute top-[45%] mx-[20%] text-white text-center">
        <h2 className="text-4xl text-center">
          It avoids subjective claims or
          <br /> exaggeration that might raise red <br /> flags legally
        </h2>
        <p className="text-center mt-4">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. <br /> Whether it's a
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
    </div>
  );
};

export default Bannar;
