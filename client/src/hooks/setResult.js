import { postServerData } from '../helper/helper';
import * as Action from '../redux/resultReducer';

export const pushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    await dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

/** insert user data */
export const usePublishResult = (resultData) => {
  const { result, userName } = resultData;
  (async () => {
    try {
      if (result != [] && !userName) throw new Error('could not get result ');
      await postServerData(
        'http://localhost:5000/api/result',
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
