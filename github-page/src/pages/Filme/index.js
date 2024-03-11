import { useEffect, useState } from "react";  
import { useParams, useNavigate } from "react-router-dom"; 
import './filme-info.css';
import { toast } from "react-toastify";

import api from "../../services/api";

function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function loadFilme() {
            try {
                const response = await api.get(`/movie/${id}`, {
                    params: {
                        api_key: "1425d9adaccf1ad46a88506a6b4808b9",
                        language: "pt-BR",
                    }
                });
                setFilmes(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Filme não encontrado", error);
                navigate("/", { replace: true });
            }
        }

        loadFilme();

        return () => {
            console.log('Componente desmontado');
        };
    }, [id, navigate]);

    function salvarFilme() {
        const minhaLista = localStorage.getItem('@JonathanFlix');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id === filme.id);

        if(hasFilme) {
            toast.warn("Graças a Deus Você já possui esse Filme Salvo Truta.")
            return;
        }

        filmesSalvos.push(filme);

        localStorage.setItem('@Jonathanflix', JSON.stringify(filmesSalvos));

        toast.success("Filme salvo com sucesso!");
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando filmes do JonathanFlix...</h1>
                <div className="spinner"></div>
            </div>
        )
    }

    return(
        <div className="filme-info"> 
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original${filme.backdrop_path}`} alt={filme.title} />
            
            <span>{filme.overview}</span>
            <strong>Avalição: {filme.vote_average} / 10</strong>

            <div className="filme-info-data">
                <h3>Informações</h3>
                <span>Data de Lançamento: {filme.release_date}</span>
                <span>Idioma Original: {filme.original_language}</span>
                <span>Duração: {filme.runtime} minutos</span>
            </div>

            <div className="area-buttons">
                <button className="button-voltar" onClick={() => window.history.back()}>Voltar</button>
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a href={`https://www.themoviedb.org/movie/${filme.id}`} target="_blank" rel="noreferrer">Acessar</a>
                </button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${filme.title} Trailer`} target="_blank" rel="noreferrer">Trailer</a>
                </button>
            </div>

            <div className="genero">
                <h3>Gêneros</h3>
                <ul>
                    {filme.genres.map((genero) => {
                        return(
                            <li key={genero.id}>{genero.name}</li>
                        )
                    })}
                </ul>
            </div>
 
            

       </div>
    )
}

export default Filme;