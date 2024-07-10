import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

/** redux action */
import * as Action from '../redux/questionReducer.js';
import { getServerData } from '../helper/helper.js';

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
        const [{ questions, answers }] = await getServerData(
          'http://localhost:5000/api/questions',
          (data) => data
        );
        console.log({ questions, answers });
        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, isLoading: false }));
          setGetData((prev) => ({ ...prev, apiData: questions }));
          /** dispatch an action */
          dispatch(Action.startExamAction({ question: questions, answers }));
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
