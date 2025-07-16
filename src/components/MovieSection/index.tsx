import React from "react";
import styles from './MovieSection.module.css';
import Fieldset from "../Fieldset";
import InputText from "../InputText";
import Button from "../Button";
import { FaSearch } from "react-icons/fa";
import MovieList from "../MovieList";
import type { Movie } from "../../types";

const movies: Movie[] = [
    {
        id: 1,
        src: "/Imagens/Cards filmes/Card - Stan Lee.jpg",
        alt: "Imagem do filme Stan Lee",
        titulo: "Stan Lee",
        categoria: "2D",
        censura: "Livre",
        genero: "Cinebiografia",
        duracao: 90,
    },
    {
        id: 2,
        src: "/Imagens/Cards filmes/Card - Amigo da sombra.png",
        alt: "Imagem do filme Amigo da sombra",
        titulo: "Amigo da sombra",
        categoria: "2D",
        censura: "12 anos",
        genero: "Suspense",
        duracao: 110,
    },
    {
        id: 3,
        src: "/Imagens/Cards filmes/Card - Amigos do bosque mágico.png",
        alt: "Imagem do filme Amigo do bosque mágico",
        titulo: "Amigo do bosque mágico",
        categoria: "2D",
        censura: "Livre",
        genero: "Animação",
        duracao: 60,
    },
    {
        id: 4,
        src: "/Imagens/Cards filmes/Card - Caminho para o abismo.png",
        alt: "Imagem do filme Caminho para o abismo",
        titulo: "Caminho para o abismo",
        categoria: "2D",
        censura: "14 anos",
        genero: "Horror",
        duracao: 103,
    },
    {
        id: 5,
        src: "/Imagens/Cards filmes/Card - Death Blow.jpg",
        alt: "Imagem do filme Death Blow",
        titulo: "Death Blow",
        categoria: "3D",
        censura: "16 anos",
        genero: "Ação",
        duracao: 113,
    },
      {
        id: 6,
        src: "/Imagens/Cards filmes/Card - Ponce de León.jpg",
        alt: "Imagem do filme Ponce de Léon",
        titulo: "Ponce de Léon",
        categoria: "2D",
        censura: "14 anos",
        genero: "Aventura",
        duracao: 120,
    },
      {
        id: 7,
        src: "/Imagens/Cards filmes/Card - Red sun.jpg",
        alt: "Imagem do filme Red Sun",
        titulo: "Red Sun",
        categoria: "3D",
        censura: "12 anos",
        genero: "Ação",
        duracao: 134,
    },
      {
        id: 8,
        src: "/Imagens/Cards filmes/Card - 007.jpg",
        alt: "Imagem do filme 007",
        titulo: "007",
        categoria: "2D",
        censura: "16 anos",
        genero: "Ação",
        duracao: 100,
    }
];


const MovieSection = () => {
    return (
        <main>
            <section className={styles.container}>
                <Fieldset variant="secondary">
                    <InputText placeholder="Buscar filmes..." />
                    <Button variant="icon">
                        <FaSearch/>
                    </Button>
                </Fieldset>
                <h1 className={styles.titulo}>Em cartaz</h1>
                <MovieList movies={movies}/>
            </section>
        </main>
    )
}

export default MovieSection;
