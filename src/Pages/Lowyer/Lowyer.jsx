import React from 'react';
import { Link } from 'react-router';

const Lowyer = ({ singleLowyer }) => {
  console.log(singleLowyer);
  return (
    <div>
      <div className="flex m-4 border-1 rounded-lg  gap-3 p-3 items-center ">
        <img
          className="w-[180px] h-[180px] mx-2 rounded-lg"
          src={singleLowyer.image}
          alt=""
        />
        <div>
          <div className="flex gap-5">
            <h2 className="font-bold p-2  rounded-2xl text-center text-green-500 bg-gray-300">
              Available
            </h2>
            <h2 className="bg-indigo-100 font-semibold text-indigo-600 rounded-2xl text-center p-2">
              {singleLowyer.experience} experience
            </h2>
          </div>
          <h2 className="text-xl font-bold">{singleLowyer.name}</h2>
          <p className="font-semibold">{singleLowyer.specialty}</p>
          <p className="font-semibold">
            license No: {singleLowyer.licenseNumber}
          </p>
          <Link to={`/LowyerDatils/${singleLowyer.id}`}>
            <button className="btn w-full hover:bg-gray-400">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lowyer;
