const container = document.getElementById("images-container");

function getImagesURL(count = 1) {
  const result = [];
  const baseSize = 300;
  for (let index = 0; index < count; index++) {
    const size = `${baseSize + index}x${baseSize + index}`;
    result.push(`https://source.unsplash.com/random/${size}`);
  }
  return result;
}

function createImgHTML(src) {
  return `<img src=${src} class="img" />`;
}

getImagesURL(15).forEach((url) => (container.innerHTML += createImgHTML(url)));