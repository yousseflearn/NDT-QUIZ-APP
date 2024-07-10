import React, { useEffect } from 'react';
import './Result.css';
import { Link } from 'react-router-dom';
import ResultTable from '../ResultTable/ResultTable';
import {
  attempt_number,
  earnPoint_number,
  flagResult,
} from '../../helper/helper';
import { resetAllAction } from '../../redux/questionReducer';
import { resetResultAction } from '../../redux/resultReducer';
import { useDispatch, useSelector } from 'react-redux';
import { usePublishResult } from '../../hooks/setResult.js';
const Result = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(earnPoints);
  });

  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);
  const onClickHandler = () => {
    dispatch(resetResultAction());
    dispatch(resetAllAction());
  };
  const totalPoints = queue.length * 10;
  const attempts = attempt_number(result);
  const earnPoints = earnPoint_number(result, answers, 10);
  const flag = flagResult(totalPoints, earnPoints);

  /** store user result */
  usePublishResult({
    result,
    userName: userId,
    attempts,
    points: earnPoints,
    achieved: flag ? 'Passed' : 'Failed',
  });

  return (
    <>
      <div className="container">
        <h1 className="title text-light">NDT QUIZ APPLICATION</h1>
        <div className="result flex-center">
          <div className="flex">
            <span>Username :</span>
            <span className="bold">{userId || ''}</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points :</span>
            <span className="bold">{totalPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Total Questions :</span>
            <span className="bold">{queue.length || 0}</span>
          </div>
          <div className="flex">
            <span>Total Attempts :</span>
            <span className="bold">{attempts || 0}</span>
          </div>
          <div className="flex">
            <span>Total Earn Points :</span>
            <span className="bold">{earnPoints || 0}</span>
          </div>
          <div className="flex">
            <span>Quiz Result :</span>
            <span
              className="bold"
              style={{ color: `${flag ? '#2aff66' : '#ff2a95'}` }}
            >
              {flag ? 'Passed' : 'Failed'}
            </span>
          </div>
        </div>
        <div className="start">
          <Link className="btn" to="/" onClick={onClickHandler}>
            Restart
          </Link>
        </div>
      </div>
      <div className="container">
        <ResultTable />
      </div>
    </>
  );
};

export default Result;
