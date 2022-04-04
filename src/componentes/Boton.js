import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton({ texto,esContador,funcion }){
    return (
      <div className='boton-contenedor'>
        <button 
          className={esContador ? 'boton-contador' : 'boton-reiniciar'}
          onClick={funcion}>
            {texto}
        </button>
      </div>
        
        
    );
}

export default Boton;