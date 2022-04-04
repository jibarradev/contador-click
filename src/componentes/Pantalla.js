import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

function Pantalla({ numClicks }){
  return (
    <div className='contador'>
      {numClicks}
    </div>
    );
}

export default Pantalla;