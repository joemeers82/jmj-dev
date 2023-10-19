//clean up block json
export function parseObjString(jsonStr) {
  const rawData = JSON.parse(jsonStr);
  const cleanData = {};
  for (const key in rawData) {
    if (!key.startsWith("_")) {
      cleanData[key] = rawData[key];
    }
  }
  return cleanData;
}

//extracts image url from dynamic block string for project
export function extractImageUrl(str) {
  if (!str) return null;
  const regex =
    /<figure>[\s\S]*?<img[^>]*src="([^"]+)"[^>]*>[\s\S]*?<\/figure>/;
  const match = str.match(regex);
  return match ? match[1] : null;
}
