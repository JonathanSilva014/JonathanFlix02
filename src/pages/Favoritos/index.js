import { useEffect, useState } from 'react';
import './favoritos.css'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Favoritos(){

    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        const minhaLista = localStorage.getItem('@Jonathanflix');
        setFilmes(JSON.parse(minhaLista) || []);

    }, [])

    /*AQUI É ONDE EU APAGO OS FILMES DA LISTA******************************************************************/
    function excluirFilme(id) {
        toast.success('Filme excluido com sucesso Truta');
        let filtroFilmes = filmes.filter((item) => {
         return (item.id !== id)
        })

        setFilmes(filtroFilmes);
        localStorage.setItem('@Jonathanflix', JSON.stringify(filtroFilmes));
    }

    /*AQUI É O HTML DA PAGINA*********************************************************************************/
    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>

            {filmes.length === 0 && <span>Infelizmente você não possui nenhum Filme salvo meu Truta</span>}

            <ul>
                {filmes.map((item) => {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <button onClick={() => excluirFilme(item.id)}>Remover</button>
                                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                            </div>
                            
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default Favoritos;
