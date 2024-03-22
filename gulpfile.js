const { src, dest } = require('gulp');

async function webpImage() {
    const imagewebp = await import('gulp-webp');

    return src('images/src/*.{jpg,png}')
        .pipe(imagewebp.default())
        .pipe(dest('images/webp'));
}

exports.default = webpImage;