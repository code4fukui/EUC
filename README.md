# EUC

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An [EUC-JP](https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP) encoder and decoder in JavaScript (ES modules).

## Features
- Encode and decode EUC-JP text
- Supports Deno with `--allow-import=code4fukui.github.io`
- Test suite included

## Usage
```js
import { EUC } from "https://code4fukui.github.io/EUC/EUC.js";

console.log(EUC.encode("あ"));
console.log(EUC.decode(new Uint8Array([164, 162])));
```

## Test
```sh
deno test --allow-import=code4fukui.github.io
```

## License
MIT License — see [LICENSE](LICENSE).