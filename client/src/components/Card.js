import React from 'react';

const Card = props => (
  <div className="card-container">
    <h3>Name: {props.student.name}</h3>
    <p>Grade: {props.student.grade}</p>
    <h3>Scores for each subject:</h3>
    {props.student.scores.map(score => {
      return (
        <p key={score.subject}>
          {score.subject} : {score.value}
        </p>
      );
    })}
  </div>
);

export default Card;
