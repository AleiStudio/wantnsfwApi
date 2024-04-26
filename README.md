# use
```js
const want = require('wantnsfwapi');

async function obtenerImagen() {
    try {
        const waifuImage = await want.wantapiwaifus();
        console.log("Imagen de waifu:", waifuImage);
        
        const memeImage = await want.wantapimemes();
        console.log("Imagen de meme:", memeImage);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

obtenerImagen();
```