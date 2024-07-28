"use client"
import { useState } from "react";
import styles from "./page.module.css";
import Form from "../components/Form"
import Lista from "../components/Lista"
import {Peliculas} from "@/components/Peliculas";

export default function Home() {
  const [peliculas_totales, pelicula_nueva] = useState(['']);
  const [total_peliculas, contador_peliculas] = useState(0);
return (
<main className={styles.main}>
<div className="App">
<div>
<h1>
Compra de peliculas
</h1>
<Form></Form>

</div>
<>
</>
</div>
</main>
);
}
