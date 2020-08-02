import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/api/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "authenticate", {
        email,
        password
      })
      .then(response => {
        if (response.data.jwttoken) {
          localStorage.setItem("user", JSON.stringify(response.data));

        }
        console.log("Saving User as ",response.data);
        return response.data;
      });
  }

  scrape(link)
  {
      var postData = {
        "url": link
      };

      return axios
        .post(API_URL + "content",postData,{ headers: authHeader() })
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
  }

  logout() {
    localStorage.removeItem("user");
  }


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();