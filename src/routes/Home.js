import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [Movies, setMovies] = useState([]);

    const getMovies = async () => {
        const {
            data: {
                data: { movies },
            },
        } = await axios.get(
            "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
        );
        setMovies(movies);
        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <section className="container">
            {isLoading ? (
                <div className="loader">
                    <span className="loader__text">Loading...</span>
                </div>
            ) : (
                <div className="movies">
                    {Movies.map((movie) => {
                        return (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                large_poster={movie.large_cover_image}
                                genres={movie.genres}
                            />
                        );
                    })}
                </div>
            )}
        </section>
    );
}

export default Home;
