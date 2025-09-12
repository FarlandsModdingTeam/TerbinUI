import { app, BrowserWindow } from "electron";
//import { cargarHome } from './templates/home';

let mainWindow: BrowserWindow | null = null;

function createWindow()
{
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile("index.html");
  console.log("cargarHome()");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});