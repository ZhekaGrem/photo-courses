const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const widths = [48, 128, 256, 384, 640, 768, 1024, 1280, 1600];
const root = process.cwd();
async function collect(folder) {
  const entries = await fs.readdir(folder, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(folder, entry.name);
      if (entry.isDirectory()) return collect(full);
      if (!/\.(png|jpe?g|webp)$/i.test(entry.name)) return [];
      return [{ file: full, src: path.relative(path.join(root, 'public'), full) }];
    })
  );
  return nested.flat();
}
async function main() {
  const images = await collect(path.join(root, 'public/assets'));
  images.push({ file: path.join(root, 'src/app/assets/img/larg.jpg'), src: 'hero.jpg' });
  let count = 0;
  const queue = [...images];
  // Four concurrent source files, with serial widths to limit build memory.
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      while (queue.length) {
        const image = queue.shift();
        const source = await fs.stat(image.file);
        for (const width of widths) {
          const target = path.join(root, 'public/_media', String(width), image.src + '.webp');
          const previous = await fs.stat(target).catch(() => null);
          if (previous && previous.mtimeMs >= source.mtimeMs) continue;
          await fs.mkdir(path.dirname(target), { recursive: true });
          await sharp(image.file)
            .rotate()
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(target);
          count++;
        }
      }
    })
  );
  console.log(`Responsive images: ${images.length} sources, ${count} files generated.`);
}
main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
