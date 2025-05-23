import { SJIS } from "https://code4fukui.github.io/SJIS/SJIS.js";

// from https://github.com/polygonplanet/encoding.js/blob/master/encoding.js#L410

export const FALLBACK_CHARACTER = "?".charCodeAt(0);

export function EUCJPToSJIS(data) {
  const results = [];
  const len = data && data.length;

  for (let i = 0; i < len; i++) {
    let b1 = data[i];
    if (b1 === 0x8F) {
      results[results.length] = FALLBACK_CHARACTER;
      i += 2;
    } else if (b1 > 0x8E) {
      let b2 = data[++i];
      if (b1 & 0x01) {
        b1 >>= 1;
        if (b1 < 0x6F) {
          b1 += 0x31;
        } else {
          b1 += 0x71;
        }

        if (b2 > 0xDF) {
          b2 -= 0x60;
        } else {
          b2 -= 0x61;
        }
      } else {
        b1 >>= 1;
        if (b1 <= 0x6F) {
          b1 += 0x30;
        } else {
          b1 += 0x70;
        }
        b2 -= 0x02;
      }
      results[results.length] = b1 & 0xFF;
      results[results.length] = b2 & 0xFF;
    } else if (b1 === 0x8E) {
      results[results.length] = data[++i] & 0xFF;
    } else {
      results[results.length] = b1 & 0xFF;
    }
  }

  return results;
}

// from https://github.com/polygonplanet/encoding.js/blob/master/encoding.js#L362

export function SJISToEUCJP(data) {
  const results = [];
  const len = data && data.length;

  for (let i = 0; i < len; i++) {
    let b1 = data[i];
    if (b1 >= 0xA1 && b1 <= 0xDF) {
      results[results.length] = 0x8E;
      results[results.length] = b1;
    } else if (b1 >= 0x81) {
      let b2 = data[++i];
      b1 <<= 1;
      if (b2 < 0x9F) {
        if (b1 < 0x13F) {
          b1 -= 0x61;
        } else {
          b1 -= 0xE1;
        }

        if (b2 > 0x7E) {
          b2 += 0x60;
        } else {
          b2 += 0x61;
        }
      } else {
        if (b1 < 0x13F) {
          b1 -= 0x60;
        } else {
          b1 -= 0xE0;
        }
        b2 += 0x02;
      }
      results[results.length] = b1 & 0xFF;
      results[results.length] = b2 & 0xFF;
    } else {
      results[results.length] = b1 & 0xFF;
    }
  }

  return results;
}

export const decode = (euc) => {
  const sjis = EUCJPToSJIS(euc);
  const s = SJIS.decode(new Uint8Array(sjis));
  return s;
};

export const encode = (s) => {
  const sjis = SJIS.encode(s);
  const euc = SJISToEUCJP(sjis);
  return new Uint8Array(euc);
};

export const EUC = { encode, decode, FALLBACK_CHARACTER };
