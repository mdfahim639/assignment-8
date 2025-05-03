import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { getStoredLowyer, removeStoredLowyer } from '../../Utilitys/Utilitys';

const Lowyerlist = () => {
  const [lowyerlist, setLowyerList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedLowyerData = getStoredLowyer().map(id => parseInt(id));
    const bookedLowyers = data.filter(lowyer =>
      storedLowyerData.includes(lowyer.id)
    );
    setLowyerList(bookedLowyers);
  }, [data]);

  const handleCancel = id => {
    removeStoredLowyer(id);
    const updatedList = lowyerlist.filter(lowyer => lowyer.id !== id);
    setLowyerList(updatedList);
    alert('❌ Appointment canceled successfully!');
  };

  return (
    <div className="justify-center items-center">
      {lowyerlist.length === 0 ? (
        <div className="text-center my-10">
          <h2 className="text-4xl font-semibold">
            You Have Not Booked Any Appointment Yet
          </h2>
          <p className="mt-2">
            Our platform connects you with verified, experienced lawyers across
            various specialties — all at your convenience.
          </p>
          <Link to="/">
            <button className="btn mt-6 bg-green-500 text-white rounded-2xl p-3">
              Book an Appointment
            </button>
          </Link>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-semibold text-center my-4">
            Booking List: {lowyerlist.length}
          </h2>
          {lowyerlist.map(lowyer => (
            <div
              key={lowyer.id}
              className="border rounded-lg p-4 m-4 shadow-lg"
            >
              <h3 className="text-xl font-bold">{lowyer.name}</h3>
              <p>{lowyer.experience} experience</p>
              <p>Fee: {lowyer.ConsultationFee}</p>
              <button
                onClick={() => handleCancel(lowyer.id)}
                className="btn mt-3 bg-red-500 text-white px-3 py-1 rounded-lg"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
          <div className="text-center">
            <Link to="/">
              <button className="btn my-4 bg-green-500 text-white rounded-2xl p-3">
                Back to Home
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Lowyerlist;
