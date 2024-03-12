import axios from "axios";

//base da URL : https://api.themoviedb.org/3/
//https://api.themoviedb.org/3/movie/550?api_key=1425d9adaccf1ad46a88506a6b4808b9&language=pt-BR
//https:///movie/now_playing?api_key=1425d9adaccf1ad46a88506a6b4808b9&language=pt-BR

//curl --request GET \
//     --url 'https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc' \
//     --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDAxOTdmZjUxNWY3Yzg1ZWY4OTk1Y2QzNDYyNmYwOCIsInN1YiI6IjYyNWU3NDkyNThlZmQzMDA1MjQ3Njg4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tWf6qlIlvc1WSUlar5AxiN21Qbyrawgsr1rMNkOrTPU' \
//     --header 'accept: application/json'

// curl -X GET "https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=1&sort_by=popularity.desc&api_key=1425d9adaccf1ad46a88506a6b4808b9"


const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3/'
});

export default api;