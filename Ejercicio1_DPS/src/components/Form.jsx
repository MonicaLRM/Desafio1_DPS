"use client";
import React, { useState } from 'react';
import peliculas from '../app/peliculas.json';
import Peliculas from './Peliculas';
import Lista from './Lista';
import Swal from 'sweetalert2';
import styles from "../app/page.module.css";

const Form = () => {
  const [selectedPelicula, setSelectedPelicula] = useState(peliculas.Peliculas[0]);
  const [peliculasEnCarrito, setPeliculasEnCarrito] = useState([]);

  const handleSelect = (nombre) => {
    const peliculaSeleccionada = peliculas.Peliculas.find(pelicula => pelicula.Nombre === nombre);
    setSelectedPelicula(peliculaSeleccionada);
  };

  const agregarAlCarrito = () => {
    if (!peliculasEnCarrito.some(pelicula => pelicula.Nombre === selectedPelicula.Nombre)) {
      setPeliculasEnCarrito([...peliculasEnCarrito, { ...selectedPelicula, Cantidad: 1 }]);
    } else {
      Swal.fire({
        icon: "error",
        text: "Ya has seleccionado esta pelicula",
      });
    }
  };

  return (
    <div>
      <p className={styles.p} >Elija una pelicula del selector</p>
      <Peliculas 
        peliculas={peliculas.Peliculas} 
        onSelect={handleSelect} 
        selectedPelicula={selectedPelicula} 
      />
      <div>
        <p className={styles.p}>Película Seleccionada: {selectedPelicula.Nombre}</p>
        <button className={styles.form_button} onClick={agregarAlCarrito}>
          Añadir al carrito
        </button>
      </div>
      <Lista peliculasEnCarrito={peliculasEnCarrito} setPeliculasEnCarrito={setPeliculasEnCarrito} />
    </div>
  );
};

export default Form;
