import React from 'react';
import styles from "../app/page.module.css";

const Peliculas = ({ peliculas, onSelect, selectedPelicula }) => {
  const handleChange = (event) => {
    const selected = event.target.value;
    onSelect(selected);
  };

  return (
    <select className={styles.select} onChange={handleChange} value={selectedPelicula ? selectedPelicula.Nombre : ''}>
      {peliculas.map((pelicula, index) => (
        <option key={index} value={pelicula.Nombre}>
          {pelicula.Nombre}
        </option>
      ))}
    </select>
  );
};

export default Peliculas;
