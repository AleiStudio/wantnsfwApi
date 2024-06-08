const { wantsafe } = require('../wantsafe/index');

wantsafe.wantsafex('school_uniform', 2)
    .then(urls => {
        urls.forEach(url => {
            console.log('Image URL:', url);
        });
    })
    .catch(error => console.error('Error fetching images:', error));
