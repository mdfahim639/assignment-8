import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import { addStoredData } from '../../Utilitys/Utilitys';

const LowyerDatils = () => {
  const { id } = useParams();
  const lowyerId = parseInt(id);
  const data = useLoaderData();
  const singleData = data.find(singleLowyer => singleLowyer.id === lowyerId);

  const {
    name,
    image,
    experience,
    ConsultationFee,
    licenseNumber,
    Availability,
  } = singleData;

  const handleBookAppointment = () => {
    alert('✅ Appointment booked successfully! Redirecting to About page...');
  };

  const handleCancelAppointment = id => {
    addStoredData(id);
  };

  return (
    <div className="flex m-4 border-2 rounded-lg gap-3 p-3 items-center">
      <img className="w-[180px] h-[180px] mx-2 rounded-lg" src={image} alt="" />

      <div className="gap-5">
        <h2 className="btn bg-green-200 text-green-500 rounded-2xl">
          {experience} experience
        </h2>

        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-semibold">{ConsultationFee}</p>
        <h2>Availability : {Availability}</h2>
        <p className="font-semibold">license No: {licenseNumber}</p>

        {/* About Button with alert */}
        <Link to="/lowyerList" onClick={handleBookAppointment}>
          <button
            onClick={() => handleCancelAppointment(id)}
            className="btn bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Book Appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LowyerDatils;
