const { app, BrowserWindow } = require('electron');

app.allowRendererProcessReuse = true;
app.whenReady().then(() => {
    const window = new BrowserWindow({
        title: 'App Template',
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile('./app/index.html');
});
