import axios from 'axios';
import { baseUrl } from "../../../constants/base_urls";

const createContact = async (data) => {
  const response = await axios.post(`${baseUrl}contact`, data);
  return response.data
}

const contactService = {
  createContact
}

export default contactService;
