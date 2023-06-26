// * importaciones

import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ? Routes

import Home from "./routes/Home";
import Contact from './routes/Contact'
import Config from './routes/Config'
import About from './routes/About'

const router = createBrowserRouter([
    {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/config",
    element: <Config />,
  },
  {
    path: "/about",
    element: <About/>,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
