const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "#150000ff",
    backgroundMaterial: 'acrylic',
    maximizable: false,
    icon: 'assets/cloud.ico',
    titleBarStyle: 'hidden',
	titleBarOverlay: {
		color: '#ffffff00',
		symbolColor: '#ffffff',
		height: 50
	},
	webPreferences: {
		preload: path.join(__dirname, 'preload.js'),
		contextIsolation: true,  // Keep this true for security
		sandbox: false,         // Set to false to allow Node.js modules in preload
		nodeIntegration: false  // Keep this false for security
	}
  })

  win.loadFile('index.html')
}


app.whenReady().then(() => {
  createWindow();
})

// Add these standard Electron app event handlers
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})