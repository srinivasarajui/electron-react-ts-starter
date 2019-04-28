
import { app, BrowserWindow,ipcMain } from "electron";
import * as path from "path";

const isDev:boolean = require("electron-is-dev");
let mainWindow: Electron.BrowserWindow | null;

function createWindow():void {
  mainWindow = new BrowserWindow({ height: 500, width: 500});
  // Some use full configs
  //mainWindow = new BrowserWindow({ height: 500, width: 500,transparent: true, frame: false });
  // mainWindow.setAlwaysOnTop(true);
  // mainWindow.setVisibleOnAllWorkspaces(true);
  // mainWindow.setContentProtection(true)
  mainWindow.loadURL(
    isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "./index.html")}`
    );

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
