/**
 * Extracts base64-encoded images from public/images-b64/*.b64
 * and writes them as binary JPEGs to public/images/.
 * Runs automatically before `next build` (see package.json).
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join, basename } from "path";

const SRC = join(process.cwd(), "public", "images-b64");
const DEST = join(process.cwd(), "public", "images");

mkdirSync(DEST, { recursive: true });

let count = 0;
for (const file of readdirSync(SRC)) {
  if (!file.endsWith(".b64")) continue;
  const name = basename(file, ".b64");
  const b64 = readFileSync(join(SRC, file), "utf-8").trim();
  writeFileSync(join(DEST, name), Buffer.from(b64, "base64"));
  count++;
  console.log(`extract-images: wrote public/images/${name}`);
}

if (count === 0) {
  console.log("extract-images: no .b64 files found, skipping");
} else {
  console.log(`extract-images: done (${count} images)`);
}
