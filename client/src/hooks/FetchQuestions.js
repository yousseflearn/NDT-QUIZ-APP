import { useEffect, useState } from 'react';
import data from '../database/data.js';
import { useDispatch } from 'react-redux';

/** redux action */
import * as Action from '../redux/questionReducer.js';

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestions = () => {
  const [getData, setGetData] = useState({
    isLoading: true,
    apiData: [],
    serverError: null,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    setGetData((prev) => ({ ...prev, isLoading: true }));

    /** async function to fetch data from backend */
    (async () => {
      try {
        let question = await data;
        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: question }));
          /** dispatch an action */
          dispatch(Action.startExamAction(question));
        } else {
          throw new Error('No Question Available');
        }
      } catch (error) {
        setGetData((prev) => ({ ...prev, isLoading: false }));
        setGetData((prev) => ({ ...prev, serverError: error }));
      }
    })();
  }, [dispatch]);
  return [getData, setGetData];
};

/** moveAction dispatch function */
export const moveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (error) {
    console.log(error);
  }
};

/** movePrevAction dispatch function */
export const movePrevQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (error) {
    console.log(error);
  }
};
