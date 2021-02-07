import axios from "axios";
import md5 from "md5";
import Cookies from "js-cookie";

const tokenKey = "vue_admin_template_token";

class Util {
  static getQuestionnaires() {
    return axios
      .get("http://123.206.30.153:8080/api/questionnaire_survey/all", {
        headers: {
          Authorization: "bearer" + Cookies.get(tokenKey)
        }
      })
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw data;
        }
        return data.data;
      });
  }

  static getQuestions(id) {
    return axios
      .get(
        `http://123.206.30.153:8080/api/questionnaire_survey/get?questionnaire_id=${id}`,
        {
          headers: {
            Authorization: "bearer" + Cookies.get(tokenKey)
          }
        }
      )
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw data;
        }
        return data.data;
      });
  }

  static commit(data) {
    return axios
      .post(
        "http://123.206.30.153:8080/api/questionnaire_survey/commit",
        data,
        {
          headers: {
            Authorization: "bearer" + Cookies.get(tokenKey)
          }
        }
      )
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw data;
        }
        return data.data;
      });
  }

  static login(data) {
    const { username, password } = data;
    return axios
      .post(
        "http://123.206.30.153:8080/api/oauth/token",
        {
          username,
          password: md5(password),
          grant_type: "password",
          client_id: "client_qualification_web",
          client_secret: "c963b182e7539a2b073e8a8fbfd85356"
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          transformRequest: [
            data => {
              let ret = "";
              for (let it in data) {
                ret +=
                  encodeURIComponent(it) +
                  "=" +
                  encodeURIComponent(data[it]) +
                  "&";
              }
              ret = ret.substring(0, ret.lastIndexOf("&"));
              return ret;
            }
          ]
        }
      )
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw data;
        }
        Cookies.set(tokenKey, data.data.access_token);
        return data.data;
      });
  }
}

export default Util;
