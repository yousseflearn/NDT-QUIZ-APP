import React from 'react';
import './Result.css';
import { Link } from 'react-router-dom';
import ResultTable from '../ResultTable/ResultTable';

import { resetAllAction } from '../../redux/questionReducer';
import { resetResultAction } from '../../redux/resultReducer';
import { useDispatch } from 'react-redux';
const Result = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(resetResultAction());
    dispatch(resetAllAction());
  };
  return (
    <>
      <div className="container">
        <h1 className="title text-light">NDT QUIZ APPLICATION</h1>
        <div className="result flex-center">
          <div className="flex">
            <span>Username :</span>
            <span className="bold">Daily Tuition</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points :</span>
            <span className="bold">50</span>
          </div>
          <div className="flex">
            <span>Total Questions :</span>
            <span className="bold">10</span>
          </div>
          <div className="flex">
            <span>Total Attempts :</span>
            <span className="bold">03</span>
          </div>
          <div className="flex">
            <span>Total Earn Points :</span>
            <span className="bold">30</span>
          </div>
          <div className="flex">
            <span>Quiz Result :</span>
            <span className="bold">Passed</span>
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
