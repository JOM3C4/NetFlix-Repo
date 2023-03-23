import React from 'react';

function Movie(props) {
  return (
    <div>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Movie;
