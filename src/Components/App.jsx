
import './App.css'
import Navbar from './Navbar/Navbar';
import Cardwidget from './Cardwidget/Cardwidget';
import ItemListContainer from './ItemListContainer';

// import './App.css';

// diferencias de html normal  y en jsx

/*
class => className
<input> => <input/>
variables  ${} => {}
style = "nombreClase" => style= {{"nombrePorpiedad"}}
usar camelCase para propiedades
*/


function App() {
  return (

   <>
          <Navbar/>
          <ItemListContainer mensaje={"Bienvenido a mi tienda de instrumentos"}/>
          {/* <Cardwidget   cantidadCarrito={10} /> */}

   </>
  
  );
}

export default App;
