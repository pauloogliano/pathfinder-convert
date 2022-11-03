function controlWindow(win, tray) {
  function toggle() {
    if (win.isVisible()) {
      win.hide()
    } else {
      show()
    }
  }

  function show() {
    const position = getPosition()
    win.setPosition(position.x, position.y, false)
    win.show()
    win.focus()
  }

  function getPosition() {
    const winBounds = win.getBounds()
    const trayBounds = tray.getBounds()

    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (winBounds.width / 2))
    const y = Math.round(trayBounds.y + trayBounds.height + 3)

    return {x, y}
  }

  return {
    toggle
  }
}

module.exports = controlWindow
