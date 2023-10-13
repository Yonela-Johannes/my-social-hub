import axios from 'axios';
import { baseUrl } from "../../../constants/base_urls";

export const createContact = async (data) => {
  const response = await axios.post(`${baseUrl}contacts`, data);
  return response.data
}

const contactService = {
  createContact
}

export default contactService;
