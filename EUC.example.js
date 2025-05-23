import { EUC } from "https://code4fukui.github.io/EUC/EUC.js";

console.log(EUC.encode("あ"));
console.log(EUC.decode(new Uint8Array([164, 162])));
