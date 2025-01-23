const fs = require('fs').promises;
const path = require('path');

async function reddir(rootdir) {
    rootdir = rootdir || path.resolve(__dirname);
    const files = await fs.readdir(rootdir);
    walk(files, rootdir);
}

async function walk(files, rootdir) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootdir, file)
        const stats = await fs.stat(fileFullPath);

        if (/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;
        
        if(stats.isDirectory()) {
            reddir(fileFullPath);
            continue;
        }
        
        if (!/\.css/g.test(fileFullPath) && !/\.html/g.test(fileFullPath)) continue;

        console.log(fileFullPath, stats.isDirectory());
    }
}

reddir('C:/Users/lfurl/OneDrive/Documentos/repositoriosGitHub/CursoJS');