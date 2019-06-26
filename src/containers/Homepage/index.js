import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MovieName from "../../components/MovieName";
import { getRequestHeaders, loadTokenFromLocalStorage } from "../../utils";
import Wrapper from "./styles";
class Homepage extends React.Component {
  state = {
    movieName: {
      data: []
    },
    error: null,
    id: ""
  };
  componentDidMount() {
    const tokenFromStorage = loadTokenFromLocalStorage();
    if (tokenFromStorage) {
      this.props.history.push("/homepage");
      this.fillMovieName();
    } else {
      this.props.history.push("/");
    }
  }
  fillMovieName = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://wdassignment.devfl.com/api/movies",
        headers: getRequestHeaders()
      });
      this.setState({ movieName: response.data, error: null });
    } catch (err) {
      if (err.response.status) {
        this.setState({
          error: "Something went wrong.Try again."
        });
      }
    }
  };

  render() {
    console.log("pica", this.state.id);
    const { onClick } = this.props;
    return (
      <div>
        {this.state.movieName.data.map(item => (
          <MovieName
            key={item}
            id={item}
            title={item}
            to={`/movieDetails/${this.state.id}`}
            onClick={onClick}
          />
        ))}
      </div>
    );
  }
}
export default withRouter(Homepage);
