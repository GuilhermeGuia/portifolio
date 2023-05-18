import React from "react";

import About from "./views/About";
import Contact from "./views/Contact";
import Education from "./views/Education";
import Experience from "./views/Experience";
import Projects from "./views/Projects";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import ErrorPage from "./views/ErrorPage";

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
