const { BrowserWindow } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 250,
    show: false,
    frame: false,
    resizable: false,
    fullscreen: false,
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('blur', () => mainWindow.hide())

  return mainWindow
}

module.exports = createWindow()
