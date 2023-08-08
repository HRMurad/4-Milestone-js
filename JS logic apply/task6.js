function isValidPhotoName(photoName,imageExtension) {
    if (typeof photoName !== 'string' || !Array.isArray(imageExtension)) {
        return 'please provide valid inputs';
    } else {
        for (let item of imageExtension) {
            if (photoName.toLowerCase().endsWith(item.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
}

let photo = 'image.svg';
let extensions = ['.jpg', '.JPEG', '.png', '.ico'];
console.log(isValidPhotoName(photo, extensions));