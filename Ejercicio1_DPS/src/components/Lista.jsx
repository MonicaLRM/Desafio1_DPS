"use client";
import styles from "../app/page.module.css";
import React, { useState, useEffect } from 'react';


const Lista = ({ peliculasEnCarrito, setPeliculasEnCarrito }) => {
  const [cantidad, setCantidad] = useState({});
  const [totalGeneral, setTotalGeneral] = useState(0);

  useEffect(() => {
    calcularTotalGeneral();
  }, [peliculasEnCarrito]);

  const handleCantidadChange = (nombre, value) => {
    const nuevaCantidad = { ...cantidad, [nombre]: value };
    setCantidad(nuevaCantidad);

    const nuevaLista = peliculasEnCarrito.map((pelicula) => {
      if (pelicula.Nombre === nombre) {
        return { ...pelicula, Cantidad: parseInt(value) || 1 };
      }
      return pelicula;
    });

    setPeliculasEnCarrito(nuevaLista);
  };

  const calcularTotalGeneral = () => {
    const total = peliculasEnCarrito.reduce((acc, pelicula) => {
      return acc + (pelicula.Precio * (pelicula.Cantidad || 1));
    }, 0);
    setTotalGeneral(total);
  };

  const eliminarPelicula = (nombre) => {
    const nuevaLista = peliculasEnCarrito.filter(pelicula => pelicula.Nombre !== nombre);
    setPeliculasEnCarrito(nuevaLista);
  };


  return (
    <div className={styles.container}>
   
        {peliculasEnCarrito.map((pelicula, index) => (
          <li className={styles.list} key={index}>
            {pelicula.Nombre}&nbsp;&nbsp;&nbsp;  
            
            <input className={styles.number}
              type="number"
              min="1"
              value={cantidad[pelicula.Nombre] || 1}
              onChange={(e) => handleCantidadChange(pelicula.Nombre, e.target.value)}
            />
           
            <span>&nbsp;&nbsp;&nbsp; Total: ${(pelicula.Precio * (pelicula.Cantidad || 1)).toFixed(2)}</span>
            <button className={styles.btn_delete} onClick={() => eliminarPelicula(pelicula.Nombre)}>
              Eliminar
            </button>
          </li>
        ))}
      
      <div>
        <strong>Total General: ${totalGeneral.toFixed(2)}</strong>
      </div>
    </div>
  );
};

export default Lista;
