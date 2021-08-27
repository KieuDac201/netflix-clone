import React, { useState } from "react";
import styled from "styled-components";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { GrClose } from "react-icons/gr";

const baseUrl = "https://image.tmdb.org/t/p/w500";

const Detail = ({ movie, setIsShowDetail }) => {
  const [trailerUrl, setTrailerUrl] = useState("");

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
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
    <Container img={movie?.backdrop_path || movie?.poster_path}>
      <Content>
        <Title>{movie?.title || movie?.name}</Title>
        <Desc>{movie?.overview}</Desc>
        <Button onClick={handleClick}>Play</Button>
      </Content>
      <Close onClick={() => setIsShowDetail(false)}>
        <GrClose />
      </Close>
      {trailerUrl && (
        <>
          <Overlay onClick={() => setTrailerUrl("")}></Overlay>
          <YouTube videoId={trailerUrl} opts={opts} className="dac" />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 50px 10px;
  min-height: 300px;
  background: rgb(0, 0, 0);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 40%;
    top: 0;
    height: 100%;
    right: 0;
    background: url("${(props) => baseUrl + props.img}") no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 768px) {
      display: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 70%;
    height: 100%;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 1) 49%,
      rgba(40, 40, 40, 1) 73%,
      rgba(203, 18, 235, 0) 100%
    );
    @media (max-width: 768px) {
      display: none;
    }
    z-index: 1;
  }

  .dac {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
  }
`;
const Content = styled.div`
  color: #fff;
  font-weight: bold;
  position: relative;
  z-index: 2;
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 24px;
`;
const Desc = styled.div`
  margin-bottom: 20px;
  line-height: 1.5;
  font-weight: normal;
`;
const Button = styled.div`
  padding: 15px 30px;
  border-radius: 4px;
  display: inline-block;
  font-weight: bold;
  background: #fff;
  color: #000;
  cursor: pointer;
`;
const Close = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 5px;
  font-weight: bold;
  font-size: 24px;
  cursor: pointer;
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

export default Detail;
