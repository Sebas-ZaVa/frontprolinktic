import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `http://${process.env.BACK_URL}:${process.env.BACK_PORT}/api`,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
