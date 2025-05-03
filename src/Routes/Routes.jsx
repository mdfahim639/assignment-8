import React, { Component } from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import LowyerDatils from '../components/LowyerDatils/LowyerDatils';
import Lowyerlist from '../Pages/LowyerList/Lowyerlist';
import Bookings from '../Pages/Lowyer/Bookings/Bookings';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('lowyers.json'),
        path: '/',
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/lowyerList',
        loader: () => fetch('./lowyers.json'),
        Component: Lowyerlist,
      },
      {
        path: '/LowyerDatils/:id',
        loader: () => fetch('./lowyers.json'),
        Component: LowyerDatils,
      },
      {
        path: '/Bookings',
        loader: () => fetch('./lowyers.json'),
        Component: Bookings,
      },
      {
        path: './ErrorPage',
        Component: ErrorPage,
      },
    ],
  },
]);
