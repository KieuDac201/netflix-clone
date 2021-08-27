import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "../axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import posterError from "../images/error/500x750.jpg";
import backdropError from "../images/error/500x281.jpg";
import Detail from "./Detail";

const baseUrl = "https://image.tmdb.org/t/p/w500";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "none",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  speed: 500,
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />,
      },
    },
  ],
};

const Row = ({ title, fetchUrl, large }) => {
  const [movies, setMovies] = useState([]);
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [contentDetail, setContentDetail] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const data = await axios.get(fetchUrl);
        setMovies(data.data.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchMovies();
  }, []);

  const handleClick = (movie) => {
    setContentDetail(movie);
    setIsShowDetail(true);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <List>
        <Slider {...settings}>
          {movies.map((movie) => (
            <Item
              onClick={() => handleClick(movie)}
              large={large}
              src={
                large
                  ? movie.poster_path
                    ? baseUrl + movie.poster_path
                    : posterError
                  : movie.backdrop_path
                  ? baseUrl + movie.backdrop_path
                  : backdropError
              }
              key={movie.id}
              alt={movie.title}
            />
          ))}
        </Slider>
      </List>
      {isShowDetail && (
        <Detail movie={contentDetail} setIsShowDetail={setIsShowDetail} />
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const List = styled.div`
  margin: 10px 10px;
`;
const Item = styled.img`
  object-fit: cover;
  cursor: pointer;
  padding: 5px;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s ease;
  }
`;

export default Row;
