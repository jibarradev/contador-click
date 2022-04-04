import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const aumentarClick = () =>{
    setNumClicks(numClicks + 1);
  };

  const reiniciarClicks = () =>{
    setNumClicks(0);
  };

  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Contador de clicks</h1>
        <Pantalla  
          numClicks={numClicks} />
        <Boton 
          texto='Click'
          esContador={true}
          funcion={aumentarClick} />
        <Boton 
          texto='Reiniciar'
          esContador={false}
          funcion={reiniciarClicks} />
      </div>
      
    </div>
  );
}

export default App;


