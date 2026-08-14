export const DIRECT_IMAGE_LIMIT = 5 * 1024 * 1024;
export const MAX_IMAGE_SOURCE_SIZE = 20 * 1024 * 1024;

function canvasToBlob(canvas, quality) {
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => blob ? resolve(blob) : reject(new Error('compression_failed')),
      'image/webp',
      quality
    );
  });
}

async function decodeImage(file) {
  if (typeof createImageBitmap === 'function') {
    const bitmap = await createImageBitmap(file);
    return {
      source: bitmap,
      width: bitmap.width,
      height: bitmap.height,
      close: () => bitmap.close(),
    };
  }

  const url = URL.createObjectURL(file);
  const image = new Image();
  try {
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = reject;
      image.src = url;
    });
    return {
      source: image,
      width: image.naturalWidth,
      height: image.naturalHeight,
      close: () => URL.revokeObjectURL(url),
    };
  } catch (error) {
    URL.revokeObjectURL(url);
    throw error;
  }
}

export async function compressImage(file, { maxDimension = 4096 } = {}) {
  if (file.size <= DIRECT_IMAGE_LIMIT) return file;
  if (file.size > MAX_IMAGE_SOURCE_SIZE) throw new Error('source_too_large');

  const decoded = await decodeImage(file);
  try {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d', { alpha: true });
    if (!context) throw new Error('compression_failed');

    const maxEdge = Math.max(decoded.width, decoded.height);
    const initialScale = Math.min(1, maxDimension / maxEdge);
    const qualities = [0.88, 0.76, 0.64, 0.52, 0.4];

    for (const sizeScale of [1, 0.8, 0.64, 0.5]) {
      canvas.width = Math.max(1, Math.round(decoded.width * initialScale * sizeScale));
      canvas.height = Math.max(1, Math.round(decoded.height * initialScale * sizeScale));
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(decoded.source, 0, 0, canvas.width, canvas.height);

      for (const quality of qualities) {
        const blob = await canvasToBlob(canvas, quality);
        if (blob.size <= DIRECT_IMAGE_LIMIT) {
          const baseName = file.name.replace(/\.[^.]+$/, '') || 'favicon';
          return new File([blob], `${baseName}.webp`, { type: 'image/webp' });
        }
      }
    }

    throw new Error('compression_failed');
  } finally {
    decoded.close();
  }
}

export function compressFavicon(file) {
  return compressImage(file, { maxDimension: 1024 });
}
