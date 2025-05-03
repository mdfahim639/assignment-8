import React, { Suspense } from 'react';
import Lowyer from '../Lowyer/Lowyer';

const Lowyers = ({ data }) => {
  return (
    <div>
      <Suspense fallback={<span>loging....</span>}>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-3">
          {data.map(singleLowyer => (
            <Lowyer key={singleLowyer.id} singleLowyer={singleLowyer}></Lowyer>
          ))}
        </div>
      </Suspense>
      <div className="text-center m-3">
        <button className="btn bg-emerald-400 text-white rounded-2xl p-3">
          View All
        </button>
      </div>

      <div>
        <div className="text-center m-4">
          <h2 className="text-xl font-bold mb-2">
            We Provide Best Law Services
          </h2>
          <p>
            Our platform connects you with verified, experienced Lawyers across
            various specialities — all at your convenience.
          </p>
        </div>
        <div className="grid grid-cols-4  mb-6">
          <div className="bg-gray-300 items-center mx-auto p-6 rounded-lg">
            <img
              className=""
              src={'https://i.ibb.co.com/r217FYN0/success-doctor.png'}
              alt=""
            />
            <h1 className="text-3xl font-bold ">199+</h1>
            <p className="">Total Lawyer</p>
          </div>
          <div className="bg-gray-300 items-center mx-auto p-6 rounded-lg">
            <img
              src={'https://i.ibb.co.com/yB8qCBBZ/success-review.png'}
              alt=""
            />
            <h1 className="text-3xl font-bold">467+</h1>
            <p>Total Reviews</p>
          </div>
          <div className="bg-gray-300 items-center mx-auto p-6 rounded-lg">
            <img
              src={'https://i.ibb.co.com/27jB6BrR/success-patients.png'}
              alt=""
            />
            <h1 className="text-3xl font-bold">1900+</h1>
            <p>Cases Initiated</p>
          </div>
          <div className="bg-gray-300 items-center mx-auto p-6 rounded-lg">
            <img
              src={'https://i.ibb.co.com/JR0G0tbK/success-staffs.png'}
              alt=""
            />
            <h1 className="text-3xl font-bold">300+</h1>
            <p>Total Stuffs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lowyers;
