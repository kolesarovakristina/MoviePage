import React from "react";
import axios from "axios";
import MovieName from "../../components/MovieName";

class Homepage extends React.Component {
  state = {
    movieName: []
  };
  componentDidMount() {
    this.fillMovieName();
  }
  fillMovieName = async () => {
    try {
      const response = await axios.get(
        "http://wdassignment.devfl.com/api/movies"
      );
      this.setState({
        movieName: response.data
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <div>
        {this.state.movieName.map(({ title }) => (
          <MovieName title={title} />
        ))}
      </div>
    );
  }
}
export default Homepage;
