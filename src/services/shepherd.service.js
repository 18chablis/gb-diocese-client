import axios from "axios";
const token = await localStorage.getItem("user-token");
class ShepherdService {
  // get service
  async getShepherds() {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/v1/shepherds`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // post service
  async createShepherd(shepherdData) {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/v1/shepherd`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      data: shepherdData,
    });
  }

  //   delete service
  async deleteShepherd(id) {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/v1/shepherd/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
  }
}

export default new ShepherdService();
