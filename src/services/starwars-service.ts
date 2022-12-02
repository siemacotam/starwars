import axios from "axios";
import { FormModel } from "src/global";
const API_URL = "https://swapi.py4e.com/api";

class StarwarsService {
  getPerson(id: number) {
    return axios
      .get(API_URL + `/people/${id}`)
      .then((response) => JSON.stringify(response.data));
  }
  sendData(data: FormModel) {
    return axios
      .post("https://example/", data)
      .then((response) => JSON.stringify(response.data));
  }
}
export default new StarwarsService();
