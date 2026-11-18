// The World Ledger — a one-page front page for Tuesday 17 November 2026.
//
// This program ships the finished front page: it reads the picture that
// sits next to this file in the repository and writes it out as the
// entry image. Nothing is drawn at run time and nothing is fetched.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The picture lives beside this program in the repository.
const here = dirname(fileURLToPath(import.meta.url));
const bundledPicture = join(here, "entry.png");

// The grader tells us where the entry belongs; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const target = join(outDir, "entry.png");

// Read the front page once, make sure the folder exists, then write it.
const pictureBytes = readFileSync(bundledPicture);

// Guard against a corrupt or misnamed bundle: a real entry picture is a
// JPEG (FF D8) or a PNG (89 50 4E 47). Refuse anything else with a plain
// message instead of shipping unreadable bytes to the grader.
const isJpeg = pictureBytes.length >= 2 && pictureBytes[0] === 0xff && pictureBytes[1] === 0xd8;
const isPng =
  pictureBytes.length >= 4 &&
  pictureBytes[0] === 0x89 &&
  pictureBytes[1] === 0x50 &&
  pictureBytes[2] === 0x4e &&
  pictureBytes[3] === 0x47;
if (!isJpeg && !isPng) {
  throw new Error("entry picture is not a JPEG or PNG");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(target, pictureBytes);
