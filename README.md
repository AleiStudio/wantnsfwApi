# Importante
 - Cómo conseguir un token: Debes unirte al servidor de Discord: https://discord.gg/ywVG5WjRg7, entrar en el canal "Conseguir token" y escribir "token". El bot te enviará un mensaje directo (DM) con el token.

 * Esto solo incluye a la API oficial de apiwant.xyz
 
 [Discord](https://discord.gg/ywVG5WjRg7)

# Lista
 - **Memes**
  <details>
  - wantapimemes
  </details>

 - **Animado**
  <details>
  - wantapiwaifus
  - wantapinekonsfw
  - wantapiasshentai
  </details>

 - **Reales**
  <details>
 - wantapirealbonitas
 - wantapirealboobs
 - wantapirealcosplay
  </details>

 ## Ejemplo

```js
const { apiwant } = require('wantnsfwapi');

apiwant.setToken('Tu_token');

apiwant.wantapiasshentai()
  .then(url => console.log('Imagen URL:', url))
  .catch(error => console.error(error));
```

# AnimeWant Buscar

* Necesarios
- Token
- Nombre del anime

## Ejemplo

```js
const { apianimewant } = require('wantnsfwapi');
const nombreAnime = 'naruto'; 
const tokenanime = 'Tu_token';

apianimewant.wantanime(nombreAnime, tokenanime)
  .then(data => console.log('Anime Data:', data))
  .catch(error => console.error(error));
```

# NO Token(Authorization)

# Tiktok

## Ejemplo

```js
const { apitiktokwant } = require('wantnsfwapi');

const tiktokUrl = 'URL_DEL_TIKTOK';

apitiktokwant.wantTiktok(tiktokUrl)
  .then(result => console.log('TikTok Data:', result))
  .catch(error => console.error('Error al obtener los datos:', error));
```

# WantNsfw V2

# Lista
 - **NSFW**
  <details>
  - wantapiwaifuv2
  - wantapiassv2
  - wantapibikinisv2
  - wantapidogv2
  - wantapiwaifuexoticav2
  - wantapiboobsv2
  - wantapiinfluencersv2
  - wantapicosplayv2
  - wantapifemboysv2
  - wantapischoolgirlsv2
  </details>

```js

const { wantnsfwv2 } = require('wantnsfwapi');

wantnsfwv2.wantapiinfluencersv2()
  .then(url => console.log('Imagen URL:', url))
  .catch(error => console.error(error));

```

# WantPicsx

# Lista

 - **NSFW**
  <details>
   - wantwaifux,
   - wantnekox,
   - wanttrapx,
   - wantblowjobx
  </details>

  - **SFW**
  <details>
   - wantwaifuxsfw,
   - wantnekoxsfw,
   - wantshinobuxsfw,
   - wantmeguminxsfw,
   - wantbullyxsfw,
   - wantcuddlexsfw,
   - wantcryxsfw,
   - wanthugxsfw,
   - wantawooxsfw,
   - wantkissxsfw,
   - wantlickxsfw,
   - wantpatxsfw,
   - wantsmugxsfw,
   - wantbonkxsfw,
   - wantyeetxsfw,
   - wantslapxsfw,
   - wantkillxsfw,
   - wantkickxsfw,
   - wanthappyxsfw,
   - wantdancexsfw,
   - wantcringexsfw
  </details>

```js
const { wantpicsxsfw, wantpicsx } = require('wantnsfwapi');

wantpicsxsfw.wantwaifuxsfw()
    .then(url => console.log('SFW Image URL:', url))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));

wantpicsx.wantwaifux()
    .then(url => console.log('NSFW Image URL:', url))
    .catch(error => console.error('Error fetching NSFW waifu image:', error));
```

# Pagina
[Apiweb](https://apiwant.xyz/)

# Documetacion
[Doc](https://doc.apiwant.xyz/)

[github](https://github.com/AleiStudio)  [bot-discord](https://discord.com/oauth2/authorize?client_id=1083889866955309106&permissions=8&scope=bot%20) [correo](dksiao352@gmail.com)