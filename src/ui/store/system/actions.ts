import { createAction } from 'redux-actions';

import { generateActionName } from './../store.util';

const actionName = generateActionName('System');

export const CLOSE_APP = actionName('CLOSE_APP');
export const closeApp = createAction(CLOSE_APP);

export const UPDATE_DEV_TOOLS_STATUS = actionName('UPDATE_DEV_TOOLS_STATUS');
export const updateDevToolsStatus = createAction<boolean>(UPDATE_DEV_TOOLS_STATUS);
