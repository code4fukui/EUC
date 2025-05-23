# EUC

```js
import { EUC } from "https://code4fukui.github.io/EUC/EUC.js";

console.log(EUC.encode("あ"));
console.log(EUC.decode(new Uint8Array([164, 162])));
```

```sh
deno --allow-import EUC.example.js
```

## privilege

- --allow-import

## test

```sh
deno test --allow-import
```

## reference

- [encoding.js](https://github.com/polygonplanet/encoding.js/)
- [SJIS](https://github.com/code4fukui/SJIS/)
- [JIS](https://github.com/code4fukui/JIS/)
