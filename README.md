# EUC

An [EUC-JP](https://ja.wikipedia.org/wiki/EUC-JP) encoder and decoder in JavaScript (ES modules)

```js
import { EUC } from "https://code4fukui.github.io/EUC/EUC.js";

console.log(EUC.encode("あ"));
console.log(EUC.decode(new Uint8Array([164, 162])));
```

## privilege

- --allow-import=code4fukui.github.io

for [Deno](https://deno.com/)
```sh
deno --allow-import=code4fukui.github.io EUC.example.js
```

## test

```sh
deno test --allow-import=code4fukui.github.io
```

## browser support check

- [euc.html](https://code4fukui.github.io/EUC/euc.html) by [makeHTML.js](makeHTML.js)

## reference

- [encoding.js](https://github.com/polygonplanet/encoding.js/)
- [SJIS](https://github.com/code4fukui/SJIS/)
- [JIS](https://github.com/code4fukui/JIS/)
