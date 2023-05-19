import React from "react";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/projetos",
        element: <Projects />,
      },
      {
        path: "/experiencia",
        element: <Experience />,
      },
      {
        path: "/educacao",
        element: <Education />,
      },

      {
        path: "/contato",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
