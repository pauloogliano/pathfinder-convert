const { Tray } = require('electron')
const { resolve } = require('path')

const iconPath = resolve(__dirname, '../', 'assets', 'images', 'anchor-point.png')

function createTray() {
  const tray = new Tray(iconPath)
  tray.setToolTip('Pathfinder')

  return tray
}

module.exports = createTray()
