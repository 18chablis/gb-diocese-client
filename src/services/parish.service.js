import axios from "axios";
const token = await localStorage.getItem("user-token");
class ParishService {
  // get service
  async getParishes() {
    return axios.get(`${process.env.REACT_APP_API_URL}/api/v1/parishes`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  }
  // post service
  async createParish(parishData) {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/v1/parish`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      data: parishData,
    });
  }

  //   delete service
  async deleteParish(id) {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}/api/v1/parish/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    });
  }
}

export default new ParishService();
