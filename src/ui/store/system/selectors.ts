import { AppState } from './../index';

const selectSystemState = (state: AppState) => state.system;

export const isDevToolsOpen = (state: AppState) => selectSystemState(state).isDevToolsOpen
