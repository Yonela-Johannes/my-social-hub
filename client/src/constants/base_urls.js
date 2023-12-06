let apiUrl;

export const clientBaseUrl = 'https://www.yonelajohannes.engineer/'
if (process.env.NODE_ENV === 'production') {
  apiUrl = 'https://myblog-707i.onrender.com/api/';
} else {
  apiUrl = 'http://localhost:4000/api';
}

export const baseUrl = apiUrl;
