import React, { useEffect, useState } from 'react';
import './Questions.css';
import { useDispatch, useSelector } from 'react-redux';
/** custom hook */
import { useFetchQuestions } from '../../hooks/FetchQuestions';
import { updateResult } from '../../hooks/setResult';

const Questions = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const [{ isLoading, apiData, serverError }] = useFetchQuestions();
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  useEffect(() => {
    // console.log(isLoading);
    // console.log(apiData);
    // console.log(serverError);
  });
  const onSelectHandler = (index) => {
    onChecked(index);
    setChecked(index);
    dispatch(updateResult({ trace, checked }));
  };

  const indicator = ['A', 'B', 'C', 'D'];
  if (isLoading) return <h3 className="text-light">{isLoading}</h3>;
  if (serverError)
    return <h3 className="text-light">{serverError || 'Unknown Error'}</h3>;
  return (
    <div className="questions">
      <h2 className="text-light">
        <span className="question-title">Question {questions.id} : </span>
        {questions?.question}
      </h2>
      <ul key={questions?.id}>
        {questions?.options.map((q, index) => (
          <li key={index}>
            <input
              type="radio"
              name="options"
              id={`q${index}-option`}
              value={false}
              onChange={() => onSelectHandler(index)}
            />
            <label className="text-primary" htmlFor={`q${index}-option`}>
              <span className="question-letter">{`${indicator[index]}- `}</span>
              {q}
            </label>
            <div
              className={`check ${result[trace] == index ? 'checked' : ''}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
