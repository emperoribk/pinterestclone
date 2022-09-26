import LoginPage from "../views/login";
import Dashboard from "../views/dashboard";
import React from "react";

const authRoutes = [
    {
        path: "/login",
        element: <LoginPage />
      },
      {
        path: "/dashboard",
        element:<Dashboard />
      },
]
export default authRoutes;