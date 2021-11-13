import axios from "axios";

import {
  REQUEST_PROJECT,
  RECEIVE_PROJECT,
  GET_ERRORS
} from "./types";

const env = process.env.NODE_ENV; // current environment

export const app = axios.create({
  baseURL:
    env === 'production'
      ? 'http://jpoms.com/api/' // production
      : 'http://localhost:3001/api/', // development
});

export const fetchProject = dispatch => {
  return dispatch => {
    dispatch(requestProject())
    return app
    .get("/project")
    .then(res => {
      console.log(res);
      const project = res.data;
      dispatch(receiveProject(project));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
    })
    );
   }
};

export const updateProject = project => dispatch => {
  let requestUrl;
  if (project._id) {
        requestUrl = '/api/project/' + project._id + '/update';
  } else {
       requestUrl = '/api/project/create';
  }
  axios
    .post(requestUrl, project)
    .then(res => {
      dispatch(fetchProject());
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );

};
export const receiveProject = project => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

export const requestProject = () => {
    return {
        type: REQUEST_PROJECT
    };
};

export default {
  fetchProject,
  receiveProject
};
