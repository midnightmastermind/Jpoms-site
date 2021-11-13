import {
  RECEIVE_PROJECT, REQUEST_PROJECT
} from "../actions/types";
import _ from "lodash";
import { format } from "date-fns";

const initialState = {
  project: [],
  retrievingProject: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_PROJECT:
      return {
          ...state,
          retrievingProject: true
      }
    case RECEIVE_PROJECT:
      let project = action.project;

      return {
        ...state,
        project: project,
        retrievingProject: false
      };

    default:
      return state;
  }
}
