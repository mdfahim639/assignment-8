import React from 'react';

import Bannar from '../../components/Bannar/Bannar';
import Lowyers from '../Lowyers/Lowyers';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Bannar></Bannar>
      <div className="mx-auto text-center m-3">
        <h2 className="text-2xl text-[#0F0F0F] font-bold m-3">
          {' '}
          Our Best Lawyers
        </h2>
        <p className="text-[#0F0F0F">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. <br /> Whether it's a
          routine checkup or urgent consultation, book appointments in minutes
          and receive quality care you can trust.
        </p>
      </div>
      <Lowyers data={data}></Lowyers>
    </div>
  );
};

export default Home;
