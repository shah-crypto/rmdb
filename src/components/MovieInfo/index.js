import React from "react";
import PropTypes from "prop-types";
// components
import Thumb from "../Thumb";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import NoImage from "../../images/no_image.jpg";

import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => {
  const date = movie.release_date.slice(0, 7).split("-");
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">
                {parseFloat(movie.vote_average.toFixed(1))}
              </div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <div className="rating-directors">
            <div className="genre">
              <h3>GENRE{movie.genres.length > 1 ? "S" : ""}</h3>
              <div>
                {movie.genres.length
                  ? movie.genres.map((genre, index) => (
                      <span key={genre.id}>
                        {genre.name}
                        {index < movie.genres.length - 1 ? ", " : ""}
                      </span>
                    ))
                  : "N/A"}
              </div>
            </div>
            <div className="genre">
              <h3>RELEASE DATE</h3>
              <div>{`${date[1]}/${date[0]}`}</div>
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
};

export default MovieInfo;
