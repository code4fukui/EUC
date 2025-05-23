import { EUC } from "./EUC.js";

console.log(EUC.encode("あ"));
console.log(EUC.decode(new Uint8Array([164, 162])));
