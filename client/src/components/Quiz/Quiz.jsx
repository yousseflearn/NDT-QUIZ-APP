import React from 'react';
import './Quiz.css';
import Questions from '../Questions/Questions.jsx';

const Quiz = () => {
  // next button event handler
  const onNextHandler = () => {
    console.log('onclick next ');
  };

  // prev button event handler
  const onPrevHandler = () => {
    console.log('onClick prev');
  };

  return (
    <div className="container">
      <h1 className="title text-light">NDT QUIZ APPLICATION</h1>
      {/* questions sample */}
      <Questions />
      <div className="grid">
        <button className="btn prev" onClick={onPrevHandler}>
          Prev
        </button>
        <button className="btn next" onClick={onNextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
