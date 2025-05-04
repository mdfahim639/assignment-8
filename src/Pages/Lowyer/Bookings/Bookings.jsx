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
        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
          {lowyerlist.map(item => (
            <div
              key={item.id}
              className="border p-4 rounded-xl shadow-lg flex flex-col gap-2"
            >
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-gray-700">Specialty: {item.specialty}</p>
              <p className="text-gray-700">Fee: {item.ConsultationFee}</p>
              <button
                onClick={() => handleCancel(item.id)}
                className="btn bg-red-500 text-white w-fit p-2 rounded-lg"
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
