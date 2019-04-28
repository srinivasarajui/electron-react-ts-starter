import { IpcRenderer,DesktopCapturer, Screen,Remote,App } from 'electron';

declare global {
  interface Window {
    require: (module : string) => any  ;
  }
}

export const  ipcRenderer:IpcRenderer  = window.require('electron').ipcRenderer;
export const  desktopCapturer:DesktopCapturer  = window.require('electron').desktopCapturer;
export const  screen:Screen  = window.require('electron').screen;
export const  remote:Remote  = window.require('electron').remote;
export const  app:App  = window.require('electron').app;
export const fs = window.require('fs');
