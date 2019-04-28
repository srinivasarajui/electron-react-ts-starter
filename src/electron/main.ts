import { DevToolsStatusPayload, DEV_TOOLS_STATUS_MESSAGE } from './../common/ipc-message-utils';
import { app, BrowserWindow } from "electron";
import * as path from "path";

const isDev:boolean = require("electron-is-dev");

let mainWindow: Electron.BrowserWindow | null;

const sendDevToolsStatus = (mainWindow: BrowserWindow|null,isOpen :boolean) => {
   if(mainWindow){
    const payLoad:DevToolsStatusPayload = {
      isOpen
    }
    mainWindow.webContents.send(DEV_TOOLS_STATUS_MESSAGE,payLoad)
   }

}
function createWindow():void {
  let mainWindow:BrowserWindow|null = new BrowserWindow({ height: 500, width: 500,webPreferences: {nodeIntegration: true}});
  // Some use full configs
  //mainWindow = new BrowserWindow({ height: 500, width: 500,transparent: true, frame: false });
  // mainWindow.setAlwaysOnTop(true);
  // mainWindow.setVisibleOnAllWorkspaces(true);
  // mainWindow.setContentProtection(true)
  mainWindow.loadURL(
    isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../index.html")}`
    );
  if( isDev){
    mainWindow.webContents.openDevTools();
    sendDevToolsStatus(mainWindow,true);
  }


  mainWindow.webContents.on('devtools-opened', () => {
    sendDevToolsStatus(mainWindow,true);
});
mainWindow.webContents.on('devtools-closed', () => {
  sendDevToolsStatus(mainWindow,false);
});
  mainWindow.on("closed", () => { mainWindow = null;});

}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
   if (mainWindow === null) {
    createWindow();
  }
});
