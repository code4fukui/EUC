import { EUC } from "./EUC.js";

const s = `<!DOCTYPE html>
<html>
<head>
  <meta charset="EUC-JP">
  <title>テストページ</title>
</head>
<body>
  <h1>こんにちは、世界！</h1>
  <p>これはEUC-JPで書かれたHTMLです。</p>
</body>
</html>
`;
await Deno.writeFile("euc.html", EUC.encode(s));
