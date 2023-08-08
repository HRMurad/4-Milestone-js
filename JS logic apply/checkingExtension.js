function isJavascriptFile(fileName) {
    if (typeof fileName !== 'string') {
        return 'provide a valid file name "string"';
    } else {
        if (fileName.toLowerCase().endsWith('.js') === true) {
            return true;
        } else {
            return false;
        }
    }
}
console.log(isJavascriptFile("index.html"));