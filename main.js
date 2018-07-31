const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

//listen for the app to be ready

app.on('ready', function(){
    // Create new window
    mainWindow = new BrowserWindow({
        titleBarStyle: 'hidden',
        scrollbar: 'hidden',
        width: 1920,
        height: 1080,
        minWidth: 750,
        minHeight: 650,
        show: false
    });
    splash = new BrowserWindow({width: 810, height: 610, transparent: true, frame: false, alwaysOnTop: true});
    splash.loadURL(`file://${__dirname}/includes/splash.html`);
    //Load html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'includes/login.html'),
        protocol: 'file',
        slashes: true
    }));
    mainWindow.once('ready-to-show', () => {
        splash.destroy();
        mainWindow.show();
      });
});

