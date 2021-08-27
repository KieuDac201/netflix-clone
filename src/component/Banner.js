import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import axios from "../axios";
import requests from "../requests";
import { AppContext } from "../App";
import Detail from "./Detail";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = () => {
  const [movie, setMovie] = useState(null);
  const { state, dispatch } = useContext(AppContext);
  const [trailerUrl, setTrailerUrl] = useState("");
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await axios.get(requests.fetchTrending);
        const randomNum = Math.floor(Math.random() * data.data.results.length);
        setMovie(data.data.results[randomNum]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);
  useEffect(() => {
    if (state.dataSearch) {
      setMovie(state.dataSearch);
    }
  }, [state.dataSearch]);

  const handleClick = () => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      console.log("false");
      movieTrailer(movie?.title || movie?.name).then((url) => {
        console.log(url);
        if (url) {
          const paramsUrl = new URLSearchParams(new URL(url).search);
          setTrailerUrl(paramsUrl.get("v"));
        }
      });
    }
  };
  return (
    movie && (
      <Wrapper>
        <Container url={movie.backdrop_path}>
          <Title>{movie.title}</Title>
          <Buttons>
            <Button onClick={handleClick}>Play</Button>
            <Button>My list</Button>
          </Buttons>
          <Desc>
            {movie.overview.length > 200
              ? movie.overview.slice(0, 200) + "..."
              : movie.overview}
          </Desc>
        </Container>
        {trailerUrl && (
          <>
            <Overlay onClick={() => setTrailerUrl("")}></Overlay>
            <YouTube videoId={trailerUrl} opts={opts} className="dac" />
          </>
        )}
      </Wrapper>
    )
  );
};
const Wrapper = styled.div`
  .dac {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    z-index: 999;
  }
`;
const Container = styled.div`
  min-height: 500px;
  background: url("${(props) => baseUrl + props.url}") no-repeat;
  background-size: cover;
  background-position: center;
  padding: 70px 20px 20px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1000px) {
    min-height: 350px;
    padding: 70px 20px 20px 20px;
  }
`;
const Title = styled.div`
  font-size: 45px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 992px) {
    font-size: 30px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
`;
const Button = styled.div`
  padding: 12px 26px;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
const Desc = styled.div`
  color: #fff;
  line-height: 1.5;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.15);
  padding: 5px;
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  z-index: 5;
`;

export default Banner;
