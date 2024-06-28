import React, { useEffect } from 'react';
import './Quiz.css';
import Questions from '../Questions/Questions.jsx';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux';
import {
  moveNextQuestion,
  movePrevQuestion,
} from '../../hooks/FetchQuestions.js';

const Quiz = () => {
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(trace);
  });

  // next button event handler
  const onNextHandler = () => {
    console.log('onclick next ');
    if (trace < queue.length - 1) {
      /** update trace value by one using moveNextQuestion */
      dispatch(moveNextQuestion());
    }
  };

  // prev button event handler
  const onPrevHandler = () => {
    console.log('onClick prev');
    if (trace > 0) {
      /** update trace value by one using movePrevQuestion */
      dispatch(movePrevQuestion());
    }
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
