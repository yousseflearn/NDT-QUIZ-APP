import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import CheckUserExist from './helper/CheckUserExist';

const App = () => {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/quiz"
            element={
              <CheckUserExist>
                <Quiz />
              </CheckUserExist>
            }
          />
          <Route
            path="/result"
            element={
              <CheckUserExist>
                <Result />
              </CheckUserExist>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
