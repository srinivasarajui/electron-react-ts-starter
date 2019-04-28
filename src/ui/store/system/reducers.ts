import { UPDATE_DEV_TOOLS_STATUS } from './actions';
import {  SystemState, SystemActionTypes  } from "./types";

const initialState: SystemState = {
  isDevToolsOpen: false
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_DEV_TOOLS_STATUS: {
      return {
        ...state,
        isDevToolsOpen: action.payload
      };
    }
    default:
      return state;
  }
}
