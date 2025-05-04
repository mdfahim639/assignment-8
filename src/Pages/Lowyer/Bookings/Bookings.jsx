import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import {
  getStoredLowyer,
  removeStoredLowyer,
} from '../../../Utilitys/Utilitys';

const Bookings = () => {
  const [lowyerlist, setLowyerList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const updateAppointments = () => {
      if (!Array.isArray(data)) {
        console.error('Loader data is not an array:', data);
        setLowyerList([]);
        return;
      }

      const storedLowyerData = getStoredLowyer().map(id => parseInt(id));
      const bookedLowyers = data.filter(lowyer =>
        storedLowyerData.includes(lowyer.id)
      );
      setLowyerList(bookedLowyers);
    };

    updateAppointments();
    window.addEventListener('appointmentUpdated', updateAppointments);

    return () => {
      window.removeEventListener('appointmentUpdated', updateAppointments);
    };
  }, [data]);

  const handleCancel = id => {
    removeStoredLowyer(id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Your Appointments</h2>

      {lowyerlist.length === 0 ? (
        <div className="text-center mt-10">
          <h3 className="text-lg font-semibold text-red-500 mb-4">
            No appointments found.
          </h3>
          <Link to="/">
            <button className="btn bg-green-500 text-white p-2 rounded-lg">
              Go to Homepage
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4  mx-auto">
          {lowyerlist.map(item => (
            <div key={item.id} className=" p-4  shadow-lg flex flex-col gap-2">
              <div className=" flex gap-3 justify-between border-b border-dotted  p-4">
                <div>
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-gray-700">Specialty: {item.specialty}</p>
                </div>

                <p className="text-gray-700">Fee: {item.ConsultationFee}</p>
              </div>
              <p className="mt-2 text-red-300 bg-amber-200 p-2 rounded-lg">
                Due to high business of lawyer, we are currently accepting
                appointment for only today.We appreciate your understanding and
                cooperation
              </p>
              <button
                onClick={() => handleCancel(item.id)}
                className="btn hover:bg-red-500 w-full p-2 rounded-lg"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookings;
