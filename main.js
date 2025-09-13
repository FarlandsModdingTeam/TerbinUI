const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow()
{
    const win = new BrowserWindow
    ({
        width: 800,
        height: 600,
        webPreferences: { preload: path.join(__dirname, "preload.js"), },
    });

    if (process.env.NODE_ENV === "development")
    {
        const url = "http://localhost:5173";
        win.loadURL(url).catch(() =>
        {
            setTimeout(() =>
            {
                win.loadURL(url);
            }, 3000);
        });
    }
    else
    {
        win.loadFile(path.join(__dirname, "frontend/dist/index.html"));
    }
}

app.whenReady().then(() => {
  createWindow();
});
