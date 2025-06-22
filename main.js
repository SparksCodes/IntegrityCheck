const { app, BrowserWindow } = require("electron/main");
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 840,
    resizable: false,
    maximizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: true, 
      sandbox: false,
    },
  });

  win.loadFile("index.html");
  //win.webContents.openDevTools(); 
  win.removeMenu();
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
