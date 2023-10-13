import axios from 'axios';
import { baseUrl } from "../../../constants/base_urls";

const bookSession = async (session) => {
  const response = await axios.post(`${baseUrl}book-session`, session);
  return response.data
}

const bookSessionService = {
  bookSession
}

export default bookSessionService;
