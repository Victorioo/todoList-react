// importaciones de los componentes necesarios para el home
import Bienvenida from "../components/Bienvenida";
import ToDo from "../components/ToDo";
import Menu from "../components/Menu";

function Home() {
  return (
    <>
      <Menu />
      <Bienvenida nombre="Victorio" />
      <ToDo />
    </>
  );
}

export default Home;
