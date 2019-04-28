import { UPDATE_DEV_TOOLS_STATUS } from './actions';

export interface SystemState {
  isDevToolsOpen: boolean;
}

interface UpdateDevToolsStatusAction {
  type: typeof UPDATE_DEV_TOOLS_STATUS;
  payload: boolean;
}

export type SystemActionTypes = UpdateDevToolsStatusAction;
