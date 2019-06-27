import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MovieName from "../../components/MovieName";
import { getRequestHeaders, loadTokenFromLocalStorage } from "../../utils";
import { ContentWrapper, Wrapper, MovieNameWrapper, Title } from "./styles";

class Homepage extends React.Component {
  state = {
    movieName: {
      data: []
    },
    error: null,
    id: null
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
    const { movieName } = this.state;
    return (
      <Wrapper>
        <Title>Choose movie</Title>
        <ContentWrapper>
          {movieName.data.map(id => (
            <MovieNameWrapper>
              <MovieName
                to={`/moviedetails/${id}`}
                key={id}
                id={id}
                name={id}
              />
            </MovieNameWrapper>
          ))}
        </ContentWrapper>
      </Wrapper>
    );
  }
}
export default withRouter(Homepage);
