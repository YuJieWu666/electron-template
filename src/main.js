const { app, BrowserWindow } = require('electron')

const createLoginWindow = () => {
    const loginView = new BrowserWindow({
        width: 800,
        height: 600
    })

    loginView.loadFile('./src/app/view/login/index.html')
}

app.whenReady().then(() => {
    createLoginWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createLoginWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})