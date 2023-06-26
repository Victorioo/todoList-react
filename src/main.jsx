import ReactDOM from "react-dom/client";
import "./index.css";

// componentes

import Bienvenida from './components/Bienvenida'
import ToDo from './components/ToDo'
import Menu from './components/Menu'


ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Menu />
    <Bienvenida nombre="Victorio"/>
    <ToDo/>
  </>
);
// 
