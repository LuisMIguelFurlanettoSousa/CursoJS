const fs = require('fs').promises
const path = require('path')

async function readdir(rootDir) {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir)
    walk(files, rootDir) 
}

async function walk(files, rootDir) { 
    for(let file of files){
        const fileFullPath = path.resolve(rootDir, file)
        const status = await fs.stat(fileFullPath)
        if(/\.git/g.test(fileFullPath) || /node_modules/.test(fileFullPath)) continue

        if(status.isDirectory()) {
            readdir(fileFullPath)
            continue
        }

        if(/\.css$/g.test(fileFullPath) || /\.html$/g.test(fileFullPath)) continue
        console.log(fileFullPath)
    }
}

readdir('C:/Users/lfurl/OneDrive/Documentos/repositoriosGitHub/CursoJS1/CursoJS')