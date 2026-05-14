# EUC

JavaScript (ESモジュール) による [EUC-JP](https://en.wikipedia.org/wiki/Extended_Unix_Code#EUC-JP) エンコーダおよびデコーダです。

## 特徴
- EUC-JPテキストのエンコードおよびデコード
- Denoをサポート (`--allow-import=code4fukui.github.io` を指定)
- テストスイート同梱

## 使い方
```js
import { EUC } from "https://code4fukui.github.io/EUC/EUC.js";

console.log(EUC.encode("あ"));
console.log(EUC.decode(new Uint8Array([164, 162])));
```

## テスト
```sh
deno test --allow-import=code4fukui.github.io
```

## ライセンス
MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
