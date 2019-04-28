import { takeEvery, call } from 'redux-saga/effects';

import { DEV_TOOLS_STATUS_MESSAGE, DevToolsStatusPayload } from './../../../common/ipc-message-utils';
import {  CLOSE_APP,updateDevToolsStatus } from './actions';
import { remote, ipcRenderer } from '../../electron.utils';
import { store } from '../../..';

function* closeAppEffect() {
  remote.getCurrentWindow().close();
  yield;
}

function registerMessages(){
  ipcRenderer.on(DEV_TOOLS_STATUS_MESSAGE,(event:any,args:DevToolsStatusPayload) => {
    store.dispatch(updateDevToolsStatus(args.isOpen));
  })
}

export const systemEffects = [
  takeEvery(CLOSE_APP, closeAppEffect),
  call(registerMessages),
];
