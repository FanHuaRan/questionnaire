import axios from "axios";
import md5 from "md5";

let access_token = "";

class Util {
  static getQuestionnaires() {
    return axios
      .get("/api/questionnaire_survey/all", {
        headers: {
          Authorization: "bearer" + access_token
        }
      })
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(JSON.stringify(data));
        }
        return data.data;
      });
  }

  static getQuestions(id) {
    return axios
      .get(`/api/questionnaire_survey/get?questionnaire_id=${id}`, {
        headers: {
          Authorization: "bearer" + access_token
        }
      })
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(JSON.stringify(data));
        }
        return data.data;
      });
  }

  static commit(data) {
    return axios
      .post("/api/questionnaire_survey/commit", data, {
        headers: {
          Authorization: "bearer" + access_token
        }
      })
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(JSON.stringify(data));
        }
        return data.data;
      });
  }

  static login(data) {
    const { username, password } = data;
    return axios
      .post("/api/oauth/token", {
        username,
        password: md5(password),
        grant_type: "password",
        client_id: "client_qualification_web",
        client_secret: "c963b182e7539a2b073e8a8fbfd85356"
      })
      .then(result => {
        const { data } = result;
        if (data.code !== 20000) {
          throw new Error(JSON.stringify(data));
        }
        access_token = data.data.access_token;
        return data.data;
      });
  }
}

export default Util;
