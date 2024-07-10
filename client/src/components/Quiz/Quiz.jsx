import React, { useEffect, useState } from 'react';
import './Quiz.css';
import Questions from '../Questions/Questions.jsx';

/** redux store import */
import { useSelector, useDispatch } from 'react-redux';
import {
  moveNextQuestion,
  movePrevQuestion,
} from '../../hooks/FetchQuestions.js';
import { pushAnswer } from '../../hooks/setResult.js';
import { Navigate } from 'react-router-dom';

const Quiz = () => {
  const [check, setCheck] = useState(undefined);
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  // next button event handler
  const onNextHandler = () => {
    if (trace < queue.length) {
      /** update trace value by one using moveNextQuestion */
      dispatch(moveNextQuestion());

      /** insert new result */
      if (result.length <= trace) {
        dispatch(pushAnswer(check));
      }
    }
    /** reset value of checked variable */
    setCheck(undefined);
  };

  // prev button event handler
  const onPrevHandler = () => {
    if (trace > 0) {
      /** update trace value by one using movePrevQuestion */
      dispatch(movePrevQuestion());
    }
  };

  const onChecked = (check) => {
    setCheck(check);
  };

  /** finished exam after the last question */
  if (result.length && result.length >= queue.length) {
    return <Navigate to={'/result'} replace={true}></Navigate>;
  }
  return (
    <div className="container">
      <h1 className="title text-light">NDT QUIZ APPLICATION</h1>
      {/* questions sample */}
      <Questions onChecked={onChecked} />
      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrevHandler}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNextHandler}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;
