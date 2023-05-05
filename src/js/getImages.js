import axios from 'axios';
export { getImages };

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '36081061-e4bbb4cf9ad87275ca2b28526';
const imageType = 'photo';
const orientation = 'horizontal';
const safeSearch = true;

async function getImages(query, page, perPage) {
  const response = await axios.get(
    `?key=${KEY}&q=${query}&image_type=${imageType}&orientation=${orientation}&safesearch=${safeSearch}&page=${page}&per_page=${perPage}`
  );
  return response;
}