import axios from "axios";

const API_URL = "http://10.0.0.113:8080";

class PostService {
  static progress = 0;

  static async upload(file: File, rating?: number) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios.post(API_URL + "/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" },
      params: { userId: "123", placeId: "123" },
      onUploadProgress: (progressEvent) => {
        this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      },
    });
  }

  static async getForPlace(placeId: string) {
    const res = await axios.get(API_URL + "/posts/" + placeId);
    return res.data;
  }
}

export default PostService;
