import React from 'react';
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import authRoutes from './auth.routes';

const router = createBrowserRouter([
    ...authRoutes
  ]);

const PinRouterProvider = () => {
return <RouterProvider  router={router}/>;
}

export default PinRouterProvider;