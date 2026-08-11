import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  const router = createBrowserRouter([{ 
    path: "/", 
    element: <MainLayout />,
    children:[
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'projects',
        element:<Projects/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }]);

  return <RouterProvider router={router} />;
};

export default App;
