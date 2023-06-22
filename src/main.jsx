import ReactDOM from "react-dom/client";
import "./index.css";
import Bienvenida from './components/Bienvenida'
import ToDo from './components/ToDo'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Bienvenida nombre="Victorio"/>
    <ToDo/>
  </>
);
