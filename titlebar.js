const { ipcRenderer, BrowserWindow } = require('electron')


window.addEventListener("load", function () {
    var botaoFechar = document.getElementById('fechar')
        botaoFechar.addEventListener('click', function() {
            ipcRenderer.send('fechar')
        })

    ipcRenderer.on('fecharOk', (event) => window.close())


    // var botaoMinimizar = document.getElementById('minimizar')
    //     botaoMinimizar.addEventListener('click', function() {
    //         ipcRenderer.send('minimizar')
    //     })
    //
    // ipcRenderer.on('minimizarOk', (event) => {
    //     event.preventDefault()
    //     window.minimize()
    // })
    //
    // ipcRenderer.on('restaurarOk', (event) => {
    //     event.preventDefault()
    //     window.show()
    // })
})
