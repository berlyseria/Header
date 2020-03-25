const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/header/runtime-es5.js',
        './dist/header/runtime-es2015.js',
        './dist/header/polyfills-es5.js',
        './dist/header/polyfills-es2015.js',
        './dist/header/main-es5.js',
        './dist/header/main-es2015.js'
    ];

    const jsInIndex = [
        { name: 'index.html', from: 'src/' }
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/header-element.js');

    jsInIndex.forEach(
        async element =>
            await fs.copy(
                `${element.from}${element.name}`,
                `elements/${element.name}`,
                err => {
                    if (err) return console.error(err);
                    console.log(`${element.name} success!`);
                }
            )
    );
})();