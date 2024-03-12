import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from 'react-router-dom'
import { IoIosHourglass } from 'react-icons/io';
import './././home.css';

//URL DA API : "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc&api_key=1425d9adaccf1ad46a88506a6b4808b9"


function Home() {
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get('discover/movie',{
                params:{
                    api_key: "1425d9adaccf1ad46a88506a6b4808b9",
                    language: "pt-BR",
                    page: 1,
                }
            })

          //  console.log(response.data.results.slice(0, 15));
            setFilmes(response.data.results.slice(0, 15));
            setLoading(false);
        }
        loadFilmes();
    }, []);

if(loading){
    return(
        <div className="loading">
            <h1>Carregando filmes do JonathanFlix...</h1>
            <IoIosHourglass className="spinner" />
        </div>
    )
}


    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original${filme.poster_path}`} alt={filme.title} />
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            <footer>
                                <p>{filme.overview}</p>
                            </footer>
                        </article>
                    )
                })}

            </div>
        </div>
    )
}

export default Home;

/*
<Link to={`https://www.themoviedb.org/movie/${filme.id}`}>Acessar</Link>
*/