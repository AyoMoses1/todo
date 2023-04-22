/*eslint-disable*/
import endpoints from "../../src/utils/endpoints";
import { instance } from "../../src/configs/axios";

class Services {
  login(payload) {
    return instance({
      method: "POST",
      url: endpoints.login,
      email: payload.email,
      password: payload.password
    });
  }
}

export default new Services();
