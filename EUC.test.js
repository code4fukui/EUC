import * as t from "https://deno.land/std/testing/asserts.ts";
import { EUC } from "./EUC.js";

Deno.test("simple", () => {
  const bina = new Uint8Array([164, 162]);
  t.assertEquals(EUC.encode("あ"), bina);
  t.assertEquals(EUC.decode(bina), "あ");
});
Deno.test("ascii", () => {
  const bina = new Uint8Array([65]);
  t.assertEquals(EUC.encode("A"), bina);
  t.assertEquals(EUC.decode(bina), "A");
});
Deno.test("error", () => {
  const bina = new Uint8Array([0x8F]);
  t.assertEquals(EUC.decode(bina), "?");
  t.assertEquals(EUC.FALLBACK_CHARACTER, "?".charCodeAt(0));
});
