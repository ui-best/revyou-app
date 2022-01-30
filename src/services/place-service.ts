import axios from "axios";

const API_URL = "https://api.revyou.digital";

class PlaceService {
  static async add(name: string, address: string, city: string, postalCode: string, iconData?: string) {
    const res = await axios.post(API_URL + "/place/add", { name, address, city, postalCode, iconData });
    return res.data;
  }

  static async get(id: string) {
    const res = await axios.get(API_URL + `/place/${id}`);
    return res.data;
  }

  static async getSuggested() {
    const res = await axios.get(API_URL + `/places/suggested`);
    return res.data;
  }
}

export default PlaceService;
