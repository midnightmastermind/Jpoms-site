import {
  RECEIVE_HISTORY, REQUEST_HISTORY
} from "../actions/types";
import _ from "lodash";
import { format } from "date-fns";

const initialState = {
  history: [],
  retrievingHistory: false
};
const map = {
  date: "title",
  name: "cardTitle",
  org: "cardSubtitle",
  description: "description",
  reference: "reference",
  type: "type",
  _id: "id",
  files: "files",
  tags: "tags"
}
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_HISTORY:
      return {
          ...state,
          retrievingHistory: true
      }
    case RECEIVE_HISTORY:
      let history = action.history;
      let newHistory = history.map(historyItem => {
        let date = new Date(historyItem.date);
        historyItem.date = format(date, "MMM yyyy")
        return _.mapKeys(historyItem, (value, key) => {
          return map[key];
        });
      })

      return {
        ...state,
        history: newHistory,
        retrievingHistory: false
      };

    default:
      return state;
  }
}
