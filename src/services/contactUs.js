
import axios from "axios";
axios.defaults.baseURL = "";


const contactUs = async (userData) => {
    try {
      const { data } = await axios.post("/contactUs", userData);
      return data;
    } catch (error) {
      console.error(error);
    }
  };