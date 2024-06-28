import React, { useEffect, useState } from 'react';
import './Questions.css';
import data from '../../database/data';

const Questions = () => {
  const [checked, setChecked] = useState(undefined);
  useEffect(() => {
    // console.log(data);
  }, []);
  const onSelectHandler = () => {
    // console.log('button radio change');
  };
  const question = data[1];
  return (
    <div className="questions">
      <h2 className="text-light">{question.question}</h2>
      <ul key={question.id}>
        {question.options.map((q, index) => (
          <li key={index}>
            <input
              type="radio"
              name="options"
              id={`q{index}-option`}
              value={false}
              onChange={onSelectHandler}
            />
            <label className="text-primary" htmlFor={`q{index}-option`}>
              {q}
            </label>
            <div className="check"></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Questions;
