import React from "react";
import MovieDetails from "../../components/MovieDetails";
import { Error } from "../../components/MovieDetails/styles";
import axios from "axios";
import { getRequestHeaders } from "../../utils";

class MovieDetailsPage extends React.Component {
  state = {
    movieDetails: {},
    error: null,
    id: null
  };
  componentDidMount() {
    this.fillMovieDetails();
  }

  fillMovieDetails = async () => {
    const id = this.props.match.params.id;
    try {
      const response = await axios({
        method: "get",
        url: `http://wdassignment.devfl.com/api/movie?id=${id}`,
        headers: getRequestHeaders()
      });
      this.setState({
        movieDetails: response.data,
        error: null
      });
      this.setState({
        name: this.state.movieDetails.data.name,
        description: this.state.movieDetails.data.description
      });
    } catch (err) {
      if (err.response.status) {
        this.setState({
          error: "There is no data for this movie."
        });
      }
    }
  };

  render() {
    const { name, description, error } = this.state;
    return (
      <div>
        {error ? (
          <Error>{this.state.error}</Error>
        ) : (
          <MovieDetails title={name} description={description} />
        )}
      </div>
    );
  }
}
export default MovieDetailsPage;
