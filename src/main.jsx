// * Componentes:

// import Bienvenida from "./components/Bienvenida";
// import ToDo from "./components/ToDo";
import Menu from "./components/Menu";

// * importaciones

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ? Routes

import Home from "./routes/Home";

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
  {
    path: "/contact",
    element: <h1>Contact</h1>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
