import React, { useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const inputRef = useRef(null);
  return (
    <div className="container">
      <h1 className="title text-light">NDT QUIZ APPLICATION</h1>
      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>
          Each question has three options.You can choose only one options.
        </li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form">
        <input className="userId" type="text" placeholder="Username*" />
      </form>
      <div className="start">
        <Link className="btn" to={'/quiz'}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Home;
