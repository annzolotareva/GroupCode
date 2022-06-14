const path = require('path');
module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
    mainPage: './mainPage/index.js',
    projectRepo: './projectRepo/index.js',
    projectPage: './projectPage/index.js',
    profilePage: './profilePage/index.js',
    editorPage: './editorPage/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    }
};
