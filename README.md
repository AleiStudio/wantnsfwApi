# use
```js
const want = require('wantnsfwapi');

async function obtenerImagen() {
    try {
        const waifuImage = await want.wantapiwaifus();
        console.log("Imagen de waifu:", waifuImage);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

obtenerImagen();
```