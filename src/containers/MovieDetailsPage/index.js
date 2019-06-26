import React from "react";
import axios from "axios";
import { getRequestHeaders } from "../../utils";
import MovieDetails from "../../components/MovieDetails";
import Homepage from "../Homepage";

class MovieDetailsPage extends React.Component {
  state = {
    movieDetails: {},
    error: null,
    id: null
  };

  fillMovieDetails = async () => {
    const id = this.props.match.params.id;
    this.setState({ id });

    console.log("id", id);
    try {
      const response = await axios({
        method: "get",
        url: `http://wdassignment.devfl.com/api/movie?id=${id}`,
        headers: getRequestHeaders()
      });
      console.log("id", response.data.id);
      this.setState({ movieDetails: response.data, error: null });
    } catch (err) {
      if (err.response.status) {
        this.setState({
          error: "Something went wrong.Try again."
        });
      }
    }
  };
  render() {
    return (
      <div>
        <Homepage
          id={this.state.id}
          name={this.state.movieDetails.name}
          description={this.state.movieDetails.description}
          onClick={e => {
            this.fillMovieDetails(e.target.id);
          }}
        />
      </div>
    );
  }
}
export default MovieDetailsPage;
