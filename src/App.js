import React from 'react';
import axios from "axios";
import Movie from "./Movie";
import "./App.css"
import "./Movie.css"


class App extends React.Component{
  state={
    isLoading: true,
    movies: []
  };

  //Fetching Data
  //fetch() or axios: fetch의 작은 layer
  //axios 설치 -> npm i axios
  //YTS API를 사용할 것임: https://yts.mx/ -> https://yts.mx/api
  
  getMovies = async() =>{
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //axios는 시간이 걸리기에 기다리라고 javascript에게 알려줘야 함
    //async / await을 사용

    //this.setState({movies: movies});
    //setState의 movies: axios에서 온 movies
    this.setState({movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }


  //**모든 호환 문제로 인하여 html class는 className으로 사용 */
  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">       
      {isLoading 
          ? (<div className="loader">
            <span className="loader_text">Loading... </span>
          </div>

         ): (<div className="movies">
              {movies.map(movie => (
                  <Movie 
                      key={movie.id}
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}
    
                    />
              ))}
            </div>
        )}
     </section>
 
    )
  }
}

export default App;
