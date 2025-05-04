import React from 'react';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router';
import { addStoredData } from '../../Utilitys/Utilitys';
import { toast, ToastContainer } from 'react-toastify';

const LowyerDatils = () => {
  const { id } = useParams();
  const lowyerId = parseInt(id);
  const data = useLoaderData();
  const navigate = useNavigate();
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
    addStoredData(lowyerId);
    toast.success('✅ Appointment booked successfully!');
    navigate('/Bookings');
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="flex m-4 border-2 rounded-lg gap-3 p-3 items-center">
      <ToastContainer />
      <img className="w-[180px] h-[180px] mx-2 rounded-lg" src={image} alt="" />

      <div className="gap-5">
        <h2 className="btn bg-green-200 text-green-500 rounded-2xl">
          {experience} experience
        </h2>

        <h2 className="text-xl font-bold">{name}</h2>
        <p className="font-semibold">{ConsultationFee}</p>
        <h2>Availability : {Availability}</h2>
        <p className="font-semibold">license No: {licenseNumber}</p>

        <button
          onClick={handleBookAppointment}
          className="btn bg-blue-500 text-white px-4 py-2 rounded-lg mt-4"
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default LowyerDatils;
