import {
  RECEIVE_HISTORY, REQUEST_HISTORY
} from "../actions/types";
import {getTreeFromFlatData} from "react-sortable-tree";
const initialState = {
  history: [],
  retrievingHistory: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HISTORY:
      return {
          ...state,
          retrievingHistory: true
      }
    case RECEIVE_HISTORY:
      return {
        ...state,
        history: [action.history],
        retrievingHistory: false
      };

    default:
      return state;
  }
}