/**
 * Genera le icone PWA senza dipendenze esterne.
 * Uso: npm run icons
 */
import { deflateSync } from 'node:zlib'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const outDir = join(here, '..', 'public', 'icons')
mkdirSync(outDir, { recursive: true })

const ACCENT = [109, 59, 245]
const WHITE = [255, 255, 255]

const crcTable = (() => {
  const table = new Uint32Array(256)
  for (let n = 0; n < 256; n += 1) {
    let c = n
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
    table[n] = c >>> 0
  }
  return table
})()

function crc32(buffer) {
  let crc = 0xffffffff
  for (const byte of buffer) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}

function pngChunk(type, data) {
  const length = Buffer.alloc(4)
  length.writeUInt32BE(data.length, 0)
  const typeBuffer = Buffer.from(type, 'ascii')
  const crc = Buffer.alloc(4)
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])), 0)
  return Buffer.concat([length, typeBuffer, data, crc])
}

function encodePng(width, height, rgba) {
  const stride = width * 4
  const raw = Buffer.alloc((stride + 1) * height)
  for (let y = 0; y < height; y += 1) {
    raw[y * (stride + 1)] = 0
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, (y + 1) * stride)
  }
  const header = Buffer.alloc(13)
  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 8
  header[9] = 6
  header[10] = 0
  header[11] = 0
  header[12] = 0
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk('IHDR', header),
    pngChunk('IDAT', deflateSync(raw, { level: 9 })),
    pngChunk('IEND', Buffer.alloc(0)),
  ])
}

function insideRoundedRect(x, y, left, top, right, bottom, radius) {
  const cx = Math.max(left + radius, Math.min(x, right - radius))
  const cy = Math.max(top + radius, Math.min(y, bottom - radius))
  return (x - cx) ** 2 + (y - cy) ** 2 <= radius * radius
}

function insideTriangle(px, py, ax, ay, bx, by, cx, cy) {
  const d1 = (px - bx) * (ay - by) - (ax - bx) * (py - by)
  const d2 = (px - cx) * (by - cy) - (bx - cx) * (py - cy)
  const d3 = (px - ax) * (cy - ay) - (cx - ax) * (py - ay)
  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0
  return !(hasNeg && hasPos)
}

function colorAt(x, y, size, maskable) {
  if (!maskable && !insideRoundedRect(x, y, 0, 0, size, size, size * 0.22)) {
    return [0, 0, 0, 0]
  }

  const bubble = insideRoundedRect(
    x,
    y,
    size * 0.25,
    size * 0.27,
    size * 0.75,
    size * 0.6,
    size * 0.09,
  )
  const tail = insideTriangle(
    x,
    y,
    size * 0.35,
    size * 0.57,
    size * 0.3,
    size * 0.73,
    size * 0.47,
    size * 0.6,
  )
  if (bubble || tail) {
    const dots = [
      [0.36, 0.435],
      [0.5, 0.435],
      [0.64, 0.435],
    ]
    for (const [dx, dy] of dots) {
      if ((x - size * dx) ** 2 + (y - size * dy) ** 2 <= (size * 0.034) ** 2) {
        return [...ACCENT, 1]
      }
    }
    return [...WHITE, 1]
  }

  return [...ACCENT, 1]
}

function render(size, maskable) {
  const pixels = Buffer.alloc(size * size * 4)
  const samples = 3
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      let r = 0
      let g = 0
      let b = 0
      let a = 0
      for (let sy = 0; sy < samples; sy += 1) {
        for (let sx = 0; sx < samples; sx += 1) {
          const [cr, cg, cb, ca] = colorAt(
            x + (sx + 0.5) / samples,
            y + (sy + 0.5) / samples,
            size,
            maskable,
          )
          r += cr * ca
          g += cg * ca
          b += cb * ca
          a += ca
        }
      }
      const offset = (y * size + x) * 4
      if (a > 0) {
        pixels[offset] = Math.round(r / a)
        pixels[offset + 1] = Math.round(g / a)
        pixels[offset + 2] = Math.round(b / a)
      }
      pixels[offset + 3] = Math.round((a / (samples * samples)) * 255)
    }
  }
  return encodePng(size, size, pixels)
}

for (const size of [180, 192, 512]) {
  writeFileSync(join(outDir, `icon-${size}.png`), render(size, false))
}
writeFileSync(join(outDir, 'icon-maskable-512.png'), render(512, true))
console.log('Icone generate in public/icons')
