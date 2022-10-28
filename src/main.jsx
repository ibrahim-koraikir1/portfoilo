import React from 'react'

import App from './App'
import './index.css'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App/>
    ),
  },
  {
    path: ":userId",
    element: <Details/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);


