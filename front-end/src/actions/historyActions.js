import axios from "axios";

import {
  REQUEST_HISTORY,
  RECEIVE_HISTORY,
  GET_ERRORS
} from "./types";


export const fetchHistory = dispatch => {
  return dispatch => {
    dispatch(requestHistory())
    return axios
    .get("http://joshpoms.com:3001/history")
    .then(res => {
      console.log(res);
      const history = res.data;
      dispatch(receiveHistory(history));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
   }
};

export const updateHistory = history => dispatch => {
  let requestUrl;
  if (history._id) {
        requestUrl = '/api/history/' + history._id + '/update';
  } else {
       requestUrl = '/api/history/create';
  }
  axios
    .post(requestUrl, history)
    .then(res => {
      dispatch(fetchHistory());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};
export const receiveHistory = history => {
  return {
    type: RECEIVE_HISTORY,
    history
  };
};

export const requestHistory = () => {
    return {
        type: REQUEST_HISTORY
    };
};

export default {
  fetchHistory,
  receiveHistory
};
