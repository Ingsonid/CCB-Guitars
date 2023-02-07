

import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Navbar/Navbar';
// import Cardwidget from './Cardwidget/Cardwidget';
import ItemCount from './ItemCount/ItemCount';
import Dolar from './Dolar/Dolar';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './ItemListContainer/ItemListContainer';

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

   <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/> 
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:idCategoria' element={<ItemListContainer/>}/>
      </Routes> 
    </BrowserRouter>
          
   
          {/* <ItemCount  valInicial={1} stock={10} /> */}
          {/* <Cardwidget   cantidadCarrito={10} /> */}

          {/* <Dolar/> */}
         


   </>
  
  );
}

export default App;
