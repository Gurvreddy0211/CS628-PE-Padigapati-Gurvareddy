import React, { useState } from "react";
import "./MovieList.css"; // Add custom styles here

const MovieList = () => {
  const movies = [
    { title: "3 Idiots", genre: "Comedy-Drama", releaseYear: 2009 },
    { title: "Dilwale Dulhania Le Jayenge", genre: "Romance", releaseYear: 1995 },
    { title: "K.G.F: Chapter 1", genre: "Action", releaseYear: 2018 },
    { title: "Taare Zameen Par", genre: "Drama", releaseYear: 2007 },
    { title: "Enthiran", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "Inception", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Dark Knight", genre: "Action", releaseYear: 2008 }
  ];

  const [selectedGenre, setSelectedGenre] = useState("All Genres");

  const uniqueGenres = ["All Genres", ...new Set(movies.map((movie) => movie.genre))];

  const filteredMovies =
    selectedGenre === "All Genres"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);

  const handleMovieClick = (title) => {
    alert(`You clicked on: ${title}`);
  };

  return (
    <div className="movie-list-container">
      <h1>Movie List</h1>
      <div className="filter-container">
        <label htmlFor="genre-filter">Filter by Genre: </label>
        <select
          id="genre-filter"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          {uniqueGenres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="movies-container">
        {filteredMovies.map((movie, index) => (
          <div
            key={index}
            className="movie-card"
            onClick={() => handleMovieClick(movie.title)}
          >
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
